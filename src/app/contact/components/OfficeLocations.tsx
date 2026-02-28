import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  isMain: boolean;
}

interface OfficeLocationsProps {
  className?: string;
}

const OfficeLocations = ({ className = '' }: OfficeLocationsProps) => {
  const offices: Office[] = [
    {
      id: 'casablanca',
      city: 'Casablanca',
      name: 'Bureau Principal',
      address: 'Twin Center, Tour A, 20ème étage\nAngle Bd Zerktouni et Bd Al Massira Al Khadra\n20100 Casablanca',
      phone: '+212 522 123 456',
      email: 'casablanca@sinstalleraumaroc.ma',
      hours: [
        'Lundi - Vendredi: 9h00 - 18h00',
        'Samedi: 9h00 - 13h00',
        'Dimanche: Fermé'
      ],
      coordinates: { lat: 33.5731, lng: -7.5898 },
      services: ['Création d\'entreprise', 'Investissement', 'Immigration', 'Fiscalité'],
      isMain: true
    },
    {
      id: 'rabat',
      city: 'Rabat',
      name: 'Bureau Gouvernemental',
      address: 'Agdal Business Center\n Avenue Mehdi Ben Barka\n10000 Rabat',
      phone: '+212 537 654 321',
      email: 'rabat@sinstalleraumaroc.ma',
      hours: [
        'Lundi - Vendredi: 9h00 - 17h00',
        'Samedi: Sur rendez-vous',
        'Dimanche: Fermé'
      ],
      coordinates: { lat: 34.0209, lng: -6.8416 },
      services: ['Démarches administratives', 'Visa', 'Résidence', 'Légalisation'],
      isMain: false
    },
    {
      id: 'marrakech',
      city: 'Marrakech',
      name: 'Bureau Sud',
      address: 'Carré Eden Center\nAvenue Mohammed VI\n40000 Marrakech',
      phone: '+212 524 987 654',
      email: 'marrakech@sinstalleraumaroc.ma',
      hours: [
        'Lundi - Vendredi: 9h00 - 18h00',
        'Samedi: 9h00 - 13h00',
        'Dimanche: Fermé'
      ],
      coordinates: { lat: 31.6295, lng: -7.9811 },
      services: ['Immobilier', 'Tourisme', 'Retraite', 'Lifestyle'],
      isMain: false
    }
  ];

  return (
    <section className={`py-16 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-primary mb-4">
            Nos Bureaux au Maroc
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trois bureaux stratégiquement situés pour vous accompagner partout au Maroc. 
            Équipes locales expertes à votre service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.id}
              className={`bg-white rounded-xl shadow-morocco hover:shadow-morocco-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                office.isMain ? 'ring-2 ring-primary ring-opacity-20' : ''
              }`}
            >
              {/* Map */}
              <div className="h-48 relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`Carte de ${office.city}`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=14&output=embed`}
                  className="border-0"
                />
                {office.isMain && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Bureau Principal
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-poppins font-bold text-text-primary mb-1">
                    {office.city}
                  </h3>
                  <p className="text-sm text-text-secondary font-medium">
                    {office.name}
                  </p>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPinIcon" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-text-primary whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="PhoneIcon" size={16} className="text-primary" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-sm text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="EnvelopeIcon" size={16} className="text-primary" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-sm text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="ClockIcon" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      {office.hours.map((hour, index) => (
                        <p key={index} className="text-sm text-text-secondary">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text-primary mb-2">
                    Services spécialisés :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button className="w-full btn-primary py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                    Prendre rendez-vous
                  </button>
                  <button className="w-full border border-primary text-primary py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200">
                    Voir sur la carte
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-morocco border border-border">
          <div className="text-center">
            <Icon name="InformationCircleIcon" size={24} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-poppins font-semibold text-text-primary mb-2">
              Besoin d'un rendez-vous dans une autre ville ?
            </h3>
            <p className="text-text-secondary mb-4">
              Nos conseillers se déplacent également à Tanger, Agadir, Fès et Oujda sur rendez-vous.
            </p>
            <button className="btn-secondary px-6 py-2 rounded-lg text-sm font-medium">
              Demander un déplacement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;