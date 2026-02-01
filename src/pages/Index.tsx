import { Heart, Briefcase, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ava/Header';
import { Greeting } from '@/components/ava/Greeting';
import { ActionCard } from '@/components/ava/ActionCard';
import { PrivacyNote } from '@/components/ava/PrivacyNote';
import { BottomNav } from '@/components/ava/BottomNav';
import { Footer } from '@/components/ava/Footer';

const actionCards = [
  {
    icon: Heart,
    title: 'Health',
    description: 'Track cycles, mental well-being, and learn about your body',
    variant: 'health' as const,
    route: '/health',
  },
  {
    icon: Briefcase,
    title: 'Career & Finance',
    description: 'Explore career paths and build financial confidence',
    variant: 'career' as const,
    route: '/career',
  },
  {
    icon: Shield,
    title: 'Safety & Support',
    description: 'Access help, resources, and emergency support',
    variant: 'safety' as const,
    route: '/safety',
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content container - centered on desktop */}
      <div className="max-w-lg mx-auto pb-24 flex-1">
        <Header />
        
        <Greeting />
        
        {/* Primary Action Cards */}
        <main className="px-6">
          <div className="flex flex-col gap-4">
            {actionCards.map((card, index) => (
              <div
                key={card.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ActionCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  variant={card.variant}
                  onClick={() => navigate(card.route)}
                />
              </div>
            ))}
          </div>
        </main>
        
        <PrivacyNote />
      </div>
      
      <BottomNav />
      
      <Footer />
    </div>
  );
};

export default Index;
