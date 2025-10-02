'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Home, Shield, Award, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  // Primary CTA - main conversion action
  const handlePrimaryAction = () => {
    router.push('/contact'); // TARGET: contact page for free quote
  };

  // Secondary CTA - engagement action
  const handleSecondaryAction = () => {
    router.push('/services'); // TARGET: services page for more info
  };
  // ACTION_PLACEHOLDER_END

  const trustBadges = [
    { icon: Shield, label: 'Certifié RGE' },
    { icon: Award, label: 'Qualibat' },
    { icon: Home, label: '15 ans garantie' },
    { icon: CheckCircle, label: 'Devis gratuit' },
  ];

  const guarantees = [
    'Intervention sous 48h',
    'Devis détaillé gratuit',
    'Accompagnement aides financières',
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Security badge */}
          <Badge variant="secondary" className="mb-6">
            <Home className="size-3 mr-1" />
            Expert en rénovation extérieure
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Rénovation extérieure
            <span className="block text-primary">et isolation thermique</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transformez votre habitat avec nos solutions d'isolation par l'extérieur. Économies
            d'énergie garanties et valorisation de votre patrimoine.
          </p>

          {/* Trust badges grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <Card key={index} className="p-4 bg-card/50 backdrop-blur border-border/50">
                  <Icon className="size-8 text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium text-muted-foreground">{badge.label}</p>
                </Card>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="group text-base px-8" onClick={handlePrimaryAction}>
              Devis Gratuit en 48h
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              onClick={handleSecondaryAction}
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="size-4 text-green-500" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>

          {/* Enterprise clients */}
          <Card className="p-6 bg-muted/30">
            <p className="text-sm text-muted-foreground mb-4">
              Plus de 500 maisons rénovées en Île-de-France
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["MaPrimeRénov'", 'CEE', 'Éco-PTZ', 'ANAH', 'Région'].map((aide, i) => (
                <div
                  key={i}
                  className="h-8 px-4 bg-muted rounded flex items-center text-xs font-medium"
                >
                  {aide}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
