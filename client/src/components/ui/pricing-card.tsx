import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

export function PricingCard({ title, price, features, buttonText, featured = false }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`h-full ${featured ? 'border-primary shadow-lg' : ''}`}>
        <CardHeader>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}€</span>
            <span className="text-muted-foreground">/mois</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={featured ? "default" : "outline"}>
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
