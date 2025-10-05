import { AnimatedBackground } from '@/components/animated-background';
import { Header } from '@/components/header';
import { GSAPHeroSection } from '@/components/gsap-animation/gsap-hero-section';
import { GSAPAboutSection } from '@/components/gsap-animation/gsap-about-section';
import { ServicesSection } from '@/components/services-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { PortfolioShowcase } from '@/components/portfolio-showcase';
import { GSAPPageWrapper } from '@/components/gsap-animation/gsap-page-wrapper';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <GSAPPageWrapper className="min-h-screen relative overflow-hidden">

      <div className="container">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Header - Moved outside content containers to avoid z-index stacking issues */}
        <Header />

        {/* Main Content */}
        <div className="container relative z-10 flex flex-col min-h-screen">
          {/* Hero Section with GSAP */}
          <GSAPHeroSection />
        </div>

        {/* Portfolio Sections */}
        <div className="relative z-10 space-y-0">
          {/* About Section */}
          {/* <AboutSection /> */}
          <GSAPAboutSection />
          {/* Services Section */}
          <ServicesSection />

          {/* Education Section */}
          <EducationSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Portfolio Showcase Section */}
          <PortfolioShowcase /> 

          {/* Contact Section */}
          <ContactSection />

        </div>
      </div>
    </GSAPPageWrapper>
  );
}
