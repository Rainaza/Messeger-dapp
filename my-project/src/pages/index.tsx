import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
      <title>Airbnb</title>
     </Head>
     <main>
      <Header/>
      <Banner/>
     </main>
    </>
  )
}
