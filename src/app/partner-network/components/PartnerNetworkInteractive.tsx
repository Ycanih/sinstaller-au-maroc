'use client';

import React, { useState, useEffect } from 'react';
import PartnerCard from './PartnerCard';
import FilterSidebar from './FilterSidebar';
import SearchBar from './SearchBar';
import PartnerStats from './PartnerStats';
import FeaturedPartners from './FeaturedPartners';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  category: string;
  specialization: string[];
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  description: string;
  logo: string;
  logoAlt: string;
  services: string[];
  yearsOfExperience: number;
  clientsServed: number;
  certifications: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

interface FeaturedPartner {
  id: number;
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  description: string;
  highlight: string;
  rating: number;
  location: string;
}

interface FilterOptions {
  categories: string[];
  locations: string[];
  specializations: string[];
  ratings: number[];
}

interface ActiveFilters {
  category: string;
  location: string;
  specialization: string;
  minRating: number;
  verified: boolean;
}

const PartnerNetworkInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    category: '',
    location: '',
    specialization: '',
    minRating: 0,
    verified: false
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Banque Populaire Maroc",
    category: "Banque",
    specialization: ["Comptes professionnels", "Prêts immobiliers", "Investissement"],
    location: "Casablanca",
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    description: "Première banque du Maroc spécialisée dans l'accompagnement des expatriés français. Services bancaires complets avec conseillers dédiés.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0e0cb1f-1762889817186.png",
    logoAlt: "Logo moderne de banque avec symbole financier en bleu et blanc",
    services: ["Ouverture de compte", "Crédit immobilier", "Assurance", "Investissement"],
    yearsOfExperience: 15,
    clientsServed: 2500,
    certifications: ["Banque Centrale du Maroc", "ISO 9001"],
    contactInfo: {
      phone: "+212 522 123 456",
      email: "expatries@bp.ma",
      website: "www.bp.ma"
    }
  },
  {
    id: 2,
    name: "Immobilier Atlas",
    category: "Immobilier",
    specialization: ["Achat résidentiel", "Location longue durée", "Gestion locative"],
    location: "Marrakech",
    rating: 4.6,
    reviewCount: 89,
    verified: true,
    description: "Agence immobilière spécialisée dans l'accompagnement des expatriés européens. Expertise locale et service personnalisé.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_116ed44ea-1762889817069.png",
    logoAlt: "Logo d'agence immobilière avec icône de maison moderne en rouge et or",
    services: ["Recherche de biens", "Négociation", "Accompagnement juridique", "Gestion"],
    yearsOfExperience: 12,
    clientsServed: 800,
    certifications: ["Chambre de Commerce", "FNAIM Maroc"],
    contactInfo: {
      phone: "+212 524 789 123",
      email: "contact@atlas-immo.ma",
      website: "www.atlas-immo.ma"
    }
  },
  {
    id: 3,
    name: "Cabinet Juridique Benali",
    category: "Juridique",
    specialization: ["Droit des affaires", "Immigration", "Fiscalité internationale"],
    location: "Rabat",
    rating: 4.9,
    reviewCount: 124,
    verified: true,
    description: "Cabinet d'avocats spécialisé dans l'accompagnement juridique des investisseurs étrangers et des expatriés au Maroc.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_179bc3781-1762889816432.png",
    logoAlt: "Logo de cabinet juridique avec balance de justice dorée sur fond bordeaux",
    services: ["Conseil juridique", "Création d'entreprise", "Visa et résidence", "Fiscalité"],
    yearsOfExperience: 20,
    clientsServed: 1200,
    certifications: ["Barreau de Rabat", "Ordre des Avocats"],
    contactInfo: {
      phone: "+212 537 456 789",
      email: "info@benali-law.ma",
      website: "www.benali-law.ma"
    }
  },
  {
    id: 4,
    name: "Expertise Comptable Maghreb",
    category: "Fiscalité",
    specialization: ["Comptabilité d'entreprise", "Déclarations fiscales", "Audit"],
    location: "Casablanca",
    rating: 4.7,
    reviewCount: 67,
    verified: true,
    description: "Cabinet d'expertise comptable spécialisé dans l'accompagnement fiscal des entreprises étrangères implantées au Maroc.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1627a6cb9-1762889818196.png",
    logoAlt: "Logo de cabinet comptable avec calculatrice et graphiques en vert et blanc",
    services: ["Tenue de comptabilité", "Conseil fiscal", "Audit", "Formation"],
    yearsOfExperience: 18,
    clientsServed: 450,
    certifications: ["Ordre des Experts Comptables", "ISO 27001"],
    contactInfo: {
      phone: "+212 522 987 654",
      email: "contact@ecm.ma",
      website: "www.expertise-maghreb.ma"
    }
  },
  {
    id: 5,
    name: "Assurance Wafa",
    category: "Assurance",
    specialization: ["Assurance santé", "Assurance auto", "Assurance habitation"],
    location: "Casablanca",
    rating: 4.5,
    reviewCount: 203,
    verified: true,
    description: "Compagnie d'assurance leader au Maroc proposant des solutions adaptées aux besoins des expatriés et résidents étrangers.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1283b1389-1762889816423.png",
    logoAlt: "Logo d'assurance avec bouclier protecteur en bleu et argent",
    services: ["Assurance santé", "Assurance véhicule", "Assurance habitation", "Épargne"],
    yearsOfExperience: 25,
    clientsServed: 5000,
    certifications: ["ACAPS", "ISO 9001"],
    contactInfo: {
      phone: "+212 522 111 222",
      email: "expatries@wafa-assurance.ma",
      website: "www.wafa-assurance.ma"
    }
  },
  {
    id: 6,
    name: "École Internationale Casablanca",
    category: "Education",
    specialization: ["Enseignement français", "Baccalauréat international", "Langues"],
    location: "Casablanca",
    rating: 4.8,
    reviewCount: 145,
    verified: true,
    description: "École internationale proposant un enseignement de qualité en français et en anglais, homologuée par l'Éducation Nationale française.",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18436c3d2-1762889817930.png",
    logoAlt: "Logo d'école avec livre ouvert et globe terrestre en bleu et or",
    services: ["Maternelle", "Primaire", "Collège", "Lycée"],
    yearsOfExperience: 30,
    clientsServed: 1800,
    certifications: ["AEFE", "Ministère Éducation France"],
    contactInfo: {
      phone: "+212 522 333 444",
      email: "admissions@eic.ma",
      website: "www.eic.ma"
    }
  }];


  const featuredPartners: FeaturedPartner[] = [
  {
    id: 1,
    name: "Banque Populaire Maroc",
    category: "Banque",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18c9e7482-1762889815649.png",
    logoAlt: "Logo moderne de banque avec symbole financier en bleu et blanc",
    description: "Première banque du Maroc spécialisée dans l'accompagnement des expatriés français.",
    highlight: "Ouverture de compte en 48h pour les expatriés",
    rating: 4.8,
    location: "Casablanca"
  },
  {
    id: 3,
    name: "Cabinet Juridique Benali",
    category: "Juridique",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba29d38c-1762889816161.png",
    logoAlt: "Logo de cabinet juridique avec balance de justice dorée sur fond bordeaux",
    description: "Cabinet d'avocats spécialisé dans l'accompagnement juridique des investisseurs étrangers.",
    highlight: "20 ans d'expérience en droit des affaires international",
    rating: 4.9,
    location: "Rabat"
  },
  {
    id: 2,
    name: "Immobilier Atlas",
    category: "Immobilier",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f40e39a3-1762889816910.png",
    logoAlt: "Logo d'agence immobilière avec icône de maison moderne en rouge et or",
    description: "Agence immobilière spécialisée dans l'accompagnement des expatriés européens.",
    highlight: "Portfolio exclusif de biens haut de gamme",
    rating: 4.6,
    location: "Marrakech"
  }];


  const filterOptions: FilterOptions = {
    categories: ["Banque", "Immobilier", "Juridique", "Fiscalité", "Assurance", "Education"],
    locations: ["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"],
    specializations: [
    "Comptes professionnels", "Prêts immobiliers", "Achat résidentiel",
    "Droit des affaires", "Immigration", "Comptabilité d'entreprise",
    "Assurance santé", "Enseignement français"],

    ratings: [4, 3, 2, 1]
  };

  const statsData = {
    totalPartners: mockPartners.length,
    verifiedPartners: mockPartners.filter((p) => p.verified).length,
    averageRating: 4.7,
    totalReviews: mockPartners.reduce((sum, p) => sum + p.reviewCount, 0),
    categories: filterOptions.categories.length,
    cities: filterOptions.locations.length
  };

  const filteredPartners = mockPartners.filter((partner) => {
    const matchesSearch = searchTerm === '' ||
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.specialization.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = activeFilters.category === '' || partner.category === activeFilters.category;
    const matchesLocation = activeFilters.location === '' || partner.location === activeFilters.location;
    const matchesSpecialization = activeFilters.specialization === '' ||
    partner.specialization.includes(activeFilters.specialization);
    const matchesRating = activeFilters.minRating === 0 || partner.rating >= activeFilters.minRating;
    const matchesVerified = !activeFilters.verified || partner.verified;

    return matchesSearch && matchesCategory && matchesLocation &&
    matchesSpecialization && matchesRating && matchesVerified;
  });

  const handleFilterChange = (filterType: keyof ActiveFilters, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      category: '',
      location: '',
      specialization: '',
      minRating: 0,
      verified: false
    });
    setSearchTerm('');
  };

  const handleContactClick = (partnerId: number) => {
    const partner = mockPartners.find((p) => p.id === partnerId);
    if (partner) {
      window.open(`tel:${partner.contactInfo.phone}`, '_self');
    }
  };

  const handleViewDetails = (partnerId: number) => {
    console.log('Viewing details for partner:', partnerId);
  };

  const handlePartnerClick = (partnerId: number) => {
    handleViewDetails(partnerId);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="lg:col-span-3 space-y-4">
                {[1, 2, 3].map((i) =>
                <div key={i} className="h-48 bg-gray-200 rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Stats Section */}
        <PartnerStats stats={statsData} />

        {/* Featured Partners */}
        <FeaturedPartners
          partners={featuredPartners}
          onPartnerClick={handlePartnerClick} />


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar
              filterOptions={filterOptions}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)} />

          </div>

          {/* Partners List */}
          <div className="lg:col-span-3">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onFilterToggle={() => setIsFilterOpen(true)}
              resultsCount={filteredPartners.length} />


            {filteredPartners.length > 0 ?
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredPartners.map((partner) =>
              <PartnerCard
                key={partner.id}
                partner={partner}
                onContactClick={handleContactClick}
                onViewDetails={handleViewDetails} />

              )}
              </div> :

            <div className="bg-white rounded-lg shadow-morocco border border-border p-12 text-center">
                <Icon name="MagnifyingGlassIcon" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-poppins font-semibold text-text-primary mb-2">
                  Aucun partenaire trouvé
                </h3>
                <p className="text-text-secondary mb-6">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
                <button
                onClick={handleClearFilters}
                className="btn-primary px-6 py-2 rounded-lg font-poppins font-semibold">

                  Effacer les filtres
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default PartnerNetworkInteractive;