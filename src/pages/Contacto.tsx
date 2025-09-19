import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import headerImage from "@/assets/header-contacto.jpg";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      ciudad: "",
      mensaje: ""
    });
  };

  const coordinaciones = [
    {
      ciudad: "Paraná - Sede Principal",
      direccion: "Cervantes 574 (CP:3100)",
      telefono: "(0343) 4231057 / Cel: 343-4667788",
      email: "humanita.ong@gmail.com",
      horarios: "de Lunes a Viernes de 9 a 13:00 y de 14:30 a 17:00 hs."
    },
    {
      ciudad: "Corrientes",
      coordinadores: [
        {
          nombre: "Dr. Carlos Roberto Sommer",
          telefono: "03794—463123 / 15689722",
          email: "carlossommer@hotmail.com"
        },
        {
          nombre: "Dr Juan C. Martínez Douffort",
          direccion: "Buenos Aires 508—CORRIENTES",
          telefono: "03794—490986 / 15722790",
          email: "estudiojuridicosalazar-martinez@hotmail.com"
        }
      ],
      cursado: {
        lugar: "Consejo Profesional de Ciencias Económicas de CORRIENTES",
        direccion: "Carlos Pellegrini 1152 — CORRIENTES",
        telefono: "03783 422884 - 429826"
      }
    },
    {
      ciudad: "Chaco",
      coordinadores: [
        {
          nombre: "Dr. Carlos Roberto Sommer",
          telefono: "03794—463123 / 15689722",
          email: "carlossommer@hotmail.com"
        },
        {
          nombre: "Dr. Victor Emilio Del Rio",
          telefono: "0362-4427051",
          email: "victor.delrio@live.com.ar"
        }
      ]
    },
    {
      ciudad: "Misiones",
      email: "humanita.ong@gmail.com",
      telefono: "0343-4234265 – 0343-154062268"
    },
    {
      ciudad: "Formosa",
      lugar: "Instituto Superior Santa Isabel",
      telefono: "03717 - 15687109",
      email: "patovillalba@hotmail.com"
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
            alt="Contacto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Contacto</h1>
              <p className="text-xl md:text-2xl">Ponte en contacto con nosotros</p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-foreground">Contacto</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Completa el formulario y nos pondremos en contacto contigo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="bg-background/20 placeholder:text-muted-foreground/80"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="bg-background/20 placeholder:text-muted-foreground/80"
                        placeholder="Tu teléfono"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/20 placeholder:text-muted-foreground/80"
                        placeholder="Tu email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        required
                        className="bg-background/20 placeholder:text-muted-foreground/80"
                        placeholder="Escribe tu mensaje aquí"
                      />
                    </div>
                    <Button type="submit" className="w-full" variant="secondary">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Main Office Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Sede de Humanita - Paraná
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Cervantes 574 (CP:3100)</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>(0343) 4231057 / Cel: 343-4667788</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>humanita.ong@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>de Lunes a Viernes de 9 a 13:00 y de 14:30 a 17:00 hs.</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Regional Coordinaciones */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Coordinaciones Regionales
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {coordinaciones.slice(1).map((coord, index) => (
                      <Card key={index} className="h-full">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base text-primary">
                            {coord.ciudad}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-sm">
                          {coord.coordinadores && (
                            <div>
                              <h4 className="font-semibold mb-1">Coordinadores:</h4>
                              {coord.coordinadores.map((coordinador, idx) => (
                                <div key={idx} className="mb-2 p-2 bg-muted/30 rounded">
                                  <p className="font-medium">{coordinador.nombre}</p>
                                  {coordinador.direccion && <p className="text-xs">{coordinador.direccion}</p>}
                                  <p className="text-xs">Tel: {coordinador.telefono}</p>
                                  <p className="text-xs">{coordinador.email}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          {coord.cursado && (
                            <div className="hidden mt-2">
                              <h4 className="font-semibold mb-1">Cursado:</h4>
                              <div className="p-2 bg-muted/30 rounded">
                                <p className="font-medium">{coord.cursado.lugar}</p>
                                <p className="text-xs">{coord.cursado.direccion}</p>
                                <p className="text-xs">Tel: {coord.cursado.telefono}</p>
                              </div>
                            </div>
                          )}
                          {coord.lugar && (
                            <p className="text-xs mt-2"><span className="font-medium">Lugar:</span> {coord.lugar}</p>
                          )}
                          {coord.telefono && !coord.coordinadores && (
                            <p className="text-xs"><span className="font-medium">Tel:</span> {coord.telefono}</p>
                          )}
                          {coord.email && !coord.coordinadores && (
                            <p className="text-xs"><span className="font-medium">Email:</span> {coord.email}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;