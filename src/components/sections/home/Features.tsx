'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  Euro,
  FileText,
  Home,
  Ruler,
  CheckCircle,
  Gift,
  PiggyBank,
  FileCheck,
} from 'lucide-react';

export default function Features() {
  const costFactors = [
    {
      icon: Ruler,
      title: 'Surface à Isoler',
      description:
        'Calcul précis de la superficie des murs extérieurs à traiter selon les plans de votre habitation.',
      badge: 'Mesure',
    },
    {
      icon: Home,
      title: 'Type de Matériau',
      description:
        "Choix de l'isolant adapté : polystyrène, laine de roche, fibre de bois selon vos besoins.",
      badge: 'Matériaux',
    },
    {
      icon: FileText,
      title: 'Complexité des Travaux',
      description:
        'Évaluation de la configuration architecturale, balcons, ouvertures et contraintes techniques.',
      badge: 'Technique',
    },
  ];

  const availableAids = [
    {
      icon: Gift,
      title: "MaPrimeRénov'",
      description:
        "Aide de l'État pouvant couvrir jusqu'à 75€/m² selon vos revenus pour l'isolation extérieure.",
      badge: 'État',
    },
    {
      icon: PiggyBank,
      title: "Certificats d'Économie d'Énergie",
      description: "Prime CEE versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'.",
      badge: 'Énergie',
    },
    {
      icon: FileCheck,
      title: 'TVA Réduite 5,5%',
      description:
        "Taux de TVA préférentiel pour les travaux d'amélioration énergétique des logements.",
      badge: 'Fiscal',
    },
    {
      icon: Euro,
      title: 'Éco-PTZ',
      description:
        "Prêt à taux zéro jusqu'à 50 000€ pour financer vos travaux de rénovation énergétique.",
      badge: 'Financement',
    },
    {
      icon: CheckCircle,
      title: 'Aides Locales',
      description:
        'Subventions complémentaires de votre région, département ou commune selon votre localisation.',
      badge: 'Local',
    },
    {
      icon: Calculator,
      title: 'Cumul des Aides',
      description:
        'Optimisation du montage financier pour maximiser vos économies sur le coût total des travaux.',
      badge: 'Optimisation',
    },
  ];

  const handleDevisGratuit = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cost Determination Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Tarification Transparente
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comment déterminons-nous le
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              coût de votre isolation ?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Chez Cloiseo, nous établissons un devis personnalisé basé sur une analyse précise de
            votre projet d'isolation par l'extérieur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {costFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative text-center">
                    <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mx-auto mb-4">
                      <Icon className="size-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs mb-2 mx-auto w-fit">
                      {factor.badge}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {factor.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {factor.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Financial Aids Section */}
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-accent/10">
            Financement
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Quelles aides disponibles pour
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              l'isolation murs par l'extérieur ?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Profitez des nombreuses aides financières pour réduire significativement le coût de vos
            travaux d'isolation extérieure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableAids.map((aid, index) => {
              const Icon = aid.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {aid.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {aid.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {aid.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Obtenez votre devis personnalisé</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nos experts Cloiseo analysent votre projet et vous proposent la solution d'isolation
              la plus adaptée avec le montage financier optimal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDevisGratuit}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                Devis Gratuit en 48h
              </button>
              <button className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
                Simuler mes Aides
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Visite technique gratuite ✓ Étude personnalisée ✓ Accompagnement administratif
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
