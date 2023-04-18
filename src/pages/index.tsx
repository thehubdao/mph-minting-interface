import React from 'react';
import dynamic from 'next/dynamic';

const Index = dynamic(()=>import('@/components/index.component'))



export default function Home() {
  return <Index/>
}
