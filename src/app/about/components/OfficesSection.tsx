import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  alt: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  manager: string;
}

interface OfficesSectionProps {
  className?: string;
}

const OfficesSection = ({ className = '' }: OfficesSectionProps) => {
  const offices: Office[] = [
  {
    id: 1,
    city: "Casablanca",
    address: "Twin Center, Tour A, 20ème étage\nAngle Bd Zerktouni et Bd Al Massira Al Khadra",
    phone: "+212 522 95 80 00",
    email: "casablanca@sinstalleraumaroc.com",
    image: "https://images.unsplash.com/photo-1617122540114-39aa84f8d95d",
    alt: "Modern Twin Center towers in Casablanca business district with glass facades and urban skyline",
    coordinates: { lat: 33.5731, lng: -7.5898 },
    services: ["Siège Social", "Services Complets", "Accompagnement Entreprises"],
    manager: "Karim Benali"
  },
  {
    id: 2,
    city: "Marrakech",
    address: "Quartier Guéliz\n42 Avenue Mohammed V",
    phone: "+212 524 43 70 00",
    email: "marrakech@sinstalleraumaroc.com",
    image: "https://images.unsplash.com/photo-1728200696391-1fcab7f5a03b",
    alt: "Traditional Moroccan building with modern office spaces in Marrakech Gueliz district",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    services: ["Immobilier", "Tourisme", "Lifestyle"],
    manager: "Marie Leclerc"
  },
  {
    id: 3,
    city: "Rabat",
    address: "Quartier Agdal\n15 Avenue Mehdi Ben Barka",
    phone: "+212 537 77 20 00",
    email: "rabat@sinstalleraumaroc.com",
    image: "https://images.unsplash.com/photo-1550103759-cddb909f39c1",
    alt: "Government district office building in Rabat with Moroccan administrative architecture",
    coordinates: { lat: 34.0209, lng: -6.8416 },
    services: ["Procédures Administratives", "Relations Gouvernementales"],
    manager: "Ahmed Tazi"
  }];


  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Nos Bureaux au Maroc
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Une présence locale forte dans les principales villes du royaume pour vous 
            accompagner au plus près de vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offices.map((office) =>
          <div key={office.id} className="bg-surface rounded-2xl overflow-hidden shadow-morocco hover:shadow-morocco-lg transition-all duration-300 group">
              <div className="relative h-48">
                <AppImage
                src={office.image}
                alt={office.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-poppins font-bold text-white">
                    {office.city}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPinIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Adresse</h4>
                      <p className="text-sm text-text-secondary whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Téléphone</h4>
                      <p className="text-sm text-text-secondary">{office.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                      <p className="text-sm text-text-secondary">{office.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="UserIcon" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Responsable</h4>
                      <p className="text-sm text-text-secondary">{office.manager}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Cog6ToothIcon" size={16} className="mr-2 text-primary" />
                    Services Spécialisés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, index) =>
                  <span
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">

                        {service}
                      </span>
                  )}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={`Bureau ${office.city}`}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=14&output=embed`}
                    className="border-0" />

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default OfficesSection;