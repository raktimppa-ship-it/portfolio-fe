import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-bold text-gradient-primary">
            John Doe
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xl text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Button & Admin Link - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/admin">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Register
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-8 pb-8 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-xl text-foreground hover:text-primary transition-smooth py-2"
              >
                {item.name}
              </button>
            ))}
            <Link to="/admin" className="w-full">
              <Button variant="ghost" size="lg" className="w-full mb-4">
                <Settings className="h-4 w-4 mr-2" />
                Register
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;