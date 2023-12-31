"use client"
import Link from 'next/link'
import { React, useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'



const navLinks = [
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Projects",
        link: "#projects"
    },
    {
        title: "Contact",
        link: "#contact"
    }
]


const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href={"/"} className="text-3xl md:text-5xl text-white font-semibold">RDD</Link>

                <div className='mobile-menu block md:hidden'>
                    {
                        navBarOpen ? (
                            <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((page, index) => (
                            <li key={index}>
                                <NavLink href={page.link} title={page.title} />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {navBarOpen ? <MenuOverlay links={navLinks}></MenuOverlay> : null}

        </nav>
    )
}

export default Navbar