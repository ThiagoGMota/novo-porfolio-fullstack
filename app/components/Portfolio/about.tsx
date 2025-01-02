'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from "next/image";
import React from "react";
import { Social } from "./social";
import { motion } from "framer-motion";
import Link from 'next/link';
import DownloadButton from '../downloadBtn';

export const About = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start mb-32 bg-white bg-opacity-20 backdrop-blur-md pb-32">      

      <motion.div 
        className="relative flex items-center justify-center lg:w-1/2 flex-col w-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={"/thiago-cover.png"}
            alt="Fotografia de Thiago"
            width={250}
            height={400}
            className="z-40 rounded-2xl mb-8 transition-all duration-500 ease-in-out transform shadow-[0px_0px_0px_rgb(31,31,52),_-27px_-27px_0px_rgb(31,31,52)] lg:w-[400px]"
          />
        </motion.div>
        <motion.div 
          className="flex justify-evenly w-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Social />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col justify-center items-start text-xl lg:w-1/2 lg:text-2xl px-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p 
          className="mt-4 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Olá! Bem vindo ao meu portfólio,<br/> Meu nome é <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          ><b><i>Thiago</i></b></motion.span> e sou desenvolvedor <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          ><b><i>Frontend</i></b></motion.span>. <br />Trabalho criando  
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
          ><b><i> sites e soluções web</i></b></motion.span>, sempre buscando a melhor <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          ><b><i>experiência do usuário</i></b></motion.span> e
          a mais alta qualidade de código. <br />Cada projeto é uma nova oportunidade
          para explorar tecnologias, resolver desafios e criar algo que possa
          fazer a<motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
          ><b><i> diferença</i></b></motion.span>.<br /> Seja bem-vindo ao meu portfólio. Espero que goste
          do meu trabalho.
        </motion.p>
        <DownloadButton />
      </motion.div>
    </div>
  );
};

