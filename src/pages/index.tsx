import React from 'react'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Index = dynamic(() => import('@/components/index.component'))

export default function Home() {
    return (
        <>
            <ToastContainer />
            <Index />
        </>
    )
}
