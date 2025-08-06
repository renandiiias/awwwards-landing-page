import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marketing Estratégico - Clientes Qualificados que Realmente Compram',
  description: 'Pare de pagar por leads que não compram. Marketing Digital + Tráfego Qualificado para negócios que querem crescer de verdade.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}