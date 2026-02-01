export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="hidden md:block py-6 text-center text-sm text-muted-foreground border-t border-border">
      <p>© {currentYear} AVA. All rights reserved.</p>
    </footer>
  );
}
