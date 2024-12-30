'use client'
import React from 'react'
import { About } from '../components/Portfolio/about'
import CarroselServicos from '@/app/components/Portfolio/Servicos/servicosCarrosel'
import ExibirProjetos from '../components/Portfolio/Projetos/exibirProjetos'
import ExibirTecnologias from '../components/Portfolio/Tecnologias/exibirTecnologias'
import { AnimateWhenVisible } from '../components/animations'

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
        <div className='pb-16'>
          <h1 className='text-4xl text-center my-12'>Projetos</h1>
          <AnimateWhenVisible>
            <ExibirProjetos />
          </AnimateWhenVisible>
        </div>
        <div>
          <ExibirTecnologias />
        </div>

    </div>
  )
}

export default Portfolio