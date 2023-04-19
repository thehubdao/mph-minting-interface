import Image from 'next/image'

interface SocialProps {
  imageUrl: string,
  link: string,
  alt: string
}

export default function SocialIcon({ imageUrl, link, alt }: SocialProps) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='flex justify-center items-center w-[78px] h-[68px] relative'>
        <Image src={imageUrl} fill={true} alt={alt} sizes="78px" />
      </div>
    </a>
  )
}