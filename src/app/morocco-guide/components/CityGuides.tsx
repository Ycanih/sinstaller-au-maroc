import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CityInfo {
  id: string;
  name: string;
  region: string;
  population: string;
  image: string;
  alt: string;
  highlights: string[];
  costOfLiving: string;
  businessFriendly: number;
  climate: string;
  description: string;
}

interface CityGuidesProps {
  className?: string;
}

const CityGuides = ({ className = '' }: CityGuidesProps) => {
  const cities: CityInfo[] = [
  {
    id: 'casablanca',
    name: 'Casablanca',
    region: 'Grand Casablanca',
    population: '3.7M habitants',
    image: "https://images.unsplash.com/photo-1687138686883-7a3f2239f2a9",
    alt: 'Vue aérienne de Casablanca avec la mosquée Hassan II et le front de mer moderne',
    highlights: ['Centre économique', 'Hub international', 'Opportunités business'],
    costOfLiving: '8,500 MAD/mois',
    businessFriendly: 9,
    climate: 'Méditerranéen',
    description: 'Capital économique du Maroc, Casablanca offre les meilleures opportunités professionnelles et un cadre de vie moderne.'
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    region: 'Marrakech-Safi',
    population: '1.3M habitants',
    image: "https://images.unsplash.com/photo-1544517333-3ceafba4d01b",
    alt: 'Médina de Marrakech avec ses souks colorés et la mosquée Koutoubia au coucher du soleil',
    highlights: ['Patrimoine UNESCO', 'Tourisme', 'Immobilier attractif'],
    costOfLiving: '6,800 MAD/mois',
    businessFriendly: 8,
    climate: 'Semi-aride',
    description: 'Ville impériale au charme authentique, Marrakech séduit par son patrimoine et ses opportunités immobilières.'
  },
  {
    id: 'rabat',
    name: 'Rabat',
    region: 'Rabat-Salé-Kénitra',
    population: '1.8M habitants',
    image: "https://images.unsplash.com/photo-1670316696851-a9274cf8add6",
    alt: 'Tour Hassan et mausolée Mohammed V à Rabat avec jardins verdoyants et architecture traditionnelle',
    highlights: ['Capitale politique', 'Administrations', 'Qualité de vie'],
    costOfLiving: '7,200 MAD/mois',
    businessFriendly: 8,
    climate: 'Océanique',
    description: 'Capitale administrative du royaume, Rabat combine modernité et tradition dans un cadre paisible.'
  },
  {
    id: 'tangier',
    name: 'Tanger',
    region: 'Tanger-Tétouan-Al Hoceïma',
    population: '1.1M habitants',
    image: "https://images.unsplash.com/photo-1438178386041-0bdde34691a2",
    alt: 'Port de Tanger avec vue sur le détroit de Gibraltar et les collines verdoyantes environnantes',
    highlights: ['Porte de l\'Europe', 'Port Tanger Med', 'Industrie automobile'],
    costOfLiving: '6,500 MAD/mois',
    businessFriendly: 9,
    climate: 'Méditerranéen',
    description: 'Porte d\'entrée entre l\'Europe et l\'Afrique, Tanger connaît un développement industriel remarquable.'
  },
  {
    id: 'agadir',
    name: 'Agadir',
    region: 'Souss-Massa',
    population: '900K habitants',
    image: "https://images.unsplash.com/photo-1712801771778-46d4e543deee",
    alt: 'Plage d\'Agadir avec ses palmiers, sable doré et montagnes de l\'Atlas en arrière-plan',
    highlights: ['Station balnéaire', 'Tourisme', 'Agriculture'],
    costOfLiving: '5,800 MAD/mois',
    businessFriendly: 7,
    climate: 'Subtropical',
    description: 'Destination touristique prisée, Agadir offre un climat exceptionnel et un cadre de vie détendu.'
  },
  {
    id: 'fes',
    name: 'Fès',
    region: 'Fès-Meknès',
    population: '1.2M habitants',
    image: "https://images.unsplash.com/photo-1678215208107-bf3a2edd2cd1",
    alt: 'Médina de Fès avec ses ruelles étroites, architecture traditionnelle et artisans au travail',
    highlights: ['Capitale spirituelle', 'Artisanat', 'Université Al Quaraouiyine'],
    costOfLiving: '5,200 MAD/mois',
    businessFriendly: 6,
    climate: 'Continental',
    description: 'Capitale spirituelle et culturelle, Fès préserve un patrimoine millénaire unique au monde.'
  }];


  return (
    <section id="cities" className={`py-16 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Guides des Villes
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Découvrez les principales destinations pour votre installation au Maroc. 
            Chaque ville offre des opportunités uniques selon vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) =>
          <div key={city.id} className="bg-white rounded-2xl shadow-morocco hover:shadow-morocco-lg transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={city.image}
                alt={city.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-poppins font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/90 text-sm">{city.region} • {city.population}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-text-secondary mb-4 leading-relaxed">{city.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-secondary">Coût de vie moyen</span>
                    <span className="font-poppins font-semibold text-primary">{city.costOfLiving}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-secondary">Business-friendly</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(10)].map((_, i) =>
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                      i < city.businessFriendly ? 'bg-primary' : 'bg-gray-200'}`
                      } />

                    )}
                      <span className="ml-2 text-sm font-medium">{city.businessFriendly}/10</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-secondary">Climat</span>
                    <span className="text-sm font-medium text-text-primary">{city.climate}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-poppins font-semibold text-text-primary mb-2">Points forts</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">

                        {highlight}
                      </span>
                  )}
                  </div>
                </div>

                <button className="w-full mt-6 btn-primary py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:shadow-morocco">
                  <Icon name="ArrowRightIcon" size={16} className="inline mr-2" />
                  Guide Complet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CityGuides;