import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HealthHeaderProps {
  title: string;
}

export function HealthHeader({ title }: HealthHeaderProps) {
  return (
    <header className="pt-6 pb-4 px-6">
      <div className="flex items-center justify-center relative">
        <Link
          to="/"
          className="absolute left-0 p-2 -ml-2 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
          aria-label="Go back to Home"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={1.5} />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      </div>
    </header>
  );
}
