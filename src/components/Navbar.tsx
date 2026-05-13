import { Menu, Moon, Sun, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { navItems, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), []);
  const active = useActiveSection(sectionIds);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        <span>{profile.initials}</span>
      </a>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '');
          return (
            <a
              key={item.href}
              className={active === sectionId ? 'is-active' : ''}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="nav-actions">
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button mobile-menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}
