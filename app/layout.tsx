import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
