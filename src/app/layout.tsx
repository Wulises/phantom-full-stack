import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import Navbar from '@/components/Navbar'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Phantom Full Stack Thief',
  description: 'App inpirada en Persona 5 Royal sobre todo que se necesita saber para ser un full stack developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${bebas.className} bg-[#0f0f1a] text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
