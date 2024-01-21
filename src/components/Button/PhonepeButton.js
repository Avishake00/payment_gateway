'use client'
import React from 'react'
import { Button } from '../ui/button'
import { SiPhonepe } from 'react-icons/si'

const PhonepeButton = () => {
  return (
    <Button className='w-auto flex items-center justify-center border border-yellow-700 bg-[#5f259f] hover:bg-violet-600 p-3 text-white text-sm font-serif font-semibold rounded-lg'>
            <SiPhonepe className='mr-2' /> Pay with PhonePe
   </Button>
  )
}

export default PhonepeButton