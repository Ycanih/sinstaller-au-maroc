import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
}

interface TrustBadgesProps {
  className?: string;
}

const TrustBadges = ({ className = '' }: TrustBadgesProps) => {
  const badges: TrustBadge[] = [
    {
      id: 'experience',
      title: 'Années d\'expérience',
      description: 'Au service des expatriés',
      icon: 'CalendarDaysIcon',
      value: '6+'
    },
    {
      id: 'clients',
      title: 'Familles accompagnées',
      description: 'Avec succès depuis 2018',
      icon: 'UserGroupIcon',
      value: '500+'
    },
    {
      id: 'satisfaction',
      title: 'Taux de satisfaction',
      description: 'Clients recommandent nos services',
      icon: 'StarIcon',
      value: '98%'
    },
    {
      id: 'processing',
      title: 'Délai moyen',
      description: 'Pour l\'obtention du visa',
      icon: 'ClockIcon',
      value: '45j'
    }
  ];

  const certifications = [
    {
      id: 'certified',
      title: 'Certifié CGEM',
      description: 'Confédération Générale des Entreprises du Maroc'
    },
    {
      id: 'registered',
      title: 'Agréé AMITH',
      description: 'Association Marocaine de l\'Industrie du Textile'
    },
    {
      id: 'partner',
      title: 'Partenaire officiel',
      description: 'Consulats français et belges'
    }
  ];

  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-text-primary mb-4">
            Votre partenaire de confiance
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre expertise et de la confiance que nous accordent nos clients
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white rounded-2xl p-6 text-center shadow-morocco hover:shadow-morocco-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={badge.icon as any} size={32} className="text-primary" />
              </div>

              {/* Value */}
              <div className="text-3xl font-poppins font-bold text-primary mb-2">
                {badge.value}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-poppins font-semibold text-text-primary mb-1">
                {badge.title}
              </h3>
              <p className="text-sm text-text-secondary font-inter">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-morocco">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">
              Certifications & Agréments
            </h3>
            <p className="text-text-secondary font-inter">
              Reconnus par les institutions officielles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="text-center p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
                </div>
                <h4 className="font-poppins font-semibold text-text-primary mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-text-secondary font-inter">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary font-inter mb-4">
            Ils parlent de nous
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-poppins font-semibold text-text-primary">
              Le Figaro
            </div>
            <div className="text-lg font-poppins font-semibold text-text-primary">
              L'Express
            </div>
            <div className="text-lg font-poppins font-semibold text-text-primary">
              France 24
            </div>
            <div className="text-lg font-poppins font-semibold text-text-primary">
              RFI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;