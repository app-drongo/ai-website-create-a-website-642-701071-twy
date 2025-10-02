'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calculator,
  Home,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    surface: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleDevisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Demande de devis soumise:', formData);
    // Could redirect to thank you page or show success message
  };

  const handleCallAction = () => {
    window.location.href = 'tel:+33123456789';
  };

  const handleEmailAction = () => {
    window.location.href = 'mailto:contact@cloiseo.fr';
  };
  // ACTION_PLACEHOLDER_END

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Appelez-nous',
      description: 'Conseil personnalisé immédiat',
      contact: '01 23 45 67 89',
      action: 'Appeler maintenant',
      onClick: handleCallAction,
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Réponse sous 2h en semaine',
      contact: 'contact@cloiseo.fr',
      action: 'Envoyer un email',
      onClick: handleEmailAction,
    },
    {
      icon: Calculator,
      title: 'Devis Express',
      description: 'Estimation en ligne rapide',
      contact: 'Gratuit et sans engagement',
      action: 'Calculer mon devis',
      onClick: () => router.push('/'),
    },
  ];

  const zones = [
    {
      region: 'Île-de-France',
      departements: '75, 77, 78, 91, 92, 93, 94, 95',
      contact: '01 23 45 67 89',
    },
    {
      region: 'Hauts-de-France',
      departements: '59, 62, 80, 02, 60',
      contact: '03 23 45 67 89',
    },
    {
      region: 'Grand Est',
      departements: '67, 68, 54, 57, 88, 08, 10, 51, 52, 55',
      contact: '03 87 45 67 89',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact Cloiseo
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Votre Devis Gratuit
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              en 48h Maximum
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Spécialistes de la rénovation extérieure et de l'isolation thermique. Obtenez votre
            estimation personnalisée rapidement et sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Demande de Devis Gratuit
              </CardTitle>
              <CardDescription>
                Remplissez ce formulaire pour recevoir votre devis personnalisé sous 48h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDevisSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="jean.dupont@email.fr"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Adresse du projet *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="123 rue de la Rénovation, 75001 Paris"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="isolation-exterieure">Isolation par l'extérieur</option>
                      <option value="ravalement-facade">Ravalement de façade</option>
                      <option value="isolation-combles">Isolation des combles</option>
                      <option value="renovation-complete">Rénovation complète</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="surface" className="block text-sm font-medium mb-2">
                      Surface approximative
                    </label>
                    <input
                      type="text"
                      id="surface"
                      name="surface"
                      value={formData.surface}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="150 m²"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Détails du projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Décrivez votre projet, vos attentes, contraintes particulières..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Recevoir mon Devis Gratuit en 48h
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Devis gratuit et sans engagement • Réponse garantie sous 48h
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Contactez Cloiseo
              </h2>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={method.onClick}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Zones d'Intervention
              </h3>
              <div className="space-y-3">
                {zones.map((zone, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{zone.region}</h4>
                      <Badge variant="secondary" className="text-xs">
                        <Phone className="size-3 mr-1" />
                        {zone.contact}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Départements : {zone.departements}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Horaires d'Ouverture
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span>9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Home className="size-4" />
                    Déplacements gratuits pour devis dans un rayon de 50km
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
