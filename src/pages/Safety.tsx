import { ShieldAlert, Scale, Users } from 'lucide-react';
import { HealthHeader } from '@/components/ava/HealthHeader';
import { HealthCard } from '@/components/ava/HealthCard';
import { BottomNav } from '@/components/ava/BottomNav';
import { Footer } from '@/components/ava/Footer';

const safetySections = [
  {
    icon: ShieldAlert,
    title: 'Emergency Support',
    description: 'Quick access to emergency contacts and helplines.',
    actionText: 'Get Help Now',
  },
  {
    icon: Scale,
    title: 'Know Your Rights',
    description: 'Learn about legal rights and workplace protections.',
    actionText: 'Learn More',
  },
  {
    icon: Users,
    title: 'Support Resources',
    description: 'Find organizations and resources for guidance and support.',
    actionText: 'View Resources',
  },
];

const Safety = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content container - centered on desktop */}
      <div className="max-w-lg mx-auto pb-24 flex-1 w-full">
        <HealthHeader title="Safety & Support" />
        
        {/* Supportive Introduction */}
        <section className="px-6 pb-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            You're not alone. Access support, resources, and help when you need it.
          </p>
        </section>
        
        {/* Safety Sections */}
        <main className="px-6">
          <div className="flex flex-col gap-4">
            {safetySections.map((section, index) => (
              <div
                key={section.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <HealthCard
                  icon={section.icon}
                  title={section.title}
                  description={section.description}
                  actionText={section.actionText}
                  onClick={() => console.log(`Navigate to ${section.title}`)}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      
      <BottomNav />
      
      <Footer />
    </div>
  );
};

export default Safety;
