import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-gradient-primary mb-4 md:mb-0">
              John Doe
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 John Doe.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
