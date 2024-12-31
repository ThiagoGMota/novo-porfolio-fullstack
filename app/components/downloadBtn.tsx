'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'

const DownloadButton = () => {
  return (
    <Link href="/CurriculoDev2025.pdf" download target='_blank' className='mt-8'>
      <Button className="flex items-center gap-2">
        <Download size={16} />
        Baixar Currículo
      </Button>
    </Link>
  )
}

export default DownloadButton

