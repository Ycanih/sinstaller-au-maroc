import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatsData {
  totalPartners: number;
  verifiedPartners: number;
  averageRating: number;
  totalReviews: number;
  categories: number;
  cities: number;
}

interface PartnerStatsProps {
  stats: StatsData;
}

const PartnerStats = ({ stats }: PartnerStatsProps) => {
  const statItems = [
    {
      icon: 'BuildingOfficeIcon',
      label: 'Partenaires',
      value: stats.totalPartners,
      suffix: '',
      color: 'text-primary'
    },
    {
      icon: 'CheckBadgeIcon',
      label: 'Vérifiés',
      value: stats.verifiedPartners,
      suffix: '',
      color: 'text-green-600'
    },
    {
      icon: 'StarIcon',
      label: 'Note moyenne',
      value: stats.averageRating,
      suffix: '/5',
      color: 'text-yellow-500'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      label: 'Avis clients',
      value: stats.totalReviews,
      suffix: '',
      color: 'text-blue-600'
    },
    {
      icon: 'TagIcon',
      label: 'Catégories',
      value: stats.categories,
      suffix: '',
      color: 'text-purple-600'
    },
    {
      icon: 'MapPinIcon',
      label: 'Villes',
      value: stats.cities,
      suffix: '',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-morocco border border-border p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">
          Notre Réseau de Partenaires
        </h2>
        <p className="text-text-secondary">
          Un écosystème complet de professionnels vérifiés pour votre installation au Maroc
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg bg-muted hover:bg-gray-100 transition-colors duration-200"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-3 ${item.color}`}>
              <Icon name={item.icon as any} size={24} />
            </div>
            <div className="text-2xl font-poppins font-bold text-text-primary mb-1">
              {item.value}{item.suffix}
            </div>
            <div className="text-xs text-text-secondary font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerStats;