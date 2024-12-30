import { hr } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={'/'} >    
      <p className='text-2xl text-purple-700 font-bold'>TM</p>
    </Link>
  )
}
