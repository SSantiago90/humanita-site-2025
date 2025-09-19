import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const CierreAnoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thumbnailCarouselRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://www.humanitaong.com.ar/img/galeria/1.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/1.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 2,
      src: "https://www.humanitaong.com.ar/img/galeria/2.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/2.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 3,
      src: "https://www.humanitaong.com.ar/img/galeria/3.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/3.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 4,
      src: "https://www.humanitaong.com.ar/img/galeria/4.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/4.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 5,
      src: "https://www.humanitaong.com.ar/img/galeria/5.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/5.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 6,
      src: "https://www.humanitaong.com.ar/img/galeria/6.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/6.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 7,
      src: "https://www.humanitaong.com.ar/img/galeria/7.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/7.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 8,
      src: "https://www.humanitaong.com.ar/img/galeria/8.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/8.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 9,
      src: "https://www.humanitaong.com.ar/img/galeria/9.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/9.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 10,
      src: "https://www.humanitaong.com.ar/img/galeria/10.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/10.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 11,
      src: "https://www.humanitaong.com.ar/img/galeria/11.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/11.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 12,
      src: "https://www.humanitaong.com.ar/img/galeria/12.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/12.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 13,
      src: "https://www.humanitaong.com.ar/img/galeria/13.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/13.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 14,
      src: "https://www.humanitaong.com.ar/img/galeria/14.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/14.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 15,
      src: "https://www.humanitaong.com.ar/img/galeria/15.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/15.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 16,
      src: "https://www.humanitaong.com.ar/img/galeria/16.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/16.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 17,
      src: "https://www.humanitaong.com.ar/img/galeria/17.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/17.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 18,
      src: "https://www.humanitaong.com.ar/img/galeria/18.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/18.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 19,
      src: "https://www.humanitaong.com.ar/img/galeria/19.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/19.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 20,
      src: "https://www.humanitaong.com.ar/img/galeria/20.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/20.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 21,
      src: "https://www.humanitaong.com.ar/img/galeria/21.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/21.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 22,
      src: "https://www.humanitaong.com.ar/img/galeria/22.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/22.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 23,
      src: "https://www.humanitaong.com.ar/img/galeria/23.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/23.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 24,
      src: "https://www.humanitaong.com.ar/img/galeria/24.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/24.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 25,
      src: "https://www.humanitaong.com.ar/img/galeria/25.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/25.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 26,
      src: "https://www.humanitaong.com.ar/img/galeria/26.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/26.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 27,
      src: "https://www.humanitaong.com.ar/img/galeria/27.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/27.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 28,
      src: "https://www.humanitaong.com.ar/img/galeria/28.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/28.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 29,
      src: "https://www.humanitaong.com.ar/img/galeria/29.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/29.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
    {
      id: 30,
      src: "https://www.humanitaong.com.ar/img/galeria/30.jpg",
      hdSrc: "https://www.humanitaong.com.ar/img/galeria/hd/30.jpg",
      alt: "Imagen de Ceremonia graduacion 2024",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const scrollNext = () => {
    if (thumbnailCarouselRef.current) {
      const scrollAmount = thumbnailCarouselRef.current.offsetWidth;
      thumbnailCarouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (thumbnailCarouselRef.current) {
      const scrollAmount = thumbnailCarouselRef.current.offsetWidth;
      thumbnailCarouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Cierre de Año 2024
            </h2>            
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full shadow-glow mb-8"></div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Cerramos un año extraordinario marcado por el crecimiento y la
                excelencia en la formación de mediadores especializados. Durante
                2024, hemos consolidado nuestro compromiso con la educación de
                calidad y la resolución pacífica de conflictos.
              </p>

              <p>
                Más de 200 profesionales se han capacitado en nuestros
                programas, contribuyendo al fortalecimiento del sistema de
                mediación civil en la región. Agradecemos a todos los
                participantes, docentes y colaboradores que hicieron posible
                estos logros.
              </p>

              <p>
                Nuestro compromiso continúa en 2025 con nuevos programas de
                formación y una propuesta académica renovada que responde a las
                demandas actuales del sistema judicial.
              </p>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <div className="card-elegant overflow-hidden cursor-pointer">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={galleryImages[currentImage].hdSrc}
                      alt={galleryImages[currentImage].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="bg-white/90 hover:bg-white shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>

                      <Button
                        variant="secondary"
                        size="icon"
                        className="bg-white/90 hover:bg-white shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImage + 1} / {galleryImages.length}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                <img
                  src={galleryImages[currentImage].hdSrc}
                  alt={galleryImages[currentImage].alt}
                  className="w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>

            <div className="relative mt-4">
              <div
                ref={thumbnailCarouselRef}
                className="flex overflow-x-auto scroll-snap-x-mandatory scrollbar-hide space-x-2"
              >
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    className={`w-16 h-12 rounded border-2 transition-colors duration-200 flex-shrink-0 scroll-snap-align-start ${
                      index === currentImage
                        ? "border-primary"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-8 w-8"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg h-8 w-8"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CierreAnoSection;