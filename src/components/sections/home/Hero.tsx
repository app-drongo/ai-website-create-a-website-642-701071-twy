'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/temp'); // Devis gratuit - main conversion action
  };

  const handleSecondaryAction = () => {
    router.push('/temp'); // Nos réalisations - showcase work
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Column */}
          <div className="max-w-xl">
            {/* Eyebrow text */}
            <div className="flex items-center gap-2 mb-6">
              <Shield className="size-5 text-primary" />
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                Expert en rénovation extérieure
              </p>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Transformez votre <span className="text-primary">façade</span> avec Cloiseo
            </h1>

            {/* Supporting text */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Spécialiste de l'isolation extérieure et de la rénovation de façade. Bénéficiez des
              aides gouvernementales et réduisez vos factures énergétiques jusqu'à 40%.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-primary" />
                <span>Certifié RGE</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-primary" />
                <span>+500 maisons rénovées</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group text-base px-8" onClick={handlePrimaryAction}>
                Devis gratuit en 24h
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                onClick={handleSecondaryAction}
              >
                Voir nos réalisations
              </Button>
            </div>

            {/* Key benefits */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">-40%</p>
                  <p className="text-xs text-muted-foreground mt-1">Factures énergétiques</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15 ans</p>
                  <p className="text-xs text-muted-foreground mt-1">Garantie travaux</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">90%</p>
                  <p className="text-xs text-muted-foreground mt-1">Aides financées</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/api/placeholder/600/750"
                alt="Maison moderne avec isolation extérieure et façade rénovée par Cloiseo"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay badge */}
              <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="size-3 bg-primary rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Projet en cours</p>
                    <p className="text-xs text-muted-foreground">Isolation + Ravalement</p>
                  </div>
                </div>
              </div>

              {/* Bottom stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-foreground">8 500€</p>
                    <p className="text-xs text-muted-foreground">Aides obtenues</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">3 sem.</p>
                    <p className="text-xs text-muted-foreground">Durée chantier</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 shadow-lg">
              <Shield className="size-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg">
              <Award className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
