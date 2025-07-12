import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Nexus Studio - Award-Winning Digital Agency',
  description: 'We craft extraordinary digital experiences that push boundaries and redefine what\'s possible.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
