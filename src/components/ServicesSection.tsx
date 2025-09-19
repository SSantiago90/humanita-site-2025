import { Button } from "@/components/ui/button";
import heroMediationImg from "@/assets/hero-mediation.jpg";
import coordinacionImg from "@/assets/coordinacion-general.jpg";
import capacitacionesDesarrolloImg from "@/assets/capacitaciones-desarrollo.jpg";
import capacitacionesProgramadasImg from "@/assets/capacitaciones-programadas.jpg";

const ServicesSection = () => {
  return (
    <section className="py-0 relative">
      {/* Hero Image with Overlay Text */}
      <div className="relative h-[500px] mb-16 overflow-hidden">
        <img 
          src="https://www.humanitaong.com.ar/nimages/09.jpg"
          alt="Centro de Mediación"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-black/50 to-accent/60"></div>
        
        {/* Floating particles */}
        <div className="floating-element top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full" style={{ animationDelay: '3s' }}></div>
        <div className="floating-element top-1/2 left-3/4 w-1.5 h-1.5 bg-white/50 rounded-full" style={{ animationDelay: '5s' }}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="card-floating max-w-3xl mx-4 p-10 text-center animate-scale-in shadow-[var(--shadow-floating)]">
            <h1 className="text-3xl font-bold text-gradient mb-4">Centro de Mediación Civil</h1>
            <p className="text-lg text-foreground leading-relaxed">
              <b>Humanita - Asociación Civil de Mediación y resolución de conflictos</b>,<br/>ha sido habilitada con el número TREINTA Y CINCO (35) como Entidad Formadora de carácter no universitario en el Registro de Entidades Formadoras de la Ley N° 26.589, mediante la Disposición D.N.M y M.P.R.C N° 63 del 07 de septiembre del 2016.
            </p>
          </div>
        </div>
      </div>

      {/* Three Service Cards */}
      <div className="container mx-auto px-4 mb-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Coordinación General */}
          <div className="relative group overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-floating)] transition-all duration-500 animated-border hover:-translate-y-2">
            <div className="aspect-[4/3] relative">
              <img 
                src={"https://www.humanitaong.com.ar/nimages/01.jpg"} 
                alt="Coordinación General"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/95 via-orange-400/40 to-transparent group-hover:from-orange-600/95 transition-all duration-500"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-4xl font-bold mb-2 text-gradient-white text-shadow-md">Coordinación<br/>General</h3>
                <p className="text-sm opacity-90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 text-shadow-md">
                  Gestión integral de programas de mediación y coordinación de equipos especializados.
                </p>
                <Button variant="secondary" size="sm" className="hidden bg-white/20 hover:bg-white/40 text-white border-white/30 hover:scale-105 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 mb-4">
                  Más Información
                </Button>
              </div>
            </div>
          </div>

          {/* Capacitaciones en Desarrollo */}
          <div className="relative group overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-floating)] transition-all duration-500 animated-border hover:-translate-y-2">
            <div className="aspect-[4/3] relative">
              <img 
                src="https://www.humanitaong.com.ar/nimages/06.jpg"
                alt="Capacitaciones en Desarrollo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-700/95 via-teal-600/40 to-transparent group-hover:from-teal-800/95 transition-all duration-500"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2 text-gradient-white text-shadow-md">Capacitaciones en<br/>Desarrollo</h3>
                <p className="text-sm opacity-90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 text-shadow-md">
                  Programas formativos continuos para el desarrollo profesional en mediación.
                </p>
                <Button variant="secondary" size="sm" className="hidden bg-white/20 hover:bg-white/40 text-white border-white/30 hover:scale-105 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 mb-4">
                  Ver Cursos
                </Button>
              </div>
            </div>
          </div>

          {/* Capacitaciones Programadas */}
          <div className="relative group overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-floating)] transition-all duration-500 animated-border hover:-translate-y-2">
            <div className="aspect-[4/3] relative">
              <img 
                src="https://www.humanitaong.com.ar/nimages/04.jpg"
                alt="Capacitaciones Programadas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/95 via-yellow-500/40 to-transparent group-hover:from-yellow-700/95 transition-all duration-500"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-2 text-gradient-white text-shadow-md">Capacitaciones<br/>Programadas</h3>
                <p className="text-sm opacity-90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 text-shadow-md">
                  Cronograma de formaciones especializadas con certificación oficial.
                </p>
                <Button variant="secondary" size="sm" className="hidden  bg-white/20 hover:bg-white/40 text-white border-white/30 hover:scale-105 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 mb-4">
                  Ver Cronograma
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;