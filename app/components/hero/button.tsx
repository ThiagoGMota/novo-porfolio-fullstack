'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface btnProps{
  href:string;
  text:string;
}
export const ButtonLink:React.FC<btnProps> = ({href, text}) => {
  return (
    <motion.button
      className="min-w-52 bg-white/30 text-black/80 backdrop-blur-md border border-white/20 rounded-full px-16 py-4 shadow-md transition duration-300 hover:bg-white hover:text-black hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>{text}</Link>
    </motion.button>
  )
}

