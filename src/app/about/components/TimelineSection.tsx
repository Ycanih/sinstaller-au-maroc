import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  achievement: string;
  icon: string;
}

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2009",
      title: "Création de l'Entreprise",
      description: "Fondation de S'installer au Maroc avec une vision claire : simplifier l'expatriation vers le Maroc pour les francophones.",
      achievement: "Premier bureau à Casablanca",
      icon: "RocketLaunchIcon"
    },
    {
      id: 2,
      year: "2012",
      title: "Expansion Nationale",
      description: "Ouverture de nos bureaux à Marrakech et Rabat pour couvrir les principales villes économiques du royaume.",
      achievement: "3 bureaux opérationnels",
      icon: "BuildingOfficeIcon"
    },
    {
      id: 3,
      year: "2015",
      title: "Certification Qualité",
      description: "Obtention de notre première certification ISO 9001 et agréments officiels des autorités marocaines.",
      achievement: "Standards internationaux",
      icon: "ShieldCheckIcon"
    },
    {
      id: 4,
      year: "2018",
      title: "100ème Client Accompagné",
      description: "Franchissement du cap des 100 clients accompagnés avec succès dans leur installation au Maroc.",
      achievement: "100+ projets réussis",
      icon: "TrophyIcon"
    },
    {
      id: 5,
      year: "2020",
      title: "Digitalisation des Services",
      description: "Lancement de notre plateforme digitale pour un suivi en temps réel et une expérience client optimisée.",
      achievement: "Innovation technologique",
      icon: "ComputerDesktopIcon"
    },
    {
      id: 6,
      year: "2022",
      title: "Réseau de Partenaires",
      description: "Constitution d'un réseau de 50+ partenaires certifiés couvrant tous les aspects de l'expatriation.",
      achievement: "50+ partenaires actifs",
      icon: "UserGroupIcon"
    },
    {
      id: 7,
      year: "2023",
      title: "500ème Client",
      description: "Célébration de notre 500ème client accompagné, confirmant notre position de leader sur le marché.",
      achievement: "500+ familles installées",
      icon: "StarIcon"
    },
    {
      id: 8,
      year: "2024",
      title: "Expansion Internationale",
      description: "Ouverture de bureaux de représentation en France et en Belgique pour mieux servir nos clients européens.",
      achievement: "Présence européenne",
      icon: "GlobeEuropeAfricaIcon"
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Notre Parcours d'Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            15 années d'innovation et de croissance au service de votre projet d'expatriation. 
            Découvrez les étapes clés qui ont façonné notre expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 hidden lg:flex">
                  <Icon name={milestone.icon as any} size={20} className="text-primary" />
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                }`}>
                  <div className="bg-surface rounded-2xl p-8 shadow-morocco hover:shadow-morocco-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-6 lg:hidden">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={milestone.icon as any} size={20} className="text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                    </div>

                    <div className="hidden lg:block text-right mb-4">
                      <div className={`text-2xl font-bold text-primary ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}>
                        {milestone.year}
                      </div>
                    </div>

                    <h3 className={`text-xl font-poppins font-bold text-text-primary mb-4 group-hover:text-primary transition-colors ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      {milestone.title}
                    </h3>

                    <p className={`text-text-secondary mb-4 leading-relaxed ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      {milestone.description}
                    </p>

                    <div className={`flex items-center space-x-2 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    }`}>
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      <span className="text-sm font-medium text-success">
                        {milestone.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Et Ce N'est Que le Début...
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Nous continuons d'innover et d'améliorer nos services pour vous offrir la meilleure expérience d'expatriation possible. Votre projet est notre priorité.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-text-secondary">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-text-secondary">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-text-secondary">Partenaires Certifiés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;