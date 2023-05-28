import Navbar from '@/components/navbar/navbar'
import './globals.css'

import Footer from '@/components/footer/footer'




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
      <body className={" bg-gradient-to-b from-base-100 from-40% via-gradient1 to-gradient2"}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
