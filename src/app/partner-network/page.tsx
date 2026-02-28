import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PartnerNetworkInteractive from './components/PartnerNetworkInteractive';

export const metadata: Metadata = {
  title: 'Réseau de Partenaires - S\'installer au Maroc',
  description: 'Découvrez notre réseau de partenaires vérifiés au Maroc : banques, agences immobilières, cabinets juridiques et experts comptables pour votre installation.',
};

export default function PartnerNetworkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gradient-morocco mb-6">
              Notre Réseau de Partenaires
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Un écosystème complet de professionnels vérifiés et expérimentés pour accompagner 
              votre installation et votre réussite au Maroc. Chaque partenaire est sélectionné 
              pour son expertise et sa capacité à servir les expatriés francophones.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Partenaires vérifiés</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Expertise locale</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Service francophone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content */}
      <PartnerNetworkInteractive />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-poppins font-bold text-white mb-4">
              Vous êtes un professionnel ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez notre réseau de partenaires et accompagnez les expatriés 
              dans leur installation au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-colors duration-300">
                Devenir Partenaire
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} S'installer au Maroc. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}