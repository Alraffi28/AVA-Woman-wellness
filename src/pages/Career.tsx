import { Compass, BookOpen, PiggyBank } from 'lucide-react';
import { HealthHeader } from '@/components/ava/HealthHeader';
import { HealthCard } from '@/components/ava/HealthCard';
import { BottomNav } from '@/components/ava/BottomNav';
import { Footer } from '@/components/ava/Footer';

const careerSections = [
  {
    icon: Compass,
    title: 'Career Exploration',
    description: 'Discover roles, career paths, and guidance tailored to your interests.',
    actionText: 'Explore Careers',
  },
  {
    icon: BookOpen,
    title: 'Skill Development',
    description: 'Access learning resources and courses to build relevant skills.',
    actionText: 'Start Learning',
  },
  {
    icon: PiggyBank,
    title: 'Financial Basics',
    description: 'Learn budgeting, saving, and financial planning fundamentals.',
    actionText: 'Learn More',
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content container - centered on desktop */}
      <div className="max-w-lg mx-auto pb-24 flex-1 w-full">
        <HealthHeader title="Career & Finance" />
        
        {/* Supportive Introduction */}
        <section className="px-6 pb-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Explore opportunities and build skills to support your professional growth.
          </p>
        </section>
        
        {/* Career Sections */}
        <main className="px-6">
          <div className="flex flex-col gap-4">
            {careerSections.map((section, index) => (
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

export default Career;
