"use client"
import Animatedback from '../components/Animatedbackground'
import Link from 'next/link'
import Image from 'next/image'
import prempic from './components/1000022981.png'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlineChip, HiOutlineUser } from 'react-icons/hi'
import { FiPhone, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'


export default function project() {
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


            <main className="w-full min-h-screen p-6 flex flex-col items-center">

                <h1 className="font-bold text-5xl mb-8">Contact Me</h1>

                <div className="w-full max-w-lg rounded-lg bg-white p-6 text-black shadow-xl">
                    <div className="flex flex-col space-y-4">

                        <a
                            href="tel:+66653969561"
                            className="flex items-center space-x-3 transition hover:text-orange-600"
                        >
                            <FiPhone className="h-5 w-5 text-orange-500" />
                            <span className="font-medium">065-396-9561</span>
                        </a>

                
                        <a
                            href="mailto:Nattanon.nga@student.mahidol.edu"
                            className="flex items-center space-x-3 transition hover:text-orange-600"
                        >
                            <FiMail className="h-5 w-5 text-orange-500" />
                            <span className="font-medium">Nattanon.nga@student.mahidol.edu</span>
                        </a>

                    
                        <a
                            href="https://www.facebook.com/nattanon.ngamkham?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 transition hover:text-orange-600"
                        >
                            <FiFacebook className="h-5 w-5 text-orange-500" />
                            <span className="font-medium">Nattanon Ngamkham</span>
                        </a>

                        <a
                            href="https://instagram.com/pr3merp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 transition hover:text-orange-600"
                        >
                            <FiInstagram className="h-5 w-5 text-orange-500" />
                            <span className="font-medium">pr3merp</span>
                        </a>

                    </div>
                </div>
            </main>
        </Animatedback>
    )
}