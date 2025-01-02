'use client'
import React from 'react'
import { About } from '../components/Portfolio/about'
import CarroselServicos from '@/app/components/Portfolio/Servicos/servicosCarrosel'
import ExibirProjetos from '../components/Portfolio/Projetos/exibirProjetos'
import ExibirTecnologias from '../components/Portfolio/Tecnologias/exibirTecnologias'
import { AnimateWhenVisible } from '../components/animations'
import Link from 'next/link'
import { ButtonLink } from '../components/hero/button'
import Contato from '../components/Portfolio/contato'

const Portfolio = () => {
  return (
    
    <div className='flex flex-col justify-center items-center pt-16'>
      <div>
        <AnimateWhenVisible>
          <About/>
        </AnimateWhenVisible>
      </div>
      <div>
          <h1 className='text-4xl text-center mb-12'>Serviços</h1>
          <CarroselServicos/>        
      </div>
        <div className='pb-16 w-screen'>
          <h1 className='text-4xl text-center my-12 '>Projetos</h1>
          <AnimateWhenVisible>
            <ExibirProjetos />
          </AnimateWhenVisible>
        </div>
        <div>
        <h1 className='text-4xl text-center my-12 '>Tecnologias</h1>
          <ExibirTecnologias />
        </div>
        <div className=''>
        <AnimateWhenVisible>
          <Contato />
        </AnimateWhenVisible>
        </div>

    </div>
  )
}

export default Portfolio