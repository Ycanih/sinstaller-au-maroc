import React from 'react';

import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  verificationLink: string;
  category: string;
}

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection = ({ className = '' }: CertificationsSectionProps) => {
  const certifications: Certification[] = [
  {
    id: 1,
    name: "Agrément Conseil en Investissement",
    issuer: "Autorité Marocaine du Marché des Capitaux (AMMC)",
    year: "2023",
    description: "Certification officielle pour le conseil en investissement et gestion de patrimoine au Maroc.",
    image: "https://images.unsplash.com/photo-1616101001234-7320af4f1aa7",
    alt: "Official Moroccan government certification document with red seal and Arabic calligraphy",
    verificationLink: "#verify-ammc",
    category: "Financier"
  },
  {
    id: 2,
    name: "Licence Agent Immobilier",
    issuer: "Ministère de l'Habitat et de la Politique de la Ville",
    year: "2022",
    description: "Autorisation officielle d'exercer en tant qu'agent immobilier professionnel au Maroc.",
    image: "https://images.unsplash.com/photo-1645484686977-dbddd9e1dc0a",
    alt: "Real estate professional license certificate with Moroccan ministry letterhead and official stamps",
    verificationLink: "#verify-habitat",
    category: "Immobilier"
  },
  {
    id: 3,
    name: "Certification ISO 9001:2015",
    issuer: "Bureau Veritas Maroc",
    year: "2023",
    description: "Certification qualité pour nos processus de service client et gestion de projets.",
    image: "https://images.unsplash.com/photo-1616101001234-7320af4f1aa7",
    alt: "ISO 9001 quality management certificate with Bureau Veritas logo and international standards seal",
    verificationLink: "#verify-iso",
    category: "Qualité"
  },
  {
    id: 4,
    name: "Membre Chambre de Commerce",
    issuer: "Chambre de Commerce de Casablanca",
    year: "2021",
    description: "Adhésion active à la chambre de commerce pour le développement des relations d'affaires.",
    image: "https://images.unsplash.com/photo-1589330694669-4844d4aa0580",
    alt: "Chamber of Commerce membership certificate with Casablanca business district logo and official seal",
    verificationLink: "#verify-chamber",
    category: "Commercial"
  },
  {
    id: 5,
    name: "Agrément Conseil Juridique",
    issuer: "Barreau de Casablanca",
    year: "2020",
    description: "Autorisation d'exercer le conseil juridique en droit des affaires et droit des étrangers.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15fd71934-1762889816230.png",
    alt: "Legal bar association certificate with scales of justice emblem and Casablanca bar seal",
    verificationLink: "#verify-barreau",
    category: "Juridique"
  },
  {
    id: 6,
    name: "Certification GDPR",
    issuer: "Commission Nationale de Contrôle (CNDP)",
    year: "2023",
    description: "Conformité aux normes de protection des données personnelles et confidentialité.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cc4c75e-1762889816733.png",
    alt: "Data protection compliance certificate with GDPR shield logo and privacy protection symbols",
    verificationLink: "#verify-gdpr",
    category: "Protection Données"
  }];


  const categories = [...new Set(certifications.map((cert) => cert.category))];

  return (
    <section className={`py-20 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Certifications & Agréments
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Notre expertise reconnue par les autorités marocaines et organismes internationaux, 
            garantissant la conformité et la qualité de nos services.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) =>
            <div
              key={category}
              className="bg-white px-4 py-2 rounded-full border border-primary/20 text-primary font-medium text-sm">

                {category}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) =>
          <div key={cert.id} className="bg-white rounded-2xl p-6 shadow-morocco hover:shadow-morocco-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheckIcon" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-poppins font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="BuildingOfficeIcon" size={14} className="text-text-secondary" />
                    <p className="text-sm text-text-secondary">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CalendarIcon" size={14} className="text-text-secondary" />
                    <p className="text-sm text-text-secondary">{cert.year}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {cert.category}
                </span>
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  <Icon name="EyeIcon" size={16} />
                  <span>Vérifier</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-morocco">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckBadgeIcon" size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Conformité & Transparence
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Toutes nos certifications sont vérifiables auprès des organismes émetteurs. 
              Nous nous engageons à maintenir les plus hauts standards de qualité et de conformité 
              pour garantir votre sécurité et votre confiance.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">100%</div>
                <div className="text-sm text-text-secondary">Conformité Légale</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">6</div>
                <div className="text-sm text-text-secondary">Certifications Actives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">2023</div>
                <div className="text-sm text-text-secondary">Dernière Mise à Jour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificationsSection;