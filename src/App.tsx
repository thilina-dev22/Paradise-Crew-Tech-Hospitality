import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntegrationsBanner from "./components/IntegrationsBanner";
import ServicesSection from "./components/ServicesSection";
import PackagesSection from "./components/PackagesSection";
import ApproachSection from "./components/ApproachSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-ocean-600 selection:text-white antialiased">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
            html { scroll-behavior: smooth; }
            body { font-family: 'Plus Jakarta Sans', sans-serif; }
          `,
        }}
      />
      <Navbar />
      <HeroSection />
      <IntegrationsBanner />
      <ServicesSection />
      <PackagesSection />
      <ApproachSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
