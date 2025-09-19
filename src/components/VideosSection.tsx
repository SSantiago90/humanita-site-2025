import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoThumb1 from "@/assets/video-1-thumb.jpg";
import videoThumb2 from "@/assets/video-2-thumb.jpg";
import videoThumb3 from "@/assets/video-3-thumb.jpg";
import videoThumb4 from "@/assets/video-4-thumb.jpg";

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Presentación de Humanita",
      thumbnail: videoThumb1,
      duration: "3:11",
      youtubeId: "1ZCUu27ZLxs"
    },
    {
      id: 2,
      title: "Palabras Victor Sánchez Hernández Mediacion Nueva Cultura",
      thumbnail: videoThumb2,
      duration: "4:34",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Casos Prácticos en Mediación Penal",
      thumbnail: videoThumb3,
      duration: "18:45",
      youtubeId: "dQw4w9WgXcQ"
    },
  ];

  const handleVideoClick = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-primary/5"></div>
      
      {/* Floating shapes */}
      <div className="floating-element top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-xl" style={{ animationDelay: '1s' }}></div>
      <div className="floating-element bottom-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-lg" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-4">
            <Play className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-fade-in">
            Videos
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary-glow mx-auto rounded-full shadow-glow mb-6"></div>
          <p className="hidden text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="card-floating overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-floating)] transition-all duration-500 animate-scale-in hover:-translate-y-3 animated-border"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handleVideoClick(video.youtubeId)}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-500">
                  <div className="bg-gradient-to-r from-primary to-accent text-white rounded-full p-5 group-hover:scale-125 transition-all duration-500 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-floating)]">
                    <Play className="h-10 w-10 fill-current transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 glass-morphism text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/20">
                  {video.duration}
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-3 left-3 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </h3>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 px-0 h-auto font-medium"
                >
                  Ver Video →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hidden bg-background hover:bg-secondary border-primary text-primary hover:text-primary/80"
          >
            Ver Todos los Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;