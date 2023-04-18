import React, { useState } from 'react';
import Image from "next/image";

const Modal = ({ showModal }: any) => {
    const [count, setCount] = useState(0);

    return(
      <div className='fixed h-screen w-screen top-0 left-0 bg-black/75 z-50 flex justify-center items-center'>
        <div className='bg-rg-black h-[503px] w-[361px] relative rounded-2xl'>
          <div className='absolute p-6 top-0 right-0 cursor-pointer' onClick={showModal}>
            <Image  src="/icons/exit.svg" width={13} height={13} className='' alt='exit-logo' />
          </div>
          <div className='w-full h-[64px] border-b flex justify-center items-center border-gray1'>
            <h2 className='font-poppins text-gray1 text-[15px]'>Checkout</h2>
          </div>
          <div className='w-full flex items-center justify-around'>
            <div className='w-[219px] flex flex-col mt-8'>
              <p className='font-poppins text-gray1 text-sm'>NFT ·3256616848461351351</p>
              <p className='font-poppins text-gray1 text-sm'>Original Audio</p>
            </div>
            <div className='w-[90px] flex mt-8'>
            <Image  src="/icons/eth-icon.svg" width={13} height={13} className='' alt='eth-logo' />
              <p className='font-poppins text-gray1 text-sm'>13.45 ETH</p>
            </div>
          </div>
          <div className='w-full  flex flex-col items-center justify-center mt-28'>
            <p className='font-poppins text-gray1 text-[15px] font-bold'>Quantity</p>
            <div className="flex flex-row mt-4">
            <button onClick={() => {count > 0 ? setCount(count - 1) : setCount(0)}}>
                <Image  src="/icons/left.svg" width={7} height={13} className='cursor-pointer' alt='eth-logo' />
            </button>
                <p className='font-poppins text-gray1 text-[15px] font-bold mx-5'>{count}</p>
                <button onClick={() => setCount(count + 1)}>
                <Image  src="/icons/right.svg" width={7} height={13} className='cursor-pointer' alt='eth-logo' />
                </button>
            </div>
          </div>
          <div className='w-full  flex flex-col items-center justify-center mt-14'>
            <p className='font-poppins text-gray1 text-[15px] font-bold'>Lorem ipsum Dolor sit amet</p>
          </div>
          <div className='flex items-center justify-center mt-7'>
              <button className=' flex flex-col text-gray1 bg-rg-black2 rounded-2xl items-center justify-center w-[215px] h-[47px] cursor-pointer' >
                <p className='font-poppins text-sm'>Mint</p>
              </button>
          </div>
        </div>
      </div>
    )
  }

  export default Modal