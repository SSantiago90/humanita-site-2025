import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import headerImage from "@/assets/header-academica.jpg";

const PropuestaAcademica = () => {
  const cursos = [
    {
      titulo: "Formación Completa del Mediador - Formación Básica",
      descripcion: "Programa integral de formación para futuros mediadores"
    },
    {
      titulo: "Formación Completa de Mediadores Educativos",
      descripcion: "Especialización en mediación para el ámbito educativo"
    },
    {
      titulo: "Formación Continua para Mediadores en ejercicio de la profesión",
      descripcion: "Actualización profesional para mediadores activos"
    },
    {
      titulo: "Mediación Comunitaria",
      descripcion: "Técnicas de mediación para conflictos comunitarios"
    },
    {
      titulo: "Diplomatura en Mediación Penal para la Seguridad Pública",
      descripcion: "Convenio UNLZ - Especialización en mediación penal"
    },
    {
      titulo: "Diplomatura en Mediación Familiar",
      descripcion: "Convenio UNLZ - Enfoque en resolución de conflictos familiares"
    },
    {
      titulo: "Posgrado en Derecho Procesal y Métodos Pacíficos para Resolver Conflictos",
      descripcion: "Convenio la Universidad Nacional de Lomas de Zamora"
    },
    {
      titulo: "Capacitación al Servicio Penitenciario",
      descripcion: "Personal de unidades penitenciarias e internos de las mismas unidades"
    },
    {
      titulo: "Capacitación para la Promoción en la carrera policial",
      descripcion: "Programa especializado para fuerzas policiales"
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
            alt="Propuesta Académica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Propuesta Académica</h1>
              <p className="text-xl md:text-2xl">Nuestros cursos y programas de formación</p>
            </div>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursos.map((curso, index) => (
                <Card 
                  key={index} 
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-primary text-lg">
                      {curso.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between">
                    <CardDescription className="text-foreground/80 leading-relaxed mb-4">
                      {curso.descripcion}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full mt-auto"
                      onClick={() => alert('Enlace a PDF disponible próximamente')}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Ver más
                    </Button>
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

export default PropuestaAcademica;