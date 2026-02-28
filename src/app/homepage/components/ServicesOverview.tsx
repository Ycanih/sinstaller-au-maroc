import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview = ({ className = '' }: ServicesOverviewProps) => {
  const services: Service[] = [
    {
      id: 'visa-residence',
      title: 'Visa & Résidence',
      description: 'Obtenez votre visa et titre de séjour en toute sérénité',
      icon: 'DocumentCheckIcon',
      features: ['Dossier complet', 'Suivi personnalisé', 'Garantie résultat'],
      link: '/services'
    },
    {
      id: 'immobilier',
      title: 'Immobilier',
      description: 'Trouvez le bien immobilier parfait pour votre nouvelle vie',
      icon: 'HomeModernIcon',
      features: ['Sélection premium', 'Négociation', 'Accompagnement juridique'],
      link: '/services'
    },
    {
      id: 'entreprise',
      title: 'Création d\'entreprise',
      description: 'Lancez votre activité professionnelle au Maroc',
      icon: 'BuildingOfficeIcon',
      features: ['Statut juridique', 'Fiscalité', 'Compte bancaire'],
      link: '/services'
    },
    {
      id: 'education',
      title: 'Éducation',
      description: 'Scolarisez vos enfants dans les meilleures écoles',
      icon: 'AcademicCapIcon',
      features: ['Écoles internationales', 'Inscription', 'Suivi scolaire'],
      link: '/services'
    },
    {
      id: 'sante',
      title: 'Santé & Assurance',
      description: 'Bénéficiez d\'une couverture santé optimale',
      icon: 'HeartIcon',
      features: ['Assurance santé', 'Médecins francophones', 'Urgences'],
      link: '/services'
    },
    {
      id: 'integration',
      title: 'Intégration culturelle',
      description: 'Adaptez-vous facilement à votre nouvel environnement',
      icon: 'GlobeAltIcon',
      features: ['Cours d\'arabe', 'Réseau social', 'Activités culturelles'],
      link: '/services'
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-text-primary mb-4">
            Nos services d'accompagnement
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-3xl mx-auto">
            De l'obtention de votre visa à votre intégration complète, nous vous accompagnons à chaque étape de votre installation au Maroc
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-muted rounded-2xl p-6 hover:shadow-morocco transition-all duration-300 transform hover:scale-105 moroccan-pattern-reveal group"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.icon as any} size={32} className="text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-poppins font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary font-inter mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href={service.link}
                className="inline-flex items-center space-x-2 text-primary font-poppins font-semibold hover:text-primary/80 transition-colors duration-300"
              >
                <span>En savoir plus</span>
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-primary px-8 py-4 rounded-lg text-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Voir tous nos services</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;