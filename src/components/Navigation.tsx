import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (isLoginPage) return null;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-blur shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-light tracking-tighter hover:text-primary transition-colors"
            >
              Hostelite
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('mess-menu')}
                className="text-sm hover:text-primary transition-colors"
              >
                Mess Menu
              </button>
              <button 
                onClick={() => scrollToSection('complaint-box')}
                className="text-sm hover:text-primary transition-colors"
              >
                Complaint Box
              </button>
              <button 
                onClick={() => scrollToSection('notice-board')}
                className="text-sm hover:text-primary transition-colors"
              >
                Notice Board
              </button>
              <button 
                onClick={() => navigate('/about-us')}
                className="text-sm hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate('/contact-us')}
                className="text-sm hover:text-primary transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 rounded-full neumorphic-btn text-sm font-medium"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:text-primary transition-colors"
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Tray */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
        />

        {/* Menu Tray */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm glass-card transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end p-2 hover:text-primary transition-colors mb-8"
            >
              <X size={28} weight="light" />
            </button>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection('mess-menu')}
                className="text-left text-xl hover:text-primary transition-colors py-3"
              >
                Mess Menu
              </button>
              <button
                onClick={() => scrollToSection('complaint-box')}
                className="text-left text-xl hover:text-primary transition-colors py-3"
              >
                Complaint Box
              </button>
              <button
                onClick={() => scrollToSection('notice-board')}
                className="text-left text-xl hover:text-primary transition-colors py-3"
              >
                Notice Board
              </button>
              <button
                onClick={() => {
                  navigate('/about-us');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-xl hover:text-primary transition-colors py-3"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate('/contact-us');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-xl hover:text-primary transition-colors py-3"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-6 px-6 py-3 rounded-full neumorphic-btn text-center"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
