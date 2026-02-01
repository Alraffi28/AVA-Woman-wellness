import { Home, Heart, Briefcase, Shield, LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Heart, label: 'Health', href: '/health' },
  { icon: Briefcase, label: 'Career', href: '/career' },
  { icon: Shield, label: 'Safety', href: '/safety' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-nav shadow-nav border-t border-border">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  'flex flex-col items-center justify-center min-w-[64px] py-2 px-3 rounded-xl',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary/20',
                  isActive
                    ? 'text-nav-active'
                    : 'text-nav-foreground hover:text-foreground'
                )}
              >
                <Icon
                  className={cn('w-6 h-6 mb-1', isActive && 'stroke-[2]')}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className={cn('text-xs font-medium', isActive && 'font-semibold')}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Safe area padding for mobile devices */}
      <div className="h-safe-area-inset-bottom bg-nav" />
    </nav>
  );
}
