'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "./button";

const HeroPage: React.FC = () => {
  return (
    <main className="relative h-screen w-full">
      <Image
        src="/bg-1.jpg"
        alt="Background"
        fill
        style={{
          objectFit: 'cover',
        }}
        priority
        className="-z-10"
      />
      <div className="flex h-full px-4 flex-col">
        <motion.div 
          className="flex flex-col pt-44"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Thiago G. Mota
          </motion.h1>
          <motion.p 
            className="text-1xl relative mt-4 left-3 sm:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            FullStack Developer
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center pt-28 flex-col gap-4 lg:pt-48"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ButtonLink href="/portfolio" text="Portfólio"/>
          <ButtonLink href="/blog" text="Blog" />
        </motion.div>
      </div>
    </main>
  );
};

export default HeroPage;

