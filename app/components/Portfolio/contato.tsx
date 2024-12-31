'use client'

import { Social } from '@/app/components/Portfolio/social'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { motion } from 'framer-motion'

const Contato = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className='container mx-auto px-4 pt-12 backdrop-blur-md bg-white/30 rounded-lg shadow-lg w-screen'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-bold text-center mb-8"
        variants={itemVariants}
      >
        Entre em contato
      </motion.h1>

      <motion.form 
        action="https://formsubmit.co/thiagogabrielmta@gmail.com" 
        method="POST" 
        className='max-w-md mx-auto space-y-6 bg-white/50 p-6 rounded-md border-2 border-black'
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Seu email"
            required
            className='w-full bg-white/70 shadow-xl'
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <Input
            type="tel" 
            id="phone"
            name="phone" 
            placeholder="Seu telefone/WhatsApp"
            className='w-full bg-white/70 shadow-xl'
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
          <Textarea 
            id="message"
            name="message" 
            placeholder="Digite sua mensagem"
            rows={4}
            required
            className='w-full bg-white/70 shadow-xl'
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            type='submit' 
            className="w-full bg-black/80 hover:bg-black/90 text-white p-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>
        </motion.div>
      </motion.form>

      <motion.div 
        className='mt-12 p-6 rounded-md'
        variants={containerVariants}
      >
        <motion.h2 
          className="text-2xl font-semibold text-center mb-4"
          variants={itemVariants}
        >
          Ou me encontre nas redes sociais
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center gap-6'
          variants={itemVariants}
        >
          <Social />       
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contato

