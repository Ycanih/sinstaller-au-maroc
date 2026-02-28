import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  service: string;
  location: string;
}

interface ClientTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

const ClientTestimonials = ({ testimonials, className = '' }: ClientTestimonialsProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Témoignages de nos Clients
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Découvrez les expériences de familles et entrepreneurs qui ont réussi leur installation au Maroc
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface rounded-xl p-6 hover:shadow-morocco transition-all duration-300 border border-border"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name="StarIcon"
                    size={16}
                    variant={index < testimonial.rating ? 'solid' : 'outline'}
                    className={index < testimonial.rating ? 'text-accent' : 'text-muted'}
                  />
                ))}
              </div>
              
              <blockquote className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <AppImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-poppins font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role} • {testimonial.company}
                  </div>
                  <div className="text-xs text-primary font-medium mt-1">
                    {testimonial.service} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary px-8 py-3 rounded-lg font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Voir Plus de Témoignages</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;