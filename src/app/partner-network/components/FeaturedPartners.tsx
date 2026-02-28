import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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

interface FeaturedPartnersProps {
  partners: FeaturedPartner[];
  onPartnerClick: (partnerId: number) => void;
}

const FeaturedPartners = ({ partners, onPartnerClick }: FeaturedPartnersProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="StarIcon"
        size={14}
        variant={index < Math.floor(rating) ? 'solid' : 'outline'}
        className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">
          Partenaires Recommandés
        </h2>
        <p className="text-text-secondary">
          Nos partenaires les plus performants, sélectionnés pour leur excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => onPartnerClick(partner.id)}
          >
            {/* Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-sm">
                <AppImage
                  src={partner.logo}
                  alt={partner.logoAlt}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-poppins font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors duration-200">
                  {partner.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {partner.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(partner.rating)}
                    <span className="text-sm text-text-secondary ml-1">{partner.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight */}
            <div className="bg-white/50 rounded-lg p-3 mb-4">
              <div className="flex items-start space-x-2">
                <Icon name="SparklesIcon" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-text-primary">
                  {partner.highlight}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary mb-4 line-clamp-2">
              {partner.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-sm text-text-secondary">
                <Icon name="MapPinIcon" size={14} />
                <span>{partner.location}</span>
              </div>
              <div className="flex items-center space-x-1 text-primary group-hover:text-primary/80 transition-colors duration-200">
                <span className="text-sm font-medium">Voir détails</span>
                <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPartners;