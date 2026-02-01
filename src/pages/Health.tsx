import { CalendarDays, Brain, HeartPulse } from 'lucide-react';
import { HealthHeader } from '@/components/ava/HealthHeader';
import { HealthCard } from '@/components/ava/HealthCard';
import { BottomNav } from '@/components/ava/BottomNav';
import { Footer } from '@/components/ava/Footer';

const healthSections = [
  {
    icon: CalendarDays,
    title: 'Menstrual Health',
    description: 'Track cycles, understand symptoms, and access reliable information',
    actionText: 'View & Track',
  },
  {
    icon: Brain,
    title: 'Mental Well-Being',
    description: 'Check in with your mood and explore stress-relief resources',
    actionText: 'Check In',
  },
  {
    icon: HeartPulse,
    title: 'General Wellness',
    description: 'Sleep, nutrition, and daily health tips for balance',
    actionText: 'Explore',
  },
];

const Health = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content container - centered on desktop */}
      <div className="max-w-lg mx-auto pb-24 flex-1 w-full">
        <HealthHeader title="Health Hub" />
        
        {/* Supportive Introduction */}
        <section className="px-6 pb-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your health matters. Explore tools and resources designed to support your well-being.
          </p>
        </section>
        
        {/* Health Sections */}
        <main className="px-6">
          <div className="flex flex-col gap-4">
            {healthSections.map((section, index) => (
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

export default Health;
