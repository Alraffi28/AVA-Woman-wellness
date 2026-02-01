import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: 'health' | 'career' | 'safety';
  onClick?: () => void;
}

const variantStyles = {
  health: {
    container: 'bg-health-muted hover:border-health/30',
    icon: 'bg-health text-health-foreground',
    title: 'text-card-foreground',
  },
  career: {
    container: 'bg-career-muted hover:border-career/30',
    icon: 'bg-career text-career-foreground',
    title: 'text-card-foreground',
  },
  safety: {
    container: 'bg-safety-muted hover:border-safety/30',
    icon: 'bg-safety text-safety-foreground',
    title: 'text-card-foreground',
  },
};

export function ActionCard({ icon: Icon, title, description, variant, onClick }: ActionCardProps) {
  const styles = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-4 p-5 rounded-2xl border border-transparent',
        'transition-all duration-200 ease-out',
        'hover:shadow-card-hover hover:scale-[1.01]',
        'active:scale-[0.99]',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2',
        'text-left',
        styles.container
      )}
    >
      <div className={cn(
        'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center',
        'shadow-sm',
        styles.icon
      )}>
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={cn('text-lg font-semibold mb-0.5', styles.title)}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-snug">
          {description}
        </p>
      </div>
    </button>
  );
}
