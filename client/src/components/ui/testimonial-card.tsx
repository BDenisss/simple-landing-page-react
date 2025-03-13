import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ image, name, role, quote }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={image} alt={name} />
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="italic text-muted-foreground">"{quote}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
