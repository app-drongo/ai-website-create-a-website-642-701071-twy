'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  Shield,
  Thermometer,
  Paintbrush,
  Hammer,
  Calculator,
  Euro,
  Clock,
  Award,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'isolation-exterieure',
      title: "Isolation Thermique par l'Extérieur (ITE)",
      description: "Améliorez l'efficacité énergétique de votre habitation",
      longDescription:
        "Notre service d'isolation thermique par l'extérieur vous permet de réduire vos factures énergétiques jusqu'à 30% tout en bénéficiant des aides gouvernementales. Nous utilisons des matériaux certifiés et respectons les normes RT2012.",
      icon: Thermometer,
      benefits: [
        'Réduction des ponts thermiques',
        "Économies d'énergie jusqu'à 30%",
        'Amélioration du confort thermique',
        'Valorisation de votre patrimoine',
      ],
      pricing: 'À partir de 120€/m²',
      timeline: '2-3 semaines selon surface',
      featured: true,
      badge: 'Le Plus Demandé',
    },
    {
      id: 'ravalement-facade',
      title: 'Ravalement de Façade',
      description: "Redonnez vie à l'extérieur de votre maison",
      longDescription:
        "Notre équipe d'experts réalise le ravalement complet de votre façade en respectant les réglementations locales. Nous proposons différents types d'enduits et de finitions pour s'adapter à votre style architectural.",
      icon: Paintbrush,
      benefits: [
        'Nettoyage et préparation des supports',
        "Application d'enduits de qualité",
        'Large choix de couleurs et finitions',
        'Garantie décennale incluse',
      ],
      pricing: 'Devis personnalisé',
      timeline: '1-2 semaines',
    },
    {
      id: 'renovation-toiture',
      title: 'Rénovation de Toiture',
      description: 'Protection et isolation optimales de votre toit',
      longDescription:
        'Nous intervenons sur tous types de toitures pour assurer leur étanchéité et leur isolation. De la simple réparation à la réfection complète, nous vous accompagnons dans votre projet.',
      icon: Home,
      benefits: [
        'Diagnostic complet de la toiture',
        'Réparation ou remplacement',
        'Isolation sous-toiture',
        'Pose de gouttières et zinguerie',
      ],
      pricing: 'À partir de 45€/m²',
      timeline: '1-3 semaines selon travaux',
    },
    {
      id: 'bardage-exterieur',
      title: 'Pose de Bardage',
      description: 'Habillage moderne et performant de vos murs',
      longDescription:
        "Le bardage combine esthétique et performance énergétique. Nous proposons différents matériaux (bois, composite, métal) pour créer une façade unique tout en améliorant l'isolation.",
      icon: Shield,
      benefits: [
        'Large choix de matériaux',
        "Amélioration de l'isolation",
        'Entretien minimal requis',
        'Design contemporain',
      ],
      pricing: 'À partir de 80€/m²',
      timeline: '1-2 semaines',
      badge: 'Tendance',
    },
  ];

  const handleDevisGratuit = () => {
    window.location.href = '/contact';
  };

  const handleConsultation = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Nos Services Professionnels
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions Complètes de
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Rénovation Extérieure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cloiseo vous accompagne dans tous vos projets de rénovation extérieure et d'isolation
            avec des solutions sur-mesure
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <Euro className="size-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Tarif:</span>
                            <span className="text-sm font-semibold">{service.pricing}</span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Délai:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          onClick={handleDevisGratuit}
                        >
                          Devis Gratuit en 48h
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="size-6 text-primary" />
            <h3 className="text-2xl font-semibold">Projet Spécifique ?</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nous étudions tous vos projets de rénovation extérieure. Bénéficiez de notre expertise
            et des aides disponibles pour votre isolation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleConsultation}>
              <Calculator className="mr-2 size-4" />
              Étude Personnalisée
            </Button>
            <Button size="lg" variant="outline" onClick={handleDevisGratuit}>
              Devis Gratuit en 48h
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
