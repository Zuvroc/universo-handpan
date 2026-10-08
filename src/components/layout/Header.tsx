'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.25em] uppercase"
        >
          Universo <span className="text-gold">Handpan</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground',
                pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" asChild className="hidden lg:inline-flex">
          <Link href="/contacto">Contacto</Link>
        </Button>

        <Button variant="ghost" size="sm" asChild className="lg:hidden">
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </header>
  );
}
