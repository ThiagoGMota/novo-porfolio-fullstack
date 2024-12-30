import { Navbar } from "../components/navBar"
import Image from "next/image"

export default function PortfolioLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative min-h-screen">
      <nav className="fixed w-full h-16 z-50">
        <Navbar/>
      </nav>
      
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image 
          src="/bg-2.jpg" 
          alt="cover" 
          fill 
          priority
          className="object-cover hidden sm:block"
        />
        <Image 
          src="/bg-2-1.jpg" 
          alt="cover" 
          fill 
          priority
          className="object-cover sm:hidden"
        />
      </div>
      
      <main className="relative pt-16 min-h-screen ">
        {children}
      </main>
    </section>
  )
}

