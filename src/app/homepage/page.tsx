import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Accueil - S\'installer au Maroc',
  description: 'Votre partenaire de confiance pour une installation réussie au Maroc. Services complets d\'expatriation, visa, immobilier et accompagnement personnalisé.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HomepageInteractive />
    </main>
  );
}