const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <span className="text-sm font-semibold text-foreground tracking-wide">DOTNCUE</span>
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} DOTNCUE. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
