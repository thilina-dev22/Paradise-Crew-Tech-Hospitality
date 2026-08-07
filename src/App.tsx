import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntegrationsBanner from "./components/IntegrationsBanner";
import Footer from "./components/Footer";

// Lazy-load all below-the-fold sections — they only download when needed
const IndustrySolutionsSection = lazy(() => import("./components/IndustrySolutionsSection"));
const AppShowcaseSection = lazy(() => import("./components/AppShowcaseSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const EstimatorSection = lazy(() => import("./components/EstimatorSection"));
const PackagesSection = lazy(() => import("./components/PackagesSection"));
const ApproachSection = lazy(() => import("./components/ApproachSection"));
const ReviewsSection = lazy(() => import("./components/ReviewsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

// Minimal skeleton shown while a section loads
const SectionSkeleton = () => (
  <div className="py-24 bg-slate-950 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="h-6 bg-slate-800 rounded-full w-48 mx-auto" />
      <div className="h-10 bg-slate-800 rounded-xl w-2/3 mx-auto" />
      <div className="h-4 bg-slate-800/60 rounded-full w-1/2 mx-auto" />
    </div>
  </div>
);

const App = () => {
  return (
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
        {/* Above the fold — loads immediately */}
        <HeroSection />
        <IntegrationsBanner />

        {/* Below the fold — lazy loaded on demand */}
        <Suspense fallback={<SectionSkeleton />}>
          <IndustrySolutionsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AppShowcaseSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <EstimatorSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PackagesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ApproachSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ReviewsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
