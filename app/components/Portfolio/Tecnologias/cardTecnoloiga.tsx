'use client'

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TechnologyCardProps {
  name: string
  img: string
  expertise: number
  infoVerso?: string
  features?: string[]
  backContent?: React.ReactNode
}

export function TechnologyCard({
  name,
  img,
  expertise,
  infoVerso,
  features,
  backContent
}: TechnologyCardProps) {

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className={`flex `}>
        <CardHeader>
          <Image src={img} alt={`${name} icon`} width={50} height={50} />
        </CardHeader>
        <CardContent className="p-5">
          <h1>{name}</h1>
          <div className="w-32 bg-gray-200 rounded-full h-2 my-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${expertise}%` }}
            />
          </div>
        </CardContent>
      </Card>

    </motion.div>
  )
}

