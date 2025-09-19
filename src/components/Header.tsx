import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import humanitaLogo from "@/assets/humanita-logo.png";
import certifImage from "@/assets/docs/certif.jpg";
import informaImage from "@/assets/informa.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCertifModalOpen, setIsCertifModalOpen] = useState(false);
  const [isHumanitaInformaModalOpen, setIsHumanitaInformaModalOpen] = useState(false);
  const location = useLocation();

  const mainMenuItems = [
    { name: "Inicio", path: "/" },
    { name: "Quienes Somos", path: "/quienes-somos" },
    { name: "Objetivos", path: "/objetivos" },
    { name: "Servicios", path: "/servicios" },
    { name: "Propuesta Académica", path: "/propuesta-academica" },
    { name: "Contacto", path: "/contacto" }
  ];


  return (
    <header className="bg-white/90 backdrop:blur-xl border-b border-border/50 header-shadow sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(0343) 4231057</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>humanita.org@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Cervantes 574, Paraná, Entre Ríos</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={humanitaLogo} alt="Humanita" className="h-18 w-auto" />
            <div className="hidden">
              <h1 className="text-2xl font-bold text-primary">Humanita</h1>
              <p className="text-sm text-muted-foreground">Centro de Mediación Civil</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col items-end">
            <nav className="flex items-center space-x-6">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center space-x-4">
                    <Dialog open={isHumanitaInformaModalOpen} onOpenChange={setIsHumanitaInformaModalOpen}>
                      <DialogTrigger asChild>
                        <Button                          
                          variant="outline"
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground border-secondary"
                        >
                          Humanita Informa
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0">
                        <img src={informaImage} alt="Humanita Informa" className="w-full h-auto object-contain" />
                      </DialogContent>
                    </Dialog>
                    <Dialog open={isCertifModalOpen} onOpenChange={setIsCertifModalOpen}>
                      <DialogTrigger asChild>
                        <Button                          
                          variant="outline"
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground border-secondary"
                        >
                        Certificado de Habilitación
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0">
                        <img src={informaImage} alt="Humanita Informa" className="w-full h-auto object-contain" />
                      </DialogContent>
                    </Dialog>
                    <Link to="/contacto">
                      <Button                          
                          variant="outline"
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground border-secondary"
                          >
                          Inscripciones
                        </Button>
                    </Link>
                    
                 
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-foreground hover:text-primary transition-colors duration-200 py-2 ${
                    location.pathname === item.path ? 'text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border/30 space-y-2">
         
                    <Dialog open={isHumanitaInformaModalOpen} onOpenChange={setIsHumanitaInformaModalOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-accent text-accent-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Certificado de Habilitación
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0">
                        <img src={informaImage} alt="Humanita Informa" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
             
              </div>
            </nav>
          </div>
        )}
      </div>
      <Dialog open={isCertifModalOpen} onOpenChange={setIsCertifModalOpen}>
        <DialogContent className="max-w-4xl p-0">
          <img src={certifImage} alt="Certificado de Habilitación" className="w-full h-auto" />
        </DialogContent>
      </Dialog>
      <Dialog open={isHumanitaInformaModalOpen} onOpenChange={setIsHumanitaInformaModalOpen}>
        <DialogContent className="max-w-4xl p-0">
          <img src={informaImage} alt="Humanita Informa" className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;