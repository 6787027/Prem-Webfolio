"use client"
import Animatedback from '../components/Animatedbackground'
import Link from 'next/link'
import Image from 'next/image'
import prempic from './components/1000022981.png'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'


export default function aboutme() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'Home' },
        { href: '/aboutme', label: 'About me' },
        { href: '/project', label: 'Project' },
        { href: '/contact', label: 'Contact Me' },
    ]
    return (
        <Animatedback>
            <nav className="relative w-full bg-gray-800 text-white shadow-md">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div>
                        <Link href="/" className="text-xl font-bold text-orange-400 transition hover:text-orange-300">
                            NattanonWebfolio
                        </Link>
                    </div>

                    <div className="hidden space-x-6 md:flex">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="transition hover:text-gray-300">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
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

            <main className="w-full min-h-screen p-6 md:px-16 lg:px-24">

                <section className="mb-12">
                    <h1 className="font-bold text-5xl mb-4">Get to know me...</h1>
                    <p className="w-full md:w-3/4 lg:w-2/3 text-lg text-white leading-relaxed">
                        I'm Nattanon (Prem), a Computer Science student with a deep-seated passion
                        for analysis. This analytical mindset drives my strong interest in
                        Business Analysis and Data Analytics, where I can leverage my technical
                        skills to solve complex business problems. I am always curious and
                        adaptable, consistently open to new challenges and learning opportunities.
                    </p>
                </section>

                <section>
                    <h1 className="font-bold text-4xl text-center mb-8">Skills</h1>

                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl tracking-wide text-orange-500 font-bold text-center">
                                Soft Skills
                            </h3>
                            <hr className="w-full h-px bg-gray-300 my-4" />

                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Attention to Detail</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Proactive Learning</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Clear Communication</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Self-Awareness</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Time Management</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-4 py-2 rounded-full">Critical Thinking</span>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl tracking-wide text-orange-500 font-bold text-center">
                                Hard Skills
                            </h3>
                            <hr className="w-full h-px bg-gray-300 my-4" />

                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="bg-green-100 text-green-950 font-semibold px-4 py-2 rounded-full">Python</span>
                                <span className="bg-green-100 text-green-950 font-semibold px-4 py-2 rounded-full">Java</span>
                                <span className="bg-green-100 text-green-950 font-semibold px-4 py-2 rounded-full">R</span>
                                <span className="bg-yellow-100 text-yellow-950 font-semibold px-4 py-2 rounded-full">HTML/CSS/JS</span>
                                <span className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full">Next.js</span>
                                <span className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full">Node.js</span>
                                <span className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-full">Tailwind CSS</span>
                                <span className="bg-red-100 text-red-950 font-semibold px-4 py-2 rounded-full">Jira</span>
                                <span className="bg-red-100 text-red-950 font-semibold px-4 py-2 rounded-full">Draw.io</span>
                                <span className="bg-red-100 text-red-950 font-semibold px-4 py-2 rounded-full">Microsoft Office</span>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </Animatedback>)
}

