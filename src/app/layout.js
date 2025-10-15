import './globals.css'
import LayoutShell from '@/components/LayoutShell'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: 'Ez Grow Infra',
    description: 'Specialize in High‑End Standard Levels',
    icons: {
        icon: './logo.png', // Path to your favicon in the public/ directory
        apple: '/apple-icon.png', // Path to your Apple Touch Icon
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <LayoutShell>{children}</LayoutShell>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
        />
        </body>
        </html>
    )
}
