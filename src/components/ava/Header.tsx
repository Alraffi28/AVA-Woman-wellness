import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import avaLogo from '@/assets/AVA_L.png';

export function Header() {
  return (
    <header className="pt-6 pb-4 px-6">
      <div className="flex items-center justify-between">
        <img src={avaLogo} alt="AVA - Access Voice Autonomy" className="h-16 w-auto" />
        <Link
          to="/profile"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-secondary-foreground" />
        </Link>
      </div>
    </header>
  );
}
