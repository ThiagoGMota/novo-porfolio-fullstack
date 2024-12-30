import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface cardServicoProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const CardServico: React.FC<cardServicoProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="h-44 border-[2px] border-black max-w-[350px] bg-white bg-opacity-30 backdrop-blur-md rounded-lg">
        <CardContent className="flex flex-col items-center justify-center p-4 h-full text-center">
          <div className="mb-2 text-3xl text-primary">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-900 text-center text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardServico;
