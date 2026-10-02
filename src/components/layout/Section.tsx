import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'primary' | 'dark';
}

export function Section({
  children,
  className,
  id,
  padding = 'lg',
  background = 'default',
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    primary: 'bg-primary text-primary-foreground',
    dark: 'bg-gray-950 text-white',
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full',
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}