import Footer from '@/components/footer.component'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaPartyHub minting interface</title>
        <meta name="description" content="MetaGameHub DAO is your ultimate destination for all things metaverse. As a one stop shop for investing, building, and experiencing virtual worlds, we offer a wide range of tools and resources to help you get the most out of your metaverse journey. From price estimation tools and development editors to immersive experiences and community-driven decision-making, we have everything you need to take your virtual adventures to the next level. Join the MetaGameHub DAO community today and start exploring the infinite possibilities of the metaverse!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black font-work text-white">
        <div className='min-h-screen'>
          <p className='font-humane'>MPH minting interface</p>
        </div>
        <Footer />
      </main>
    </>
  )
}
