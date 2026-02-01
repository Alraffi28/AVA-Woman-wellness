import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Greeting() {
  return (
    <section className="px-6 py-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Hello, how can AVA support you today?
      </h2>
      
      {/* Search Bar - UI only */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search health, safety, or career support"
          className="w-full h-11 pl-11 pr-4 rounded-full bg-secondary border-0 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary/30"
        />
      </div>
      <p className="text-muted-foreground text-sm mt-4">
        Choose an area below to get started
      </p>
    </section>
  );
}
