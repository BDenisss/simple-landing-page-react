import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/pricing-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { Waves, Music, Mic2, Share2 } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-500 opacity-10"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Libérez votre créativité musicale
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Composez, créez et partagez votre musique comme jamais auparavant
            </p>
            <Button size="lg" className="text-lg">
              Essayez gratuitement
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Une solution complète pour votre créativité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Waves className="w-8 h-8" />}
              title="Composition Instrumentale"
              description="Générez des mélodies et des arrangements uniques en quelques clics"
            />
            <FeatureCard
              icon={<Mic2 className="w-8 h-8" />}
              title="Génération de Paroles"
              description="Créez des paroles originales adaptées à votre style musical"
            />
            <FeatureCard
              icon={<Share2 className="w-8 h-8" />}
              title="Partage Facile"
              description="Partagez vos créations et collaborez avec d'autres artistes"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choisissez votre formule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Gratuit"
              price="0"
              features={[
                "Accès limité aux fonctionnalités",
                "Parfait pour découvrir",
                "Export MP3 basique",
                "5 projets maximum",
              ]}
              buttonText="Commencer"
            />
            <PricingCard
              title="Premium"
              price="9.99"
              features={[
                "Accès illimité",
                "IA avancée",
                "Audio haute qualité",
                "Projets illimités",
              ]}
              buttonText="Passer Premium"
              featured
            />
            <PricingCard
              title="Pro"
              price="19.99"
              features={[
                "Tout Premium +",
                "Exports professionnels",
                "Droits commerciaux",
                "Support prioritaire",
              ]}
              buttonText="Devenir Pro"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Ce qu'en disent nos utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1518315064-bec5daa6062b"
              name="Thomas M."
              role="Producteur Musical"
              quote="Cette plateforme a révolutionné ma façon de composer. L'IA m'aide à explorer de nouvelles directions créatives."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1668075797959-3477428b82c8"
              name="Sarah L."
              role="Auteure-Compositrice"
              quote="La génération de paroles m'aide énormément quand je suis en panne d'inspiration. Un outil indispensable !"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1682872368773-93847d03e732"
              name="Marc D."
              role="Musicien Amateur"
              quote="Même en tant que débutant, je peux créer des morceaux dont je suis fier. L'interface est vraiment intuitive."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Prêt à composer votre prochain hit ?
          </h2>
          <Button size="lg" className="text-lg">
            Commencer gratuitement
          </Button>
        </div>
      </section>
    </div>
  );
}
