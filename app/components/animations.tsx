'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimateWhenVisibleProps {
  children: React.ReactNode
  threshold?: number
}

export const AnimateWhenVisible: React.FC<AnimateWhenVisibleProps> = ({ children, threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

