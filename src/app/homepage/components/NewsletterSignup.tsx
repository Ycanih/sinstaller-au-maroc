'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup = ({ className = '' }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className={`py-20 bg-primary ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-8">
          <Icon name="EnvelopeIcon" size={48} className="text-white mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">
            Recevez notre guide gratuit
          </h2>
          <p className="text-xl text-white/90 font-inter max-w-2xl mx-auto">
            "Les 10 étapes essentielles pour s'installer au Maroc" + nos conseils exclusifs chaque semaine
          </p>
        </div>

        {/* Newsletter Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 rounded-lg border-0 text-text-primary font-inter focus:ring-2 focus:ring-white/50 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-primary px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi...</span>
                  </>
                ) : (
                  <>
                    <span>Recevoir le guide</span>
                    <Icon name="ArrowRightIcon" size={20} />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-sm text-white/80 font-inter mt-4">
              Pas de spam, désinscription en un clic. Vos données sont protégées.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon name="CheckCircleIcon" size={48} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-white mb-2">
                Merci pour votre inscription !
              </h3>
              <p className="text-white/90 font-inter">
                Vous allez recevoir votre guide gratuit par email dans quelques minutes.
              </p>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="UserGroupIcon" size={20} />
            <span className="text-sm font-inter">+2000 abonnés</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ShieldCheckIcon" size={20} />
            <span className="text-sm font-inter">Données sécurisées</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ClockIcon" size={20} />
            <span className="text-sm font-inter">Conseils hebdomadaires</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;