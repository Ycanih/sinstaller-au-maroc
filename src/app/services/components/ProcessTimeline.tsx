import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const ProcessTimeline = ({ steps, className = '' }: ProcessTimelineProps) => {
  return (
    <section className={`py-16 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-text-primary mb-4">
            Notre Processus d'Accompagnement
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Un processus structuré et transparent pour garantir le succès de votre installation
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-border hidden lg:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  step.status === 'completed' 
                    ? 'bg-success border-success' 
                    : step.status === 'current' ?'bg-primary border-primary animate-pulse' :'bg-white border-border'
                }`}>
                  <Icon 
                    name={step.icon as any} 
                    size={24} 
                    className={
                      step.status === 'completed' || step.status === 'current'
                        ? 'text-white' :'text-text-secondary'
                    }
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-morocco transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
                        Étape {step.id}: {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-sm font-semibold text-primary">
                        {step.duration}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        step.status === 'completed'
                          ? 'bg-success/10 text-success'
                          : step.status === 'current' ?'bg-primary/10 text-primary' :'bg-muted text-text-secondary'
                      }`}>
                        {step.status === 'completed' ? 'Terminé' : 
                         step.status === 'current' ? 'En cours' : 'À venir'}
                      </div>
                    </div>
                  </div>
                  
                  {step.status === 'current' && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-2/3 transition-all duration-500"></div>
                        </div>
                        <span className="text-sm text-primary font-medium">67% complété</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Icon name="ClockIcon" size={24} className="text-primary" />
              <h3 className="text-xl font-poppins font-semibold text-text-primary">
                Durée Totale Moyenne
              </h3>
            </div>
            <div className="text-3xl font-poppins font-bold text-primary mb-2">
              3-6 mois
            </div>
            <p className="text-text-secondary">
              Selon la complexité de votre dossier et vos besoins spécifiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;