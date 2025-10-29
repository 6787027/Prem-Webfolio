"use client"
import Animatedback from '../components/Animatedbackground'
import Link from 'next/link'
import Image from 'next/image'
import prempic from './components/1000022981.png'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlineChip, HiOutlineUser } from 'react-icons/hi'

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

            <main className="w-full min-h-screen p-6  lg:px-24">
                <h1 className="font-bold text-5xl mb-8">My Project</h1>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


                    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-[1.02]">

                        <Link
                            href="https://drive.google.com/drive/folders/1-I-PlCIzTJKzpW6oPeUH2xkeTNVoGArK?usp=drive_link"
                            target="_blank" rel="noopener noreferrer"
                            className="text-xl font-semibold text-orange-700 transition hover:text-orange-900"
                        >
                            Requirements analysis and Database Design for Business (AirAsia)
                        </Link>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineUser /> Roles
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Project Manager</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Analyst</span>
                            </div>
                        </div>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineChip /> Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-xs">Draw.io</span>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm mt-4">
                            This project involved analyzing data relationships within AirAsia's business operations. I used draw.io to design and deliver comprehensive database models, including Chen notation, Crow's Foot notation, and a relational schema.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-[1.02]">
                        <Link
                            href="https://drive.google.com/drive/folders/1w3mANoI6JHfjXfrxJ5C3kL-5Xm1_L45D?usp=drive_link"
                            target="_blank" rel="noopener noreferrer"
                            className="text-xl font-semibold text-orange-700 transition hover:text-orange-900"
                        >
                            Simulated the Software Development Process
                        </Link>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineUser /> Roles
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Project Manager</span>
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Analyst</span>
                            </div>
                        </div>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineChip /> Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-red-100 text-red-950 font-semibold px-3 py-1 rounded-full text-xs">Jira</span>
                                <span className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-xs">Draw.io</span>
                                <span className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-xs">Microsoft Word</span>
                            </div>
                        </div>


                        <p className="text-gray-700 text-sm mt-4">
                            This project involved analyzing system requirements, identifying stakeholders, and mapping data flow. I used Jira to organize the project workflow and delivered comprehensive system models, including Use Case Diagrams, Use Case Narratives, and Data Flow Diagrams.
                        </p>
                    </div>


                    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-[1.02]">
                        <Link
                            href="https://drive.google.com/drive/folders/1i6JObIxORDN7zFi-a2MjMrade156ihwB?usp=drive_link"
                            target="_blank" rel="noopener noreferrer"
                            className="text-xl font-semibold text-orange-700 transition hover:text-orange-900"
                        >
                            Software Analysis Case Studies
                        </Link>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineUser /> Roles
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Analyst</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineChip /> Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-red-100 text-red-950 font-semibold px-3 py-1 rounded-full text-xs">Jira</span>
                                <span className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-xs">Draw.io</span>
                                <span className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full text-xs">Microsoft Word</span>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm mt-4">
                            This project involved self-directed practice in systems analysis. I used online case studies to hone my analytical skills and practiced creating key documentation, including requirements analysis, user stories, acceptance criteria, use case diagrams, and context diagrams.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-[1.02]">
                        <Link
                            href="https://drive.google.com/drive/folders/1OYGrg0U5HfmmcrTX37MpTfV3EsQ6qZs6?usp=drive_link"
                            target="_blank" rel="noopener noreferrer"
                            className="text-xl font-semibold text-orange-700 transition hover:text-orange-900"
                        >
                            Data Analysis and Visualization (Dengue Fever)
                        </Link>

                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineUser /> Roles
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Analyst</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineChip /> Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-950 font-semibold px-3 py-1 rounded-full text-xs">Python (Seaborn)</span>
                                <span className="bg-green-100 text-green-950 font-semibold px-3 py-1 rounded-full text-xs">R (ggplot)</span>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm mt-4">
                            This project involved an initial-phase analysis of a dengue fever patient dataset from the Ministry of Public Health. I used Python and its Seaborn library to perform statistical analysis and data visualization, including applying Kendall’s Tau... (etc)
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-[1.02] lg:col-span-2">
                        <Link
                            href="/"
                            className="text-xl font-semibold text-orange-700 transition hover:text-orange-900"
                        >
                            My Webfolio
                        </Link>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineUser /> Roles
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-950 font-semibold px-3 py-1 rounded-full text-xs">Developer</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
                                <HiOutlineChip /> Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-200 text-black font-semibold px-3 py-1 rounded-full text-xs">Next.js</span>
                                <span className="bg-gray-200 text-black font-semibold px-3 py-1 rounded-full text-xs">React</span>
                                <span className="bg-gray-200 text-black font-semibold px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                                <span className="bg-yellow-100 text-yellow-950 font-semibold px-3 py-1 rounded-full text-xs">JavaScript (JSX)</span>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm mt-4">
                            This project involved developing my personal web portfolio from scratch to showcase my technical skills and project experience. I used Next.js and Tailwind CSS to design and implement a modern, fully responsive user interface... (etc)
                        </p>
                    </div>

                </div>
            </main>
        </Animatedback>
    )
}