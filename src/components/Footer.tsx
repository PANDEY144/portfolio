import { profile, navItems } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#home"><span>{profile.initials}</span></a>
        <p>© 2026 {profile.name}. Designed and built for clarity, craft, and opportunity.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </footer>
  );
}
