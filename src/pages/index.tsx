import Footer from '@/components/footer.component'
import Head from 'next/head'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaPartyHub minting interface</title>
        <meta name="description" content="MetaGameHub DAO is your ultimate destination for all things metaverse. As a one stop shop for investing, building, and experiencing virtual worlds, we offer a wide range of tools and resources to help you get the most out of your metaverse journey. From price estimation tools and development editors to immersive experiences and community-driven decision-making, we have everything you need to take your virtual adventures to the next level. Join the MetaGameHub DAO community today and start exploring the infinite possibilities of the metaverse!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='absolute w-full  z-10'>
        <div className='flex flex-col gap-4 justify-between items-center mx-52 mt-16 sm:flex-row'>
          <a href="https://richkidsclub.io/home" className='sm:self-start'>
            <div className='flex items-center justify-center px-12 py-5'>
              <Image  src="/icons/mgh-logo.svg" width={40} height={36} className='mr-4 mt-4' alt='mgh-logo' />
              <p className='text-4xl translate-y-1 font-title text-white'>metagamehub</p>
            </div>
          </a>
          <div className='flex flex-col gap-2'>
            <div className='text-white border-1 border border-white hover:bg-white hover:text-black px-8 py-2 flex items-center justify-center cursor-pointer w-[340px] h-[62px]'>
              
              <p className='font-poppins text-xl'>Connect Wallet</p>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-black font-work text-white bg-paint">
        <div className='w-full min-h-screen mb-56'>
          <div className='container mx-auto min-h-screen lg:flex lg:flex-col lg:justify-center'>
            <h1 className='font-humane text-center text-white mt-64 text-[200px]'>METAPARTYHUB PARTYPASS</h1>
            <p className='font-inter text-center text-rg-white text-3xl'>Access future MPH events</p>
            <div className='flex flex-col items-center justify-center mt-8'>
              <Image  src="/images/mph-cartel.png" width={912} height={912} alt='cartel'/>
            </div>
            <div className='flex items-center justify-center'>
              <div className=' flex flex-col text-white border-1 border border-white items-center justify-center w-[140px] h-[62px]'>
                <p className='font-inter text-sm'>PRICE</p>
                <p className='font-inter text-lg font-bold'>0,0069 ETH</p>
              </div>
              <div className='flex flex-col text-white border-1 border border-white ml-2 items-center justify-center w-[140px] h-[62px]'>
                <p className='font-inter text-sm'>TOTAL MINTED</p>
                <p className='font-inter text-lg font-bold'>51</p>
              </div>
            </div>
            <div className='flex items-center justify-center mt-5'>
              <div className=' flex flex-col text-black border-1 border border- bg-white items-center justify-center w-[288px] h-[70px]'>
                <p className='font-poppins text-2xl'>Mint now</p>
              </div>
            </div>
            <div className='flex items-center justify-center mt-24'>
                <p className='font-poppins text-3xl text-rg-white'>Mint our very first MPH music NFT, Michael lus’ track F*ck my D*ck feat Ivangbi.</p>
            </div>
            <div className='grid grid-cols-4 mt-4 justify-center'>
              <div className='col-span-1'></div>
              <div className='col-span-2 text-center'>
                <p className='font-poppins text-xl text-rg-white'>The Partypass will give you access to future MPH events, with the next edition scheduled for ETH CC</p>
              </div>
              <div className='col-span-1'></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
