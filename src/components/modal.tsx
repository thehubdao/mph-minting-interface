import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { mint } from '@/services/MPHContractService'

const Modal = ({ tokenId,showModal, signer }: any) => {

    return (
        <div className="fixed h-screen w-screen top-0 left-0 bg-black/75 z-50 flex justify-center items-center">
            <div className="bg-rg-black h-[503px] w-[361px] relative rounded-2xl">
                <div
                    className="absolute p-6 top-0 right-0 cursor-pointer"
                    onClick={showModal}
                >
                    <Image
                        src="/icons/exit.svg"
                        width={13}
                        height={13}
                        className=""
                        alt="exit-logo"
                    />
                </div>
                <div className="w-full h-[64px] border-b flex justify-center items-center border-gray1">
                    <h2 className="font-poppins text-white text-[15px]">
                        Checkout
                    </h2>
                </div>
                <div className="w-full flex items-center justify-around">
                    <div className="w-[219px] flex flex-col mt-8">
                        <p className="font-poppins text-white text-sm">
                            NFT ·{tokenId}
                            </p>
                        <p className="font-poppins text-white text-sm">
                            Original Audio
                        </p>
                    </div>
                    <div className="w-[110px] flex mt-8">
                        <Image
                            src="/icons/eth-icon.svg"
                            width={13}
                            height={13}
                            className=""
                            alt="eth-logo"
                        />
                        <p className="font-poppins text-white text-sm">
                            0.0069 ETH
                        </p>
                    </div>
                </div>
                <div className="w-full  flex flex-col items-center justify-center my-20">
                    <div className="flex flex-row mt-4">
                    <p className="font-poppins text-white text-[15px] font-bold p-5">
                        You are about to mint your METAPARTYHUB PASS. Are you ready to redefine Web3 parties with us?
                    </p>
                        
                    </div>
                </div>
                
                <div className="flex items-center justify-center mt-7">
                    <button
                        onClick={async () => {
                            showModal()
                            const transactionState = await mint(signer)
                            
                            if (!transactionState)
                                toast(
                                    'Not enough funds, you will need 0.0069 + some gas!!',
                                    {
                                        position: 'top-right',
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: 'light',
                                    }
                                )
                            else
                                toast('NFT minted successfully', {
                                    position: 'top-right',
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'light',
                                })
                        }}
                        className=" flex flex-col text-white bg-rg-black2 rounded-2xl items-center justify-center w-[215px] h-[47px] cursor-pointer"
                    >
                        <p className="font-poppins text-sm">Mint</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
