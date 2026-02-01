import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HealthCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  onClick?: () => void;
}

export function HealthCard({ icon: Icon, title, description, actionText, onClick }: HealthCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex flex-col p-5 rounded-2xl border border-transparent',
        'bg-health-muted hover:border-health/30',
        'transition-all duration-200 ease-out',
        'hover:shadow-card-hover hover:scale-[1.01]',
        'active:scale-[0.99]',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2',
        'text-left'
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center',
          'bg-health text-health-foreground',
          'shadow-sm'
        )}>
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-snug mb-3">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-health">
            {actionText}
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}
