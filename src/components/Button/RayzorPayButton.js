'use client'
import React from 'react'
import { Button } from '../ui/button'
import { SiRazorpay } from 'react-icons/si'

const RayzorPayButton = () => {

    const handleOnclick=()=>{

    }
  return (

       <Button className='w-auto flex items-center justify-center border border-yellow-700 bg-[#3395ff] hover:bg-blue-400 p-3 text-white text-sm font-serif font-semibold rounded-lg' onClick={handleOnclick}>
       <SiRazorpay className='mr-2' /> Pay with Razorpay
     </Button>
  )
}

export default RayzorPayButton