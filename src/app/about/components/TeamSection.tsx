import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  expertise: string[];
  experience: string;
  image: string;
  alt: string;
  languages: string[];
  certifications: string[];
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Karim Benali",
    position: "Directeur Général & Fondateur",
    expertise: ["Droit des Affaires", "Investissement Immobilier", "Fiscalité Internationale"],
    experience: "15 ans d'expérience",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed14a690-1762273796947.png",
    alt: "Professional headshot of Middle Eastern businessman in navy suit with confident smile",
    languages: ["Français", "Arabe", "Anglais"],
    certifications: ["Barreau de Casablanca", "Expert-Comptable Agréé"]
  },
  {
    id: 2,
    name: "Sophie Dubois",
    position: "Directrice des Relations Clients",
    expertise: ["Accompagnement Expatriés", "Intégration Culturelle", "Services Familiaux"],
    experience: "12 ans d'expérience",
    image: "https://images.unsplash.com/photo-1688597628916-d3230d8ac41e",
    alt: "Professional portrait of French businesswoman with blonde hair in elegant blazer",
    languages: ["Français", "Anglais", "Espagnol"],
    certifications: ["Certification RH Internationale", "Coach Certifiée"]
  },
  {
    id: 3,
    name: "Ahmed Tazi",
    position: "Responsable Juridique",
    expertise: ["Droit de l'Immigration", "Procédures Administratives", "Conformité Légale"],
    experience: "10 ans d'expérience",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c088aa73-1762273662894.png",
    alt: "Professional headshot of Moroccan lawyer in dark suit with warm smile in office setting",
    languages: ["Arabe", "Français", "Anglais"],
    certifications: ["Avocat Inscrit au Barreau", "Spécialiste Droit des Étrangers"]
  },
  {
    id: 4,
    name: "Marie Leclerc",
    position: "Consultante Immobilière",
    expertise: ["Marché Immobilier", "Négociation", "Investissement Locatif"],
    experience: "8 ans d'expérience",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4bbe3ea-1762273319039.png",
    alt: "Professional portrait of French real estate consultant with brown hair in business attire",
    languages: ["Français", "Anglais"],
    certifications: ["Agent Immobilier Certifié", "Expert en Évaluation"]
  }];


  return (
    <section className={`py-20 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Notre Équipe d'Experts
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Une équipe multiculturelle et expérimentée, combinant expertise locale et 
            compréhension internationale pour vous accompagner dans votre projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) =>
          <div key={member.id} className="bg-white rounded-2xl p-6 shadow-morocco hover:shadow-morocco-lg transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-24 h-24 rounded-full object-cover mx-auto" />

                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="CheckIcon" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-sm text-text-secondary">{member.experience}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="AcademicCapIcon" size={16} className="mr-2 text-primary" />
                    Expertises
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, index) =>
                  <span
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">

                        {skill}
                      </span>
                  )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="LanguageIcon" size={16} className="mr-2 text-primary" />
                    Langues
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {member.languages.join(', ')}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="ShieldCheckIcon" size={16} className="mr-2 text-primary" />
                    Certifications
                  </h4>
                  <div className="space-y-1">
                    {member.certifications.map((cert, index) =>
                  <p key={index} className="text-xs text-text-secondary">
                        {cert}
                      </p>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;