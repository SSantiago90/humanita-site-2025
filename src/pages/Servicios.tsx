import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import headerImage from "@/assets/header-servicios.jpg";

const Servicios = () => {
  const servicios = [
    {
      titulo: "Servicio de Mediación Privada",
      descripcion: "Servicio de Mediación Privada, judicial, penal y en todos los ámbitos, servicio que está en condiciones de prestar con los profesionales inscriptos en su Registro de Mediadores."
    },
    {
      titulo: "Formación Completa en Mediación", 
      descripcion: "Capacita anualmente, desde hace 10 años, la Formación Completa - Básica introductorio, entrenamiento y pasantía en Mediación, reconocida por el Ministerio de Justicia, Seguridad y Derechos Humanos de la Nación. Destinada a Profesionales de todas las disciplinas."
    },
    {
      titulo: "Capacitación Penitenciaria",
      descripcion: "Capacita, desde el año dos mil seis, a las siete Unidades Penitenciarias de la Provincia, a través de un proyecto denominado 'Mejorando la Comunicación y la Convivencia Penitenciaria a través de Diálogos Colaborativos', aprobado por Resolución y que a la fecha continúa."
    },
    {
      titulo: "Capacitación Policial",
      descripcion: "Capacita, desde el año dos mil siete, a los Oficiales Principales y Comisarios de la Dirección General de la Policía de Entre Ríos, en los Cursos de Oficiales y Comisarios Principales, para la Carrera Policial."
    },
    {
      titulo: "Mediación Comunitaria",
      descripcion: "Promueve el sistema de abordaje de conflictos tanto en el ámbito comunitario, educativo, familiar, judicial, ambiental, mediante el cual, un profesional formado específicamente actúa de nexo neutral (sin poder) entre personas o partes que mantienen controversias."
    },
    {
      titulo: "Formación Continua",
      descripcion: "Ofrece y capacita recurso humano, en formación continua para ejercer la mediación en diferentes ámbitos."
    },
    {
      titulo: "Difusión de Métodos Alternativos", 
      descripcion: "Promueve y difunde en la comunidad métodos no adversariales en la resolución de conflictos, a través de un trabajo colaborativo con personas, instituciones públicas y privadas."
    },
    {
      titulo: "Investigación y Estudios",
      descripcion: "Está abocada al servicio, al estudio e investigación y a la difusión de las temáticas relacionadas con el conflicto, con el cambio y los diálogos constructivos."
    },
    {
      titulo: "Convenios Institucionales",
      descripcion: "Pone en práctica, a través de Convenios con distintas instituciones, la mediación y la capacitación en Universidades, Institutos Terciarios de distintas disciplinas, que así lo requieran."
    },
    {
      titulo: "Programas Universitarios",
      descripcion: "Ofrece, actualmente y mediante Convenio Firmado con la Facultad de Derecho de la Universidad de Lomas de Zamora, la Diplomatura en Mediación Penal para la Seguridad Pública, Diplomatura en Mediación Familiar y Posgrado en Derecho Procesal y Métodos Pacíficos para Resolver Conflictos."
    },
    {
      titulo: "Foro Mundial de Mediación",
      descripcion: "Pertenece al Foro Mundial de Mediación, como Institución y además como Delegación Regional y es centro de práctica para la realización del Master en Mediación del Instituto Latinoamericano – Europeo Universitario Kurt Bösch de Sion Suiza."
    },
    {
      titulo: "Formación de Mediadores Educativos",
      descripcion: "Dicta la Formación Completa de Mediadores Educativos y talleres y seminarios de Formación Continua para Mediadores en ejercicio de la profesión."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-80 overflow-hidden">
          <img 
            src={headerImage} 
            alt="Servicios" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Servicios</h1>
              <p className="text-xl md:text-2xl">Lo que ofrecemos a la comunidad</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicios.map((servicio, index) => (
                <Card 
                  key={index} 
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-primary text-lg">
                      {servicio.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 leading-relaxed">
                      {servicio.descripcion}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;