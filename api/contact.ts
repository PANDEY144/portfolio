type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type ContactRequest = {
  method?: string;
  body?: ContactPayload | string;
};

type ContactResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (body: unknown) => unknown;
  };
};

declare const process: {
  env: Record<string, string | undefined>;
};

declare const console: {
  error: (...args: unknown[]) => void;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseBody(body: ContactRequest['body']): ContactPayload {
  if (!body) return {};
  if (typeof body !== 'string') return body;

  try {
    return JSON.parse(body) as ContactPayload;
  } catch {
    return {};
  }
}

export default async function handler(request: ContactRequest, response: ContactResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'pamdeygaurav911@gmail.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

  if (!resendApiKey) {
    return response.status(503).json({
      error: 'The contact form is not configured yet. Please email me directly instead.',
    });
  }

  const body = parseBody(request.body);
  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);

  if (name.length < 2) {
    return response.status(400).json({ error: 'Please enter your name.' });
  }

  if (!emailPattern.test(email)) {
    return response.status(400).json({ error: 'Please enter a valid email.' });
  }

  if (message.length < 12) {
    return response.status(400).json({ error: 'Please share a little more detail.' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error('Resend send failed', {
        status: resendResponse.status,
        body: resendError,
      });

      return response.status(502).json({
        error: 'Resend rejected the message. Check the function logs for sender/domain details.',
      });
    }
  } catch (error) {
    console.error('Resend request failed', error);
    return response.status(502).json({ error: 'Email service could not be reached. Please try again.' });
  }

  return response.status(200).json({ ok: true });
}
