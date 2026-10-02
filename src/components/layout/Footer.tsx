import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig, navLinks } from '@/lib/data/site';

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{footer.nombre}</h3>
            <p className="text-sm text-muted-foreground">{footer.descripcion}</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{footer.ubicacion}</p>
              <a href={`mailto:${footer.email}`} className="hover:text-primary transition-colors">
                {footer.email}
              </a>
            </div>
          </div>

          <nav>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h4 className="font-semibold mb-4">Escuela</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/escuela" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Clases y membresías
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cursos online
                </Link>
              </li>
              <li>
                <Link href="/tutoriales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tutoriales gratis
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/eventos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Próximos eventos
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Unirse a la comunidad
                </Link>
              </li>
              <li>
                <Link href="/profesores" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conocer profesores
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {footer.nombre}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}