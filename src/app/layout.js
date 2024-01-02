import { Outfit } from 'next/font/google'
import './globals.css'
import { CarritoProvider } from '../../context/carritoContext'
import Header from '../../components/header'
import Footer from '../../components/footer'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'GuitarLA - Inicio',
  description: 'Blog de Guitarras, Tienda, Cursos y mas',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={outfit.className}>
      <body>

        <Header />
        <CarritoProvider>
          {children}
        </CarritoProvider>
        <Footer />

      </body>
    </html>
  )
}
