import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import MoroccoGuideInteractive from './components/MoroccoGuideInteractive';

export const metadata: Metadata = {
  title: 'Guide Complet du Maroc - S\'installer au Maroc',
  description: 'Découvrez notre guide complet pour réussir votre installation au Maroc. Guides des villes, procédures légales, coût de la vie, intégration culturelle et ressources pratiques.',
};

export default function MoroccoGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <MoroccoGuideInteractive />
      
      {/* Footer CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Prêt à Commencer Votre Aventure Marocaine ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nos experts vous accompagnent dans chaque étape de votre installation au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Consultation Gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300">
              Nos Services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}