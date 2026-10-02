'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
          <span className="hidden sm:block">UNIVERSO HANDPAN</span>
          <span className="sm:hidden">UH</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contacto">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Contacto
            </Button>
          </Link>
          <Button variant="default" size="sm" asChild>
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}