import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerImage from "@/assets/header-quienes-somos.jpg";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-80 overflow-hidden">
          <img 
            src={headerImage} 
            alt="Quienes Somos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Quienes Somos</h1>
              <p className="text-xl md:text-2xl">Conoce nuestra historia y misión</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Humanita nace como un grupo de estudio, de profesionales, soñadores, utópicos, que coincidíamos en la búsqueda de un mundo pacífico, bello, rico, espiritual….. QUE sentimos la necesidad o el llamado de centrar nuestra actividad en mejorar la calidad de vida del ser humano. De ahí surge nuestro slogan "Trabajamos por un hombre más humano." 
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Creemos profundamente que esto sólo es posible, si trabajamos para, por y desde la paz, entendiendo esto como la convivencia armónica, disfrutando el placer de estar juntos, revalorizando nuestras diferencias, potenciando nuestras fortalezas.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                A esta idea la sentimos como una vocación, un deber de transmitir aquello que consideramos puede ser luz para los seres que sienten como nosotros la necesidad de vivir, convivir y transmitir, que un mundo mejor es posible. Es una idea remanida, pero realmente sentida por mucho más personas de las que suponemos. Esta reflexión genera en nosotros un compromiso, una responsabilidad de trasmitir que éste es el camino, y al decir de Martín Cunz "Ser uno mismo el camino para otros, ahí donde está seco y arenoso. Tener el coraje de ser camino contra la ideología dominante, que me impone "ir por mi propio camino"; y ser un camino sobre el cual puedan caminar los otros también".
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Este grupo, después de conocer los métodos pacíficos para resolver conflictos, profundizó el marco teórico, y apoyados en su experiencia en lo social, priorizo las coincidencias de objetivos y lo plasmó en un proyecto que hoy está en marcha y es una realidad con diez años de vida.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Como fundadora y coordinadora del grupo, veo esta como una oportunidad para agradecer a todas las personas que nos acompañaron desde el principio y que nos siguen acompañando en esta cruzada de instalar con fuerza la idea que la mediación es el presente y el futuro de una sociedad que quiere el cambio. De una cultura confrontativa a una convivencia armónica, pacífica, que hace hincapié en lo positivo y que afronta las diferencias desde una mirada mediadora, colaborativa y que hace de los principios de la Mediación, sinceros parámetros de conducta en la interacción con los demás.
              </p>
              
              <p className="text-lg leading-relaxed">
                HUMANITA, buscó su forma de organización legal y se constituyó en una Asociación Civil de Mediación y Gestión de Conflictos, Entidad Capacitadora Habilitación Nº 157/01, del Libro de Entidades Capacitadoras de la Dirección Nacional de Promoción de Métodos Participativos de Justicia. Según Resolución Nº 284/98 del Ministerio de Justicia, Seguridad y Derechos Humanos de la Nación. Es entidad sin fines de lucro que nació el 27/12/2000, y fuera aprobada por Resolución Nº 332 de la Dirección de Inspeccion de Personas Jurídicas de la Provincia de Entre Ríos, Matrícula Nº3336/00. Es la Primera Entidad Asociada a la Delegación Argentina del Foro Mundial de Mediación.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;