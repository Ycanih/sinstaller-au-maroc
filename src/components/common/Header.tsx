'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', href: '/homepage', icon: 'HomeIcon' },
    { name: 'Services', href: '/services', icon: 'BriefcaseIcon' },
    { name: 'À propos', href: '/about', icon: 'UserGroupIcon' },
    { name: 'Guide Maroc', href: '/morocco-guide', icon: 'MapIcon' },
    { name: 'Contact', href: '/contact', icon: 'PhoneIcon' },
  ];

  const secondaryItems = [
    { name: 'Réseau Partenaires', href: '/partner-network', icon: 'BuildingOfficeIcon' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-morocco border-b border-border' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <AppImage
                src="/assets/images/s_iam_logo-1764103250175.png"
                alt="S'IAM RELOCATION AGENCY - Professional relocation services in Morocco"
                width={120}
                height={40}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-poppins font-bold text-gradient-morocco">
                S'installer au Maroc
              </h1>
              <p className="text-xs text-text-secondary font-inter">
                Votre nouvelle vie commence ici
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:text-primary hover:bg-muted transition-all duration-300 moroccan-pattern-reveal"
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:text-primary hover:bg-muted transition-all duration-300">
                <Icon name="EllipsisHorizontalIcon" size={18} />
                <span>Plus</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-elevation border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-sm text-text-primary hover:text-primary hover:bg-muted transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    <Icon name={item.icon as any} size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="btn-primary px-6 py-2 rounded-lg text-sm font-poppins font-semibold shadow-morocco hover:shadow-morocco-lg transform hover:scale-105 transition-all duration-300"
            >
              Consultation Gratuite
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "XMarkIcon" : "Bars3Icon"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-primary hover:text-primary hover:bg-muted transition-colors duration-200"
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {secondaryItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full btn-primary px-6 py-3 rounded-lg font-poppins font-semibold shadow-morocco"
                >
                  <Icon name="PhoneIcon" size={20} className="mr-2" />
                  Consultation Gratuite
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;