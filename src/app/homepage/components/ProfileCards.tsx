import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProfileCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

interface ProfileCardsProps {
  className?: string;
}

const ProfileCards = ({ className = '' }: ProfileCardsProps) => {
  const profiles: ProfileCard[] = [
  {
    id: 'entrepreneur',
    title: 'Entrepreneurs',
    description: 'Développez votre business au Maroc avec notre accompagnement complet',
    image: "https://images.unsplash.com/photo-1589426019432-7cdaa7fedab6",
    alt: 'Professional businessman in suit working on laptop in modern Casablanca office with city skyline view',
    icon: 'BriefcaseIcon',
    benefits: ['Création d\'entreprise', 'Fiscalité optimisée', 'Réseau partenaires'],
    ctaText: 'Découvrir les opportunités',
    ctaLink: '/services'
  },
  {
    id: 'retraite',
    title: 'Retraités',
    description: 'Profitez d\'une retraite dorée sous le soleil marocain',
    image: "https://images.unsplash.com/photo-1696369625354-2caac71cc717",
    alt: 'Happy retired couple walking hand in hand through traditional Marrakech medina marketplace with colorful textiles',
    icon: 'HomeIcon',
    benefits: ['Coût de vie avantageux', 'Climat idéal', 'Soins de qualité'],
    ctaText: 'Planifier ma retraite',
    ctaLink: '/services'
  },
  {
    id: 'famille',
    title: 'Familles',
    description: 'Offrez un nouveau cadre de vie exceptionnel à votre famille',
    image: "https://images.unsplash.com/photo-1477414219671-acae4fc9f4e5",
    alt: 'Young family with two children playing on beautiful Agadir beach with golden sand and blue ocean waves',
    icon: 'UserGroupIcon',
    benefits: ['Écoles internationales', 'Sécurité', 'Qualité de vie'],
    ctaText: 'Explorer pour ma famille',
    ctaLink: '/services'
  }];


  return (
    <section className={`py-20 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-text-primary mb-4">
            Quel est votre profil ?
          </h2>
          <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
            Découvrez nos solutions personnalisées selon votre projet de vie au Maroc
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile) =>
          <div
            key={profile.id}
            className="bg-white rounded-2xl shadow-morocco hover:shadow-morocco-lg transition-all duration-300 transform hover:scale-105 overflow-hidden moroccan-pattern-reveal">

              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={profile.image}
                alt={profile.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-morocco">
                    <Icon name={profile.icon as any} size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-3">
                  {profile.title}
                </h3>
                <p className="text-text-secondary font-inter mb-4 leading-relaxed">
                  {profile.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {profile.benefits.map((benefit, index) =>
                <li key={index} className="flex items-center space-x-2">
                      <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary font-inter">{benefit}</span>
                    </li>
                )}
                </ul>

                {/* CTA Button */}
                <Link
                href={profile.ctaLink}
                className="block w-full text-center btn-primary px-6 py-3 rounded-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transition-all duration-300">

                  {profile.ctaText}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProfileCards;