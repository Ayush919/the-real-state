'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutShell({ children }) {
    const pathname = usePathname()

    const isAdminRoute = pathname.startsWith('/admin')

    return (
        <>
            {!isAdminRoute && <Header />}
            <main className="bg-white text-black min-h-screen">{children}</main>
            {!isAdminRoute && <Footer />}
        </>
    )
}
