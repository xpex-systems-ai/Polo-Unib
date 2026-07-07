import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { KellyIntroSection } from '@/components/home/KellyIntroSection';
import { ModalityCards } from '@/components/home/ModalityCards';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { CourseHighlights } from '@/components/home/CourseHighlights';
import { AuthoritySection } from '@/components/home/AuthoritySection';
import { AboutPreviewSection } from '@/components/home/AboutPreviewSection';
import { NewsSection } from '@/components/home/NewsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { FaqPreviewSection } from '@/components/home/FaqPreviewSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ModalityCards />
        <CourseHighlights />
        <KellyIntroSection />
        <WhyUsSection />
        <AboutPreviewSection />
        <TestimonialsSection />
        <NewsSection />
        <AuthoritySection />
        <LocationSection />
        <FaqPreviewSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
