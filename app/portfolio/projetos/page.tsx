'use client'

import { projetos } from '@/app/components/Portfolio/Projetos/projetos'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const AllProjects = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-8'>
      {projetos.projetos.map((projeto, index) => (
         <motion.div 
         key={projeto.id}
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
      ))}
    </div>
  )
}

export default AllProjects