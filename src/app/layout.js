import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marketing Estratégico - Pare de Pagar por Leads que Não Compram',
  description: 'Marketing Digital Estratégico + Tráfego Qualificado para Negócios que Querem Crescer de Verdade. Atraia clientes que valorizam qualidade.',
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
