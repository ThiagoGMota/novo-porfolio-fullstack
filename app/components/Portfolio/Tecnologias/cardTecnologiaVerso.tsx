import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { CardFrenteProps } from './cardTecnoloigaFrente';

export interface CardVersoProps extends CardFrenteProps {
  name: string;
  infoVerso: string;
  features?: string[];
}

export const CardTecnologiaVerso: React.FC<CardVersoProps> = ({ name, infoVerso, features }) => {
  return (
    <Card className='w-full h-full'>
      <CardContent className='p-5'>
        <h1>{name}</h1>
        <p>{infoVerso}</p>
        {features && <p>Features: {features}</p>}
      </CardContent>
    </Card>
  )
}

