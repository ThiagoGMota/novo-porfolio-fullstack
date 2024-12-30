'use client'

import React from 'react'
import { motion } from "framer-motion"
import { tecnologias } from './tecnologias'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { TechnologyCard } from './cardTecnoloiga'

const servicePairs = tecnologias.reduce((result, value, index, array) => {
  if (index % 3 === 0)
    result.push(array.slice(index, index + 3));
  return result;
}, [] as typeof tecnologias[]);

const ExibirTecnologias = () => {
  return (
    
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-32"
      >
        <CarouselContent>
          {servicePairs.map((pair, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="grid grid-rows-3 items-center justify-center h-96 px-2">
                {pair.map((tecnologia) => (
                  <TechnologyCard 
                    key={tecnologia.name}
                    name={tecnologia.name}
                    expertise={tecnologia.expertise}
                    img={tecnologia.image}
                    infoVerso={tecnologia.versoInfo}
                    features={tecnologia.features}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
   
  )
}

export default ExibirTecnologias

