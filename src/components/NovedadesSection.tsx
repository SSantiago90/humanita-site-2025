import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Clock10Icon, Mail, Phone, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import humanitaLogo from "@/assets/logo/logo-neg-full.png";
import humanitaIso from "@/assets/logo/logo-neg.png";
import heroMediationImg from "@/assets/hero-mediation.jpg";

const NovedadesSection = () => {
  const [selectedNovedad, setSelectedNovedad] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const novedades = [
    {
      id: 1,
      badge: "CURSO PRESENCIAL",
      title: "JUSTICIA RESTAURATIVA Y MEDIACIÓN PENAL",
      subtitle: "Formación Especializada 2025",
      date: new Date("2025-09-05T20:00:00.000Z"),
      time: "20 Hs. Homologadas",
      place: "Salón HUMANITA, Cervantes 574 - Paraná",
      speaker: "Docente invitado: Ulf Christian Eiras Nordenstahl",
      gradientFrom: "from-blue-800",
      gradientTo: "to-indigo-500",
      color: "blue-800",
      backgroundImage: "/assets/hero-mediation.jpg",
      footerText: "Contactanos para más información",
      body: []
    },
   {
      id: 2,
      badge: "CURSOS",
      title: "Cursos 2025",
      subtitle: "Oferta académica 2025",
      gradientFrom: "from-indigo-800",
      gradientTo: "to-violet-500",
      color: "indigo-800",
      backgroundImage: "",
      footerText: "Contactanos para más información",
      body: ["Mediación Básica (Formación básica en mediación prejudicial", "Especialización en mediación familiar", "Formación continua en mediación familiar", "Formación Continua: `El ABC de la mediación a distancia`"]
    }, 
    {
      id: 3,
      badge: "FORMACIÓN",
      title: "Formación Básica en Mediación Prejudicial",
      subtitle: "Mediación Básica",
      date: new Date("2025-05-14T10:00:00.000Z"),
      time: "180 Hs. Homologadas",
      place: "Paraná, Entre Ríos",
      speaker: "",
      gradientFrom: "from-indigo-800",
      gradientTo: "to-violet-500",
      color: "indigo-800",
      backgroundImage: "",
      footerText: "Inscripciones Abiertas",
      body: []
    },
   {
      id: 4,
      badge: "FORMACIÓN",
      title: "Formación Básica en Mediación Prejudicial",
      subtitle: "Mediación Básica",
      date: new Date("2025-04-01T10:00:00.000Z"),
      time: "180 Hs. Homologadas",
      place: "Concordia, Entre Ríos",
      speaker: "",
      gradientFrom: "from-violet-800",
      gradientTo: "to-purple-500",
      color: "violet-800",
      backgroundImage: "",
      footerText: "Inscripciones Abiertas",
      body: []
    },
  ]
  .map(novedad => ({
      ...novedad,
      subtitle: novedad.subtitle.slice(0,1).toUpperCase() + novedad.subtitle.toLowerCase().slice(1),
      title: novedad.title.slice(0,1).toUpperCase() + novedad.title.toLowerCase().slice(1),
      badge: novedad.badge.slice(0,1).toUpperCase() + novedad.badge.toLowerCase().slice(1),
    }));

  const nextSlide = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 4;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 4;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const openModal = (novedad) => {
    setSelectedNovedad(novedad);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 relative overflow-hidden pattern-dots">
      {/* Floating decorative elements */}
      <div className="floating-element top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-sm"></div>
      <div className="floating-element top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="floating-element bottom-20 left-1/3 w-20 h-20 bg-primary-glow/10 rounded-full blur-sm" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">      
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-fade-in">
            Novedades 2025
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-glow mx-auto rounded-full shadow-glow"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          
          <div
            ref={carouselRef}
            className="flex overflow-hidden scroll-snap-x-mandatory scrollbar-hide -mx-2 py-3"
          >
            {novedades.map((novedad) => (
              <div
                key={novedad.id}
                className="w-11/12 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 scroll-snap-align-start"
              >
                <div
                  className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => openModal(novedad)}
                >
                  <div className={`aspect-square relative bg-gradient-to-b ${novedad.gradientFrom} ${novedad.gradientTo} text-white rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-floating)] animated-border overflow-hidden`}>
                    <img src={ import.meta.env.BASE_URL + novedad.backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                    {/* Background texture */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between">                   
                        {novedad.date &&
                        <>
                        <div className="flex justify-between items-center mb-4">
                          <img 
                            src={humanitaIso} 
                            alt="Humanita Logo" 
                            className="w-8 h-8 object-contain"
                          />
                              <Badge variant="secondary" className={`bg-white/80 hover:bg-white/100 font-bold text-sm text-${novedad.color}`}>
                                {novedad.date.toLocaleDateString("es-ES", { day: "numeric", month: "long" }).toUpperCase()}
                              </Badge>
                        </div>
                        <hr className="opacity-60"/>
                        </>                           }
                      {/* Main content */}
                      <div className="flex-1 flex flex-col text-center mt-6">
                        <div>
                          <h3 className="text-lg uppercase font-bold leading-tight mb-1">
                            {novedad.title}
                          </h3>
                          <p className="text-xs opacity-90 font-medium">{novedad.subtitle}</p>
                        </div>

                        <div className="text-xs mt-4">
                          <div className="flex flex-col gap-1 align-center justify-center items-center">
                            <Badge variant="outline" className="opacity-80 hover:opacity-100">                             
                              <p className={`font-semibold text-white`}>{novedad.badge}</p>
                            </Badge>
                            {
                              novedad.time &&
                                <div className="mt-1 flex align-center justify-center items-center gap-1">
                                <Clock10Icon strokeWidth={2} size={12} className="inline"/> 
                                <p className="opacity-90">{novedad.time}</p>
                                </div>                              
                            }
                            {
                              novedad.body &&
                                <div className="mt-1 flex align-center justify-center items-center gap-1">                                
                                <ul>
                                  {novedad.body.map((item, index) => (
                                    <li key={index} className="opacity-90">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                                </div>
                            }
                          </div>                         
                         
                        </div>
                      </div>
                      <div className="flex gap-1 items-center opacity-75 mt-2">
                        <ZoomIn size={16} className="inline-block"></ZoomIn>
                      <p className="text-[9px]"> Click para ampliar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="secondary"
              size="sm"
              className="glass-morphism hover:bg-primary/20 shadow-[var(--shadow-glow)] hover:scale-110 transition-all duration-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              className="glass-morphism hover:bg-primary/20 shadow-[var(--shadow-glow)] hover:scale-110 transition-all duration-300"
              onClick={nextSlide}
            >
              Siguiente
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Modal for full-size view */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-md p-0 bg-transparent border-0">
              <div className="absolute inset-0 bg-black/10 rounded-2xl "></div>
              {selectedNovedad && (
                <div className={`aspect-[9/16] relative h-full bg-gradient-to-br ${selectedNovedad.gradientFrom} ${selectedNovedad.gradientTo} text-white rounded-2xl shadow-[var(--shadow-floating)] overflow-hidden`}>
                  {/* Logo at top */}
                  <img src={heroMediationImg} alt="background-image" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                            
                  <div className="relative z-10 p-6 h-full  flex flex-col justify-between">
                    <div className="flex justify-center mt-0">
                      <img 
                        src={humanitaLogo} 
                        alt="Humanita Logo" 
                        className="object-contain"
                      />
                    </div>
                    {/* Badge */}

                    {/* Main content */}
                    <div className="flex-1 flex flex-col justify-center text-center space-y-4 mb-6">
                    <div className="flex items-end justify-center ">
                      <Badge variant="outline" className={`text-white font-bold text-md`}>
                        {selectedNovedad.badge}
                      </Badge>
                    </div>
                      <div className="mb-8">
                        <h3 className="text-4xl font-black leading-tight uppercase mb-2 tracking-wide">
                          {selectedNovedad.title}
                        </h3>
                        <p className="text-lg opacity-90 font-semibold">
                          {selectedNovedad.subtitle}
                        </p>
                      </div>

                      <div className="space-y-4 text-sm px-8">
                        {
                          selectedNovedad.date && 
                            <Badge variant="shapy" className="bg-white p-2 text-primary">
                              <p className={`text-md text-${selectedNovedad.color}`} >
                                Inicio
                              </p>
                              <p className={`text-2xl font-bold text-${selectedNovedad.color}`} >
                                {selectedNovedad.date.toLocaleDateString("es-ES", { day: "numeric", month: "long" }).toUpperCase()}
                              </p>
                              <p className={`text-lg opacity-90 text-${selectedNovedad.color}`}>
                                {selectedNovedad.time}
                              </p>
                            </Badge>
                        }
                      
                        
                          {selectedNovedad.place && 
                        <div>
                          <>
                            <p className="font-semibold">Lugar:</p>
                            <p className="text-sm opacity-90 leading-snug">{selectedNovedad.place}</p>
                          </>
                        </div>
                          }
                        {
                          selectedNovedad.speaker &&
                          <div>
                          <p className="font-semibold">Docente invitado:</p>
                          <p className="text-sm opacity-90 font-medium">{selectedNovedad.speaker}</p>
                        </div>
                        }
                        {
                          selectedNovedad.body &&
                          <div>                          
                          <ul>
                            {selectedNovedad.body.map(item =>{
                              return(
                                <li>
                                  <p className="text-md font-semibold inline-block opacity-90 leading-snug mb-4">{item}</p>
                                </li>
                              )
                              })
                            }                            
                          </ul>
                          </div>
                        }
                      </div>
                    </div>

                    {/* Contact info at bottom */}
                    <hr/>
                    <div className="text-center space-y-2 mt-4">
                      <p className="text-md font-semibold uppercase tracking-wide">
                        {selectedNovedad.footerText}
                      </p>
                      <div className="flex justify-center items-center space-x-4 text-base">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>humanita.ong@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-3 h-3" />
                          <span>343 466-7788</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default NovedadesSection;