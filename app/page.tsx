"use client"
import Animatedback from './components/Animatedbackground'
import Link from 'next/link'
import Image from 'next/image'
import prempic from './components/1000022981.png'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/aboutme', label: 'About me' },
    { href: '/project', label: 'Project' },
    { href: '/contact', label: 'Contact Me' },
  ]
  return (
    <Animatedback>
      <nav className="relative w-full bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div>
            <Link href="/" className="text-xl font-bold text-orange-400 transition hover:text-orange-300">
              NattanonWebfolio
            </Link>
          </div>

          <div className="hidden space-x-6 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="z-30 text-white">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`
          absolute top-0 left-0 z-20
          h-screen w-full 
          bg-gray-900 bg-opacity-95 backdrop-blur-sm
          flex flex-col items-center justify-center gap-8
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl text-white transition hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <div
        className="
          container mx-auto 
          flex flex-col-reverse lg:flex-row  
          items-center 
          gap-8                          
          px-8 py-12 lg:px-20 lg:py-24     
        "
      >
        <div
          className="
            w-full lg:w-2/3                
            text-center lg:text-left        
          "
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-orange-400">
            Nattanon Ngamkham
          </h1>
          <p className="pt-5 text-lg text-gray-200">
            "A driven second-year Computer Science student with an insatiable
            curiosity for mastering new technologies and solving complex
            challenges."
          </p>
        </div>

        <div
          className="
            w-full max-w-[250px] lg:w-1/3 lg:max-w-none // <-- 10. มือถือ: จำกัดขนาด / Desktop: กว้าง 1/3
          "
        >
          <Image
            src={prempic}
            alt="Nattanon Ngamkham"
            className="rounded-full shadow-2xl"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>




    </Animatedback>
  )
}