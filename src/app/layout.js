import './globals.css'
import LayoutShell from '@/components/LayoutShell'

export const metadata = {
    title: 'My Website',
    description: 'A responsive site using Next.js App Router',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <LayoutShell>{children}</LayoutShell>
        </body>
        </html>
    )
}
