import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import OfficesSection from './components/OfficesSection';
import CertificationsSection from './components/CertificationsSection';
import TimelineSection from './components/TimelineSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'À Propos - S\'installer au Maroc',
  description: 'Découvrez notre équipe d\'experts, nos bureaux au Maroc, nos certifications et notre parcours de 15 ans d\'excellence dans l\'accompagnement à l\'expatriation vers le Maroc.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <HeroSection />
        <TeamSection />
        <OfficesSection />
        <CertificationsSection />
        <TimelineSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  );
}