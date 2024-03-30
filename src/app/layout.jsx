import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import NavBar from '@/components/navbar';
import Footer from '@/components/navbar/Footer';
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MFikriA || Portofolio',
  description: 'Mfikria Portofolio ',
  openGraph: {
    title: 'Mfikria portofolio',
    description: 'Mfikria Portofolio Page and Blog Page',
  },
}

export default function RootLayout({ children })
{
  const CrispWithNoSSR = dynamic(
    () => import('../components/crisp')
  )

  return (
    <html lang="id">
      <Head>
        <meta property="og:url" content="https://mfikria.vercel.app/" />
        <meta property="og:image" content="https://mfikria.vercel.app/logo.png" />
        <title>MFikriA | Portofolio</title>
      </Head>
      <body className={`${inter.className} bg-dark`}>
        <div id='mfikria'>
        <NavBar />
        <main>
        {children}
        </main>
        <Footer />
        <CrispWithNoSSR />
        <Analytics />
        </div>
      </body>
    </html>
  )
}
