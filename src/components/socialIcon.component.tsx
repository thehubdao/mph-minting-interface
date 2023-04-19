import Image from 'next/image'

interface SocialProps {
  imageUrl: string,
  link: string,
  alt: string
}

export default function SocialIcon({ imageUrl, link, alt }: SocialProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='flex justify-center items-center w-[70px] h-[70px] relative'>
        <Image src={imageUrl} fill={true} alt={alt} sizes="70px" />
      </div>
    </a>
  )
}