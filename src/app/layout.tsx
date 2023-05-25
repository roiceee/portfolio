import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "John Roice Aldeza",
  description: "John Roice Aldeza's Dev Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
