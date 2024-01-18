import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import NavBar from '@/components/navbar';
import Footer from '@/components/navbar/Footer';
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MfikriA | Portofolio',
  description: 'MfikriA | Portofolio',
}

export default function RootLayout({ children })
{
  const CrispWithNoSSR = dynamic(
    () => import('../components/crisp')
  )

  return (
    <html lang="id">
      <Head>
        <meta name="robots" content="noarchive, noimageindex" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#302e2e" />
        <meta name="color-scheme" content="black" />
        <meta name="description" content="Muhammad Fikri Ardiyansah Portfolio Dan Blog Pribadi" />
        <meta itemprop="name" content="mfikria Official website" />
        <meta name="keywords" content="mfikria, Portofolio mfikria, website mfikria, mfikria.netlify.app" />
        <meta property="og:site_name" content="mfikria Portofolio" />
        <meta property="og:url" content="https://mfikria.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Muhammad Fikri Ardiyansah Portofolio" />
        <meta property="og:image" content="https://mfikria.vercel.app/logo.png" />
        <meta property="al:ios:app_name" content="mfikria | Portofolio" />
        <meta property="al:android:app_name" content="mfikria | Portofolio" />
        <meta itemprop="name" content="Fikria | Portfolio" />
        <meta itemprop="description" content="Muhammad Fikri Ardiyansah Portfolio" />
        <title>MFikriA | Portofolio</title>
      </Head>
      <body className={`${inter.className} bg-dark`}>
        <NavBar />
        {children}
        <Footer />
        <CrispWithNoSSR />
      </body>
    </html>
  )
}
