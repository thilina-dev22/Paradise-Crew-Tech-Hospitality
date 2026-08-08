import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntegrationsBanner from "./components/IntegrationsBanner";
import IndustrySolutionsSection from "./components/IndustrySolutionsSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import PortfolioSection from "./components/PortfolioSection";
import EstimatorSection from "./components/EstimatorSection";
import PackagesSection from "./components/PackagesSection";
import ApproachSection from "./components/ApproachSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-ocean-500 selection:text-white antialiased font-sans">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { scroll-behavior: smooth; }
              body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #020617; }
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `,
          }}
        />
        <Navbar />
        <main>
          <HeroSection />
          <IntegrationsBanner />
          <IndustrySolutionsSection />
          <AppShowcaseSection />
          <PortfolioSection />
          <EstimatorSection />
          <PackagesSection />
          <ApproachSection />
          <ReviewsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
