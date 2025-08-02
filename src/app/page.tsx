import { AnimatedBackground } from '@/components/animated-background';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { PortfolioShowcase } from '@/components/portfolio-showcase';
// import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="container min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header - Moved outside content containers to avoid z-index stacking issues */}
      <Header />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <HeroSection />
      </div>

      {/* Portfolio Sections */}
      <div className="relative z-10 space-y-0">
        {/* About Section */}
        <AboutSection />  

        {/* Services Section */}
        <ServicesSection />

        {/* Education Section */}
        <EducationSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Portfolio Showcase Section */}
        <PortfolioShowcase />

        {/* Contact Section */}
        {/* <ContactSection /> */}
      </div>
    </div>
  );
}
