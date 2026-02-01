import { Globe, Eye, Lock, Bell, Shield, HelpCircle, Info, LogOut, ChevronRight } from 'lucide-react';
import { HealthHeader } from '@/components/ava/HealthHeader';
import { BottomNav } from '@/components/ava/BottomNav';
import { Footer } from '@/components/ava/Footer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ProfileListItemProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  isLast?: boolean;
  variant?: 'default' | 'subtle';
}

function ProfileListItem({ icon: Icon, title, description, onClick, isLast, variant = 'default' }: ProfileListItemProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          'w-full flex items-center gap-4 px-4 py-4 text-left transition-colors',
          'hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset',
          variant === 'subtle' && 'opacity-75'
        )}
      >
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className={cn(
            'text-sm font-medium text-foreground',
            variant === 'subtle' && 'text-muted-foreground'
          )}>
            {title}
          </p>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {description}
            </p>
          )}
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      </button>
      {!isLast && <Separator className="ml-[72px]" />}
    </>
  );
}

const profileItems = [
  {
    icon: Globe,
    title: 'Language & Region',
    description: 'Change app language and regional preferences',
  },
  {
    icon: Eye,
    title: 'Accessibility Settings',
    description: 'Text size, contrast, and visual preferences',
  },
  {
    icon: Lock,
    title: 'Privacy & Data Control',
    description: 'Manage data usage and privacy options',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Control reminders and alerts',
  },
  {
    icon: Shield,
    title: 'Safety Preferences',
    description: 'Manage emergency and support settings',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    description: 'FAQs and contact support',
  },
  {
    icon: Info,
    title: 'About AVA',
    description: 'Learn more about the platform and its purpose',
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content container - centered on desktop */}
      <div className="max-w-lg mx-auto pb-24 flex-1 w-full">
        <HealthHeader title="Profile" />
        
        {/* Profile Summary Section */}
        <section className="px-6 py-6 flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarFallback className="bg-secondary text-secondary-foreground text-2xl font-medium">
              U
            </AvatarFallback>
          </Avatar>
          <p className="text-muted-foreground text-sm">
            Your Profile
          </p>
        </section>
        
        {/* Settings List */}
        <main className="px-6">
          <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
            {profileItems.map((item, index) => (
              <ProfileListItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                onClick={() => console.log(`Navigate to ${item.title}`)}
                isLast={index === profileItems.length - 1}
              />
            ))}
          </div>
          
          {/* Logout Button - Separate card */}
          <div className="mt-4 bg-card rounded-xl overflow-hidden shadow-sm border border-border">
            <ProfileListItem
              icon={LogOut}
              title="Logout / Exit App"
              onClick={() => console.log('Logout')}
              isLast
              variant="subtle"
            />
          </div>
        </main>
      </div>
      
      <BottomNav />
      
      <Footer />
    </div>
  );
};

export default Profile;
