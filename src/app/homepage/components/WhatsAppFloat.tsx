'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhatsAppFloatProps {
  className?: string;
}

const WhatsAppFloat = ({ className = '' }: WhatsAppFloatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+212600123456'; // Mock WhatsApp number
    const message = encodeURIComponent('Bonjour, je souhaite obtenir des informations sur vos services d\'installation au Maroc.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
        aria-label="Contacter via WhatsApp"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={28} />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-inter whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Discuter sur WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;