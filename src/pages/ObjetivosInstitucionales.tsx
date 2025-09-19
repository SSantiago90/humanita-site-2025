import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headerImage from "@/assets/header-objetivos.jpg";

const ObjetivosInstitucionales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-80 overflow-hidden">
          <img 
            src={headerImage} 
            alt="Objetivos Institucionales" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Objetivos Institucionales</h1>
              <p className="text-xl md:text-2xl">Nuestras metas y propósitos</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Difundir y ayudar a instalar en la sociedad nuevos métodos no adversariales para resolver conflictos, trabajando colaborativamente con personas e instituciones públicas y privadas.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Contribuir con énfasis a través de la capacitación, a una concepción pacífica de convivencia ante la necesidad de restauración del orden social y la paz, en los ámbitos educativos, familiares, empresariales, institucionales y comunitarios.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Poner al alcance de la población un recurso basado en valores y contribuir decididamente a una concepción pacífica de convivencia, instalando métodos colaborativos y participativos que posibiliten Trabajar por un Hombre + Humano.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Buscar nuevas formas teórico- prácticas de dar solución a los conflictos que se presentan en todos los ámbitos de nuestra sistémica y compleja comunidad. Si bien la actividad más importante de estos años ha sido la mediación en todos sus campos de aplicación, la difusión de su marco teórico, resignificando las experiencias desde la mirada mediadora, para encontrar formas de vivir en armonía, para generar y profundizar la cultura pacifica. A través de un acompañamiento, de el asesoramiento y de difusión de todas las técnicas y métodos que contribuyen al encuentro de las familias y de los distintos sistemas de organización de la comunidad.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                HUMANITA mantiene como sustento ideológico y lógico que la resolución de conflictos es un nuevo paradigma de la comunicación con perspectivas, destrezas y procedimientos propios, que privilegia el acercamiento de las partes, la reivindicación de los vínculos, el refuerzo de los lazos entre las partes que voluntariamente se avengan a un proceso de Mediación.
              </p>
              
              <p className="text-lg leading-relaxed">
                HUMANITA actualmente se encuentra abocada en el compromiso concreto, firme y sostenido por sus principios fundacionales, de tomar a su cargo la creación de un escenario jurídico que regule el gobierno de la matrícula, la competencia de títulos, las facultades disciplinarias sobre los futuros matriculados y todas aquellas cuestiones relativas al ejercicio de la profesión de Mediador: facultades para dictar Código de Ética, fijar derechos de inscripción o reinscripción en la matrícula, denunciar el ejercicio ilegal de la profesión y el uso indebido de títulos, ejercer la representación y la defensa gremial de la profesión, formar parte de federaciones u otros organismos permanente o transitorios de carácter local, nacional e internacional que agrupen a profesionales en general o mediadores en particular, organizar servicios asistenciales y provisionales que cubran los riesgos sociales de sus matriculados y núcleo familiar, evacuar consultas que formulen las autoridades judiciales, administrativas o legislativas en materia propias de la incumbencia, dictar las normas a las que deberán ajustarse los profesionales, asesorar si es requerido u opinar en la preparación de planes de estudio y programas de enseñanza, provinciales o privadas, intervenir en la determinación de las incumbencias profesionales y formar parte de los Tribunales examinadores de capacitación profesional, mediante la elaboración y presentación de un proyecto de Ley de Creación del Consejo de Mediadores de la Provincia de Entre Ríos.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ObjetivosInstitucionales;