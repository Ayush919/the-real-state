'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from "next/image"
import logo from "../../public/logo.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Listing', path: '/listing' },
        { label: 'Contact', path: '/contact' },
    ]

    const linkClass = (path) =>
        pathname === path
            ? 'text-yellow-300 border-b-2 border-yellow-300 pb-1' // Active link
            : 'hover:text-yellow-200'

    return (
        <nav className="w-full bg-[#5b8b8b] text-white fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-white text-2xl font-bold tracking-wide flex items-center gap-2 font-[Prata]">
                    <Image
                        src={logo} // Use actual image path from /public
                        alt="Contact"
                        // fill
                        className="object-cover object-center"
                        width={70}
                        height={70}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-semibold text-sm font-[Prata]">
                    {navItems.map(({ label, path }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`${linkClass(path)} transition-colors`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none text-2xl"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col px-6 py-4 bg-[#4b7575] space-y-4 text-sm font-semibold font-[Prata]">
                    {navItems.map(({ label, path }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`${linkClass(path)} block`}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Header
