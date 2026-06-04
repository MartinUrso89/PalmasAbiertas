import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Palmas Abiertas | Transporte Corporativo Premium en Buenos Aires',
  description:
    'Servicio de transporte ejecutivo y corporativo para empresas e instituciones en Buenos Aires. Flota Mercedes-Benz, choferes profesionales, puntualidad garantizada.',
  keywords: [
    'transporte corporativo',
    'transporte ejecutivo',
    'traslados empresariales',
    'Buenos Aires',
    'Argentina',
    'Mercedes-Benz',
    'transfer aeropuerto',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/Iso.PNG',
  },
  openGraph: {
    title: 'Palmas Abiertas | Transporte Corporativo Premium',
    description:
      'Servicio de transporte ejecutivo y corporativo para empresas e instituciones en Buenos Aires.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAB40C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
