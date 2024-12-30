'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projetos } from './projetos'
import { ButtonLink } from '../../hero/button'
import { motion } from 'framer-motion'

const ExibirProjetos: React.FC = () => {
  return (
    <div className=' px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-7xl mx-auto'>
        <Carousel className='relative'>
          <CarouselContent className='-ml-4'>
            {projetos.projetosDestaque.map((projeto, index) => (
              <CarouselItem key={projeto.id} className='pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3'>
                <motion.div 
                  className='flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-full bg-opacity-40 backdrop-blur-md border-2 border-black'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image 
                      src={projeto.primaryImg} 
                      width={300} 
                      height={300} 
                      alt={projeto.title}
                      className='w-full h-50 object-cover rounded-md mb-4'
                    />
                  </motion.div>
                  <h2 className='text-xl font-semibold mb-2'>{projeto.title}</h2>
                  <p className='text-gray-800 mb-4 text-center'>{projeto.peqDescription}</p>
                  <Link 
                    href={`/portfolio/${projeto.id}`}
                    className='mt-auto'
                  >
                    <motion.button 
                      className='bg-black hover:bg-white text-white hover:text-black border-2 border-black font-bold py-2 px-4 rounded-lg transition duration-300'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Detalhes
                    </motion.button>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
            
          </CarouselContent>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <div className='text-center mt-28'>
          <ButtonLink href='/projetos' text='Ver todos os Projetos' />
        </div>
      </div>
    </div>
  )
}

export default ExibirProjetos

