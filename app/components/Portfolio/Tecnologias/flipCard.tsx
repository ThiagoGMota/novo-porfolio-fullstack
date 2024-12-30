import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image';
import React, { useState } from 'react'

interface CardFrenteProps{
    name:       string;
    img:        string;
    expertise:  number;
    backContent?: React.ReactNode;
    infoVerso:  string;
    features?:  string;
}
interface CardVersoProps extends CardFrenteProps {
    
}

export const CardTecnoloigaFrente = ({name, img, expertise, backContent}:CardFrenteProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className={`relative w-full h-full transition-transform duration-500 transform ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Card className={`flex  ${isFlipped ? 'hidden' : 'block'}`}>
        <CardHeader>
            <Image src={img} alt={`icon ${name}`} width={50} height={50} />
        </CardHeader>
        <CardContent className='p-5'>
            <h1>{name}</h1>
            <div className="w-32 bg-gray-200 rounded-full h-2 my-2">
              <div className="bg-black h-2 rounded-full transition-all duration-300"
                style={{ width: `${expertise}%` }}
              ></div>
            </div>
            
        </CardContent>
    </Card>
    <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'block' : 'hidden'}`}>
        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
          {backContent ? (
            backContent
          ) : (
            <p className="text-sm">Informações adicionais sobre {name}</p>
          )}
        </div>
      </div>
    </div>
    
  )
}

export const CardTecnoloigaVerso = () => {
  return (
    <Card></Card>
  )
}



