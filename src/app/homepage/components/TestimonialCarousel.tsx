'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
  videoThumbnail?: string;
  hasVideo: boolean;
}

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Entrepreneur',
    location: 'Casablanca',
    image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    alt: 'Professional French businesswoman with blonde hair in elegant blazer smiling confidently in modern office',
    content: 'Grâce à S\'installer au Maroc, j\'ai pu créer mon entreprise de consulting en seulement 3 mois. Leur accompagnement a été exceptionnel du début à la fin.',
    rating: 5,
    hasVideo: true
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    role: 'Retraité',
    location: 'Marrakech',
    image: "https://images.unsplash.com/photo-1635341542289-d0307ddd5928",
    alt: 'Distinguished elderly French gentleman with gray beard wearing casual shirt smiling warmly in garden setting',
    content: 'Nous avons trouvé notre maison de rêve à Marrakech. L\'équipe nous a accompagnés dans toutes les démarches administratives. Une expérience formidable !',
    rating: 5,
    hasVideo: false
  },
  {
    id: 3,
    name: 'Sophie Lefebvre',
    role: 'Mère de famille',
    location: 'Rabat',
    image: "https://images.unsplash.com/photo-1729670941643-b00179b5037c",
    alt: 'Young mother with brown hair in casual sweater holding child while standing in front of traditional Moroccan architecture',
    content: 'Nos enfants sont scolarisés dans une excellente école internationale. La qualité de vie ici est incomparable. Merci pour votre professionnalisme !',
    rating: 5,
    hasVideo: true
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-white ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-text-primary mb-4">
              Témoignages de nos clients
            </h2>
            <p className="text-lg text-text-secondary font-inter">
              Découvrez les histoires de réussite de ceux qui ont franchi le pas
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8 animate-pulse">
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-text-primary mb-4">
            Témoignages de nos clients
          </h2>
          <p className="text-lg text-text-secondary font-inter">
            Découvrez les histoires de réussite de ceux qui ont franchi le pas
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-muted rounded-2xl p-8 lg:p-12 shadow-morocco">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="order-2 lg:order-1">
                {/* Quote */}
                <div className="mb-6">
                  <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mb-4" />
                  <blockquote className="text-lg lg:text-xl text-text-primary font-inter leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                  <Icon
                    key={i}
                    name="StarIcon"
                    size={20}
                    variant={i < currentTestimonial.rating ? 'solid' : 'outline'}
                    className={i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />

                  )}
                </div>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-poppins font-bold text-text-primary">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-text-secondary font-inter">
                    {currentTestimonial.role} • {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Author Image & Video */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-morocco">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full h-full object-cover" />

                  </div>
                  {currentTestimonial.hasVideo &&
                  <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 rounded-2xl">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="PlayIcon" size={24} className="text-primary ml-1" />
                      </div>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-morocco hover:shadow-morocco-lg flex items-center justify-center transition-all duration-300 hover:scale-110">

            <Icon name="ChevronLeftIcon" size={24} className="text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-morocco hover:shadow-morocco-lg flex items-center justify-center transition-all duration-300 hover:scale-110">

            <Icon name="ChevronRightIcon" size={24} className="text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`
            } />

          )}
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;