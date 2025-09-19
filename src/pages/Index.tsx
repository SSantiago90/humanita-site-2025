import Header from "@/components/Header";
import NovedadesSection from "@/components/NovedadesSection";
import ServicesSection from "@/components/ServicesSection";
import CierreAnoSection from "@/components/CierreAnoSection";
import VideosSection from "@/components/VideosSection";

import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <Header />
      <main className="relative z-10">
        <NovedadesSection />
        <ServicesSection />
        <CierreAnoSection />
        <VideosSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
