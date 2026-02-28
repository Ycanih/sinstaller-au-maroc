'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  alt: string;
  location: string;
  projectType: string;
  completionYear: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pierre Dubois",
    position: "Directeur Général",
    company: "TechStart Solutions",
    content: "L'équipe de S'installer au Maroc a transformé ce qui semblait être un parcours du combattant en une expérience fluide et rassurante. Leur connaissance approfondie des procédures et leur réseau de partenaires nous ont fait gagner des mois. Aujourd'hui, notre entreprise prospère à Casablanca grâce à leur accompagnement exceptionnel.",
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10f473732-1762274443304.png",
    alt: "Professional headshot of French businessman in navy suit with confident smile in modern office",
    location: "Casablanca",
    projectType: "Création d'entreprise",
    completionYear: "2023"
  },
  {
    id: 2,
    name: "Marie-Claire Lefebvre",
    position: "Retraitée",
    company: "Ancienne Directrice RH",
    content: "Après 35 ans de carrière en France, je rêvais de m'installer au Maroc pour ma retraite. Sophie et son équipe ont rendu ce rêve possible en s'occupant de tous les aspects : de la recherche immobilière aux démarches administratives. Leur approche humaine et professionnelle m'a mise en confiance dès le premier contact.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527079702334-5ad148b7f07d",
    alt: "Elegant French woman with silver hair smiling warmly in Mediterranean garden setting",
    location: "Marrakech",
    projectType: "Installation retraite",
    completionYear: "2022"
  },
  {
    id: 3,
    name: "Jean-Luc Martin",
    position: "Investisseur Immobilier",
    company: "Martin Patrimoine",
    content: "En tant qu'investisseur, j'avais besoin d'une expertise pointue sur le marché immobilier marocain et la fiscalité. L'équipe juridique d'Ahmed Tazi a dépassé mes attentes. Leur analyse du marché et leur accompagnement dans les négociations m'ont permis de réaliser des investissements rentables en toute sécurité.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1714974528683-8940bd8311aa",
    alt: "Distinguished French investor in elegant suit reviewing documents in luxury office environment",
    location: "Rabat",
    projectType: "Investissement immobilier",
    completionYear: "2023"
  },
  {
    id: 4,
    name: "Famille Rousseau",
    position: "Entrepreneurs",
    company: "Café des Arts",
    content: "Nous avons quitté Lyon avec nos deux enfants pour ouvrir un café-restaurant à Essaouira. L'équipe nous a accompagnés sur tous les aspects : scolarisation des enfants, création de l'entreprise, recherche de local. Leur réseau de partenaires nous a ouvert toutes les portes. Une expérience humaine extraordinaire !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1709776194011-c544dafd0f9b",
    alt: "Happy French family of four standing together in front of traditional Moroccan restaurant with blue doors",
    location: "Essaouira",
    projectType: "Installation familiale",
    completionYear: "2022"
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className={`py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Témoignages de Nos Clients
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Découvrez les expériences authentiques de nos clients qui ont fait confiance 
            à notre expertise pour concrétiser leur projet d'installation au Maroc.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-morocco">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) =>
                  <Icon
                    key={i}
                    name="StarIcon"
                    size={20}
                    className={i < currentTestimonial.rating ? 'text-accent' : 'text-gray-300'}
                    variant="solid" />

                  )}
                </div>

                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-text-primary">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-primary font-medium">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-text-secondary">
                      {currentTestimonial.company}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPinIcon" size={16} className="text-primary" />
                      <span className="text-sm text-text-secondary">{currentTestimonial.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="BriefcaseIcon" size={16} className="text-primary" />
                      <span className="text-sm text-text-secondary">{currentTestimonial.projectType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CalendarIcon" size={16} className="text-primary" />
                      <span className="text-sm text-text-secondary">{currentTestimonial.completionYear}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Photo */}
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full rounded-2xl object-cover shadow-morocco" />

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-morocco">
                    <Icon name="ChatBubbleLeftEllipsisIcon" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 px-6 py-3 bg-surface hover:bg-primary hover:text-white rounded-lg transition-all duration-300 group">

                <Icon name="ChevronLeftIcon" size={20} />
                <span className="font-medium">Précédent</span>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'}`
                  } />

                )}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 px-6 py-3 bg-surface hover:bg-primary hover:text-white rounded-lg transition-all duration-300 group">

                <span className="font-medium">Suivant</span>
                <Icon name="ChevronRightIcon" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-text-secondary">Taux de Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-text-secondary">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-text-secondary">Note Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-text-secondary">Années d'Expérience</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;