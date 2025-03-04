import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    };
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`bg-bg-primary transition-all duration-300 sticky top-0 z-50 ${
          isScrolled 
            ? 'h-16 shadow-md bg-bg-primary/95 backdrop-blur-sm border-b border-border-light/80' 
            : 'h-20 shadow-sm border-b border-border-light'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className={`font-bold text-primary-600 dark:text-primary-400 transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-2xl'
                }`}>
                  E-Timeline
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={`text-text-secondary hover:text-primary-600 px-2 py-1 font-medium transition-all duration-300 ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side items (theme toggle, etc.) */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="text-text-secondary hover:text-text-primary focus:outline-none"
                  aria-label="Toggle menu"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Fixed mobile menu that covers the entire screen below the header */}
      {isMenuOpen && (
        <div className="fixed left-0 right-0 top-0 bottom-0 z-40 md:hidden" style={{ top: headerRef.current ? `${headerRef.current.offsetHeight}px` : isScrolled ? '64px' : '80px' }}>
          <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-sm shadow-lg border-t border-border-light"></div>
          <div className="relative h-full overflow-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className="block py-3 px-4 text-lg font-medium text-text-secondary hover:text-primary-600 hover:bg-bg-secondary/80 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
