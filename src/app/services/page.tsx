import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - S\'installer au Maroc',
  description: 'Découvrez nos services complets d\'accompagnement pour votre installation au Maroc : visa, création d\'entreprise, logement, éducation et plus encore.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <ServicesInteractive />
      </div>
    </main>
  );
}