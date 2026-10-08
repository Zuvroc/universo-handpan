import Link from 'next/link';
import { siteConfig, navLinks } from '@/lib/data/site';

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.2em] uppercase">
            Universo <span className="text-gold">Handpan</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{footer.descripcion}</p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-muted-foreground">
          <p>{footer.ubicacion}</p>
          <a href={`mailto:${footer.email}`} className="mt-1 inline-block hover:text-foreground">
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
