import { Lock } from 'lucide-react';

export function PrivacyNote() {
  return (
    <div className="flex items-center justify-center gap-2 py-6 px-6">
      <Lock className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
      <p className="text-xs text-muted-foreground">
        Your data is private. You're always in control.
      </p>
    </div>
  );
}
