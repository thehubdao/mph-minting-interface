import Link from 'next/link'
import SocialIcon from './socialIcon.component'

export default function Footer() {
  return (
    <>
      {/* footer */}
      <div className='flex flex-col xl:flex-row justify-between items-center'>
        {/* footer contact */}
        <div className='xl:w-2/4 flex flex-col items-center'>
          <p className='text-gray-normal text-lg text-center font-semibold mb-6 mx-8'>
          Business & Partnership Proposals
          </p>
          <div className='flex justify-around xl:w-[57%] pt-4'>
            <SocialIcon imageUrl='/icons/medium.png' link='https://metagamehub.medium.com/' alt='medium link' />
            <SocialIcon imageUrl='/icons/instagram.png' link='https://www.instagram.com/metagamehub_dao/' alt='instagram link' />
            <SocialIcon imageUrl='/icons/linkedin.png' link='https://www.linkedin.com/company/metagamehub-dao/' alt='linkedin link' />
            <SocialIcon imageUrl='/icons/twitter.png' link='https://twitter.com/MGH_DAO' alt='twitter link' />
            <SocialIcon imageUrl='/icons/telegram.png' link='https://t.me/metagamehub_dao' alt='telegram link' />
            <SocialIcon imageUrl='/icons/discord.png' link='https://discord.com/invite/8WJVMDXZwH' alt='discord link' />
            <SocialIcon imageUrl='/icons/ether.png' link='https://etherscan.io/token/0x8765b1a0eb57ca49be7eacd35b24a574d0203656' alt='etherscan link' />
            <SocialIcon imageUrl='/icons/email.png' link='mailto:info@thedac.info' alt='MetaGameHub DAO email' />
          </div>
        </div>
        {/* footer links */}
        <div className='w-5/6 xl:w-2/4 flex justify-around xl:items-center pt-20 xl:px-40 xl:pt-0 text-gray-normal'>
          <div>
            <Link href='/'>
              <p className='text-xl block'>Home</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl'>Treasury</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl'>Tools</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl'>Token</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl'>Contributors</p>
            </Link>
            <Link href='/soon'>
              <p className='text-xl'>Contribute</p>
            </Link>
          </div>
          <div className='text-right xl:text-left'>
            <a href="https://app.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>MGH dApp</a>
            <a href="https://discord.com/invite/8WJVMDXZwH" target='_blank' rel='noreferrer' className='text-xl block'>Community</a>
            <a href="https://snapshot.org/#/metagamehub.eth" target='_blank' rel='noreferrer' className='text-xl block'>Voting</a>
            <a href="https://docs.metagamehub.io/" target='_blank' rel='noreferrer' className='text-xl block'>Learn more</a>
            <Link href='/soon'>
              <p className='text-xl block'>FAQ</p>
            </Link>
            <a href="https://github.com/metagamehub" target='_blank' rel='noreferrer' className='text-xl block'>GitHub</a>
          </div>
        </div>
      </div>
      {/* terms */}
      <div className='pt-24 pb-12'>
        <p className='text-center text-[15px] text-gray-normal'>
          <Link href='/soon'>
            <span>Terms of Use </span>
          </Link>
          |
          <Link href='/privacity'>
            <span> Privacy Policy</span>
          </Link>
        </p>
      </div>
    </>
  )
}