import './globals.css'
import LayoutShell from '@/components/LayoutShell'

export const metadata = {
    title: 'Ez Grow Infra',
    description: 'Specialize in High‑End Standard Levels',
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
