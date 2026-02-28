import React from 'react';
import AppImage from '@/components/ui/AppImage';
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

interface PartnerCardProps {
  partner: Partner;
  onContactClick: (partnerId: number) => void;
  onViewDetails: (partnerId: number) => void;
}

const PartnerCard = ({ partner, onContactClick, onViewDetails }: PartnerCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Banque': return 'BuildingLibraryIcon';
      case 'Immobilier': return 'HomeModernIcon';
      case 'Juridique': return 'ScaleIcon';
      case 'Fiscalité': return 'CalculatorIcon';
      case 'Assurance': return 'ShieldCheckIcon';
      case 'Education': return 'AcademicCapIcon';
      default: return 'BuildingOfficeIcon';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Banque': return 'text-blue-600 bg-blue-50';
      case 'Immobilier': return 'text-green-600 bg-green-50';
      case 'Juridique': return 'text-purple-600 bg-purple-50';
      case 'Fiscalité': return 'text-orange-600 bg-orange-50';
      case 'Assurance': return 'text-indigo-600 bg-indigo-50';
      case 'Education': return 'text-pink-600 bg-pink-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="StarIcon"
        size={16}
        variant={index < Math.floor(rating) ? 'solid' : 'outline'}
        className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-morocco border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
              <AppImage
                src={partner.logo}
                alt={partner.logoAlt}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-poppins font-semibold text-text-primary truncate">
                  {partner.name}
                </h3>
                {partner.verified && (
                  <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                    <Icon name="CheckBadgeIcon" size={14} className="text-green-600" />
                    <span className="text-xs font-medium text-green-700">Vérifié</span>
                  </div>
                )}
              </div>
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(partner.category)}`}>
                <Icon name={getCategoryIcon(partner.category) as any} size={14} />
                <span>{partner.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating and Location */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(partner.rating)}
            </div>
            <span className="text-sm font-medium text-text-primary">{partner.rating}</span>
            <span className="text-sm text-text-secondary">({partner.reviewCount} avis)</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-text-secondary">
            <Icon name="MapPinIcon" size={14} />
            <span>{partner.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {partner.description}
        </p>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {partner.specialization.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-xs font-medium text-text-secondary rounded-md"
              >
                {spec}
              </span>
            ))}
            {partner.specialization.length > 3 && (
              <span className="px-2 py-1 bg-muted text-xs font-medium text-text-secondary rounded-md">
                +{partner.specialization.length - 3} autres
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted rounded-lg">
          <div className="text-center">
            <div className="text-lg font-poppins font-semibold text-primary">
              {partner.yearsOfExperience}+
            </div>
            <div className="text-xs text-text-secondary">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-poppins font-semibold text-primary">
              {partner.clientsServed}+
            </div>
            <div className="text-xs text-text-secondary">Clients accompagnés</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6">
        <div className="flex space-x-3">
          <button
            onClick={() => onContactClick(partner.id)}
            className="flex-1 btn-primary px-4 py-2 rounded-lg text-sm font-poppins font-semibold transition-all duration-300 hover:transform hover:scale-105"
          >
            <Icon name="PhoneIcon" size={16} className="mr-2" />
            Contacter
          </button>
          <button
            onClick={() => onViewDetails(partner.id)}
            className="flex-1 bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-poppins font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Icon name="EyeIcon" size={16} className="mr-2" />
            Détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;