'use client';

import React, { useState, useEffect } from 'react';
import ServiceHero from './ServiceHero';
import ServiceCategories from './ServiceCategories';
import ServiceComparison from './ServiceComparison';
import ProcessTimeline from './ProcessTimeline';
import ClientTestimonials from './ClientTestimonials';
import CostCalculator from './CostCalculator';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  popular: boolean;
  color: string;
}

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
  color: string;
}

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  service: string;
  location: string;
}

const ServicesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const serviceCategories: ServiceCategory[] = [
  {
    id: 'visa-immigration',
    title: 'Visa & Immigration',
    description: 'Accompagnement complet pour l\'obtention de vos visas et titres de séjour',
    icon: 'DocumentCheckIcon',
    services: [
    'Visa de résidence',
    'Carte de séjour',
    'Regroupement familial',
    'Visa investisseur',
    'Renouvellement de titres'],

    popular: true,
    color: 'bg-primary'
  },
  {
    id: 'business-creation',
    title: 'Création d\'Entreprise',
    description: 'Création et développement de votre activité professionnelle au Maroc',
    icon: 'BuildingOfficeIcon',
    services: [
    'SARL/SA/SASU',
    'Auto-entrepreneur',
    'Licence commerciale',
    'Domiciliation',
    'Comptabilité'],

    popular: false,
    color: 'bg-secondary'
  },
  {
    id: 'housing-relocation',
    title: 'Logement & Déménagement',
    description: 'Recherche de logement et organisation de votre déménagement',
    icon: 'HomeIcon',
    services: [
    'Recherche de logement',
    'Négociation bail',
    'Déménagement international',
    'Assurance habitation',
    'Raccordements'],

    popular: true,
    color: 'bg-trust'
  },
  {
    id: 'banking-finance',
    title: 'Banque & Finance',
    description: 'Ouverture de comptes et gestion de vos finances au Maroc',
    icon: 'CreditCardIcon',
    services: [
    'Compte bancaire',
    'Crédit immobilier',
    'Assurance vie',
    'Transfert de fonds',
    'Investissements'],

    popular: false,
    color: 'bg-accent'
  },
  {
    id: 'education-family',
    title: 'Éducation & Famille',
    description: 'Scolarisation des enfants et services familiaux',
    icon: 'AcademicCapIcon',
    services: [
    'Inscription scolaire',
    'École française',
    'Université',
    'Cours de langue',
    'Activités enfants'],

    popular: true,
    color: 'bg-success'
  },
  {
    id: 'legal-admin',
    title: 'Juridique & Administratif',
    description: 'Assistance juridique et démarches administratives',
    icon: 'ScaleIcon',
    services: [
    'Assistance juridique',
    'Traduction certifiée',
    'Apostille',
    'Contrats',
    'Succession'],

    popular: false,
    color: 'bg-warning'
  }];


  const servicePackages: ServicePackage[] = [
  {
    id: 'essential',
    name: 'Essentiel',
    description: 'Les services de base pour votre installation',
    price: '2 500€',
    duration: '3-4 mois',
    features: [
    'Assistance visa de résidence',
    'Ouverture compte bancaire',
    'Recherche de logement (3 options)',
    'Assurance santé de base',
    'Guide d\'installation numérique',
    'Support téléphonique 5j/7'],

    popular: false,
    color: 'bg-trust'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Solution complète pour une installation sereine',
    price: '4 800€',
    duration: '2-3 mois',
    features: [
    'Tous les services Essentiel',
    'Création d\'entreprise incluse',
    'Recherche logement premium (5 options)',
    'Déménagement organisé',
    'Inscription scolaire enfants',
    'Accompagnement personnalisé',
    'Support 7j/7',
    'Garantie satisfaction'],

    popular: true,
    color: 'bg-primary'
  },
  {
    id: 'vip',
    name: 'VIP Excellence',
    description: 'Service haut de gamme avec accompagnement dédié',
    price: '8 500€',
    duration: '1-2 mois',
    features: [
    'Tous les services Premium',
    'Conseiller dédié 24h/24',
    'Logement de standing garanti',
    'Véhicule de fonction',
    'Intégration sociale premium',
    'Services de conciergerie',
    'Réseau professionnel exclusif',
    'Suivi post-installation 1 an'],

    popular: false,
    color: 'bg-accent'
  }];


  const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Consultation & Analyse',
    description: 'Évaluation de votre profil et définition de votre projet d\'installation personnalisé',
    duration: '1-2 semaines',
    icon: 'ChatBubbleLeftRightIcon',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Préparation des Dossiers',
    description: 'Constitution et vérification de tous les documents nécessaires pour vos démarches',
    duration: '2-3 semaines',
    icon: 'DocumentTextIcon',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Démarches Officielles',
    description: 'Dépôt des demandes de visa, création d\'entreprise et autres formalités administratives',
    duration: '4-8 semaines',
    icon: 'BuildingOffice2Icon',
    status: 'current'
  },
  {
    id: 4,
    title: 'Recherche & Négociation',
    description: 'Recherche de logement, négociation des contrats et préparation de votre arrivée',
    duration: '2-4 semaines',
    icon: 'MagnifyingGlassIcon',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Installation & Intégration',
    description: 'Accompagnement sur place, finalisation des démarches et intégration locale',
    duration: '2-3 semaines',
    icon: 'HomeModernIcon',
    status: 'upcoming'
  },
  {
    id: 6,
    title: 'Suivi Post-Installation',
    description: 'Support continu et assistance pour votre adaptation dans votre nouvelle vie',
    duration: 'En continu',
    icon: 'HeartIcon',
    status: 'upcoming'
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Entrepreneure',
    company: 'Café des Arts',
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    alt: 'Femme souriante aux cheveux bruns portant un blazer bleu dans un bureau moderne',
    rating: 5,
    text: 'Grâce à S\'installer au Maroc, j\'ai pu ouvrir mon café à Marrakech en seulement 3 mois. L\'équipe a géré tous les aspects administratifs pendant que je me concentrais sur mon projet.',
    service: 'Création d\'entreprise',
    location: 'Marrakech'
  },
  {
    id: 2,
    name: 'Pierre Martin',
    role: 'Retraité',
    company: 'Ex-Directeur Commercial',
    image: "https://images.unsplash.com/photo-1720634635885-5ede4f67638a",
    alt: 'Homme âgé aux cheveux gris portant une chemise blanche souriant dans un jardin',
    rating: 5,
    text: 'Une installation parfaitement organisée ! Nous avons trouvé notre villa de rêve à Agadir et toutes les démarches ont été simplifiées. Un service exceptionnel.',
    service: 'Installation retraite',
    location: 'Agadir'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Mère de famille',
    company: 'Famille Laurent',
    image: "https://images.unsplash.com/photo-1643490742255-82e0037d77fe",
    alt: 'Femme blonde souriante portant un pull beige dans un environnement familial chaleureux',
    rating: 5,
    text: 'L\'inscription de nos enfants à l\'école française de Casablanca s\'est faite sans stress. L\'équipe a pensé à tout, même aux activités extra-scolaires !',
    service: 'Installation famille',
    location: 'Casablanca'
  },
  {
    id: 4,
    name: 'Jean-Claude Moreau',
    role: 'Investisseur',
    company: 'Moreau Immobilier',
    image: "https://images.unsplash.com/photo-1581088552384-3ac0127afb51",
    alt: 'Homme d\'affaires en costume sombre avec cravate rouge dans un bureau élégant',
    rating: 5,
    text: 'Investir dans l\'immobilier marocain n\'a jamais été aussi simple. Leur réseau de partenaires locaux m\'a permis de sécuriser d\'excellentes opportunités.',
    service: 'Investissement immobilier',
    location: 'Rabat'
  },
  {
    id: 5,
    name: 'Amélie Rousseau',
    role: 'Consultante IT',
    company: 'Digital Nomad',
    image: "https://images.unsplash.com/photo-1638262499690-fe65412f4d93",
    alt: 'Jeune femme professionnelle aux cheveux châtains travaillant sur ordinateur portable',
    rating: 5,
    text: 'Parfait pour les digital nomads ! J\'ai pu obtenir mon visa freelance et m\'installer à Essaouira tout en gardant mes clients européens.',
    service: 'Visa freelance',
    location: 'Essaouira'
  },
  {
    id: 6,
    name: 'François Leroy',
    role: 'Chef d\'entreprise',
    company: 'TechStart Morocco',
    image: "https://images.unsplash.com/photo-1653669486623-26d803610ed4",
    alt: 'Entrepreneur souriant en chemise bleue dans un espace de coworking moderne',
    rating: 5,
    text: 'L\'accompagnement pour créer ma startup tech à Casablanca a été exemplaire. De la SARL aux premiers recrutements, tout était parfaitement orchestré.',
    service: 'Création startup',
    location: 'Casablanca'
  }];


  const handleCategorySelect = (categoryId: string) => {
    if (!isHydrated) return;
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handlePackageSelect = (packageId: string) => {
    if (!isHydrated) return;
    console.log('Package selected:', packageId);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) =>
              <div key={i} className="h-64 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero />
      <ServiceCategories
        categories={serviceCategories}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory} />

      <ServiceComparison
        packages={servicePackages}
        onPackageSelect={handlePackageSelect} />

      <ProcessTimeline steps={timelineSteps} />
      <CostCalculator />
      <ClientTestimonials testimonials={testimonials} />
    </div>);

};

export default ServicesInteractive;