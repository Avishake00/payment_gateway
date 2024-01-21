'use client'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { SiPhonepe } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { PaymentContext } from '@/store/context';



const PhonepeButton = () => {
  const router=useRouter();
  const {User}=useContext(PaymentContext)

  const makePayment=async(e)=>{
    e.preventDefault();
    const transactionId="Tr-"+uuidv4().toString(36).slice(-6);
    const payload=
      {
        "merchantId":process.env.PHONEPE_MERCHANT_ID,
        "merchantTransactionId": transactionId,
        "merchantUserId": "MUID-"+uuidv4().toString(36).slice(-6),
        "amount": 10000,
        "redirectUrl": `https://localhost:3000/api/status/${transactionId}`,
        "redirectMode": "REDIRECT",
        "callbackUrl": `https://localhost:3000/api/status/${transactionId}`,
        "mobileNumber": "9999999999",
        "paymentInstrument": {
          "type": "PAY_PAGE"
        }
      };

      const data=JSON.stringify(payload);
      console.log(data);
      const dataBase64=Buffer.from(data).toString("base64");
      console.log(dataBase64);
      
      const fullUrl=dataBase64+"/pg/v1/pay"+"099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
      const dataSha256=sha256(fullUrl);
      
      const checksum=dataSha256+"###"+"1";
      
      console.log('checksum:',checksum);
      console.log(process.env.PHONEPAY_PUBLIC_SALT_KEY);

      const UAT_PAY_API_URL= "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

      const response = await axios.post(
        UAT_PAY_API_URL,
        {
          request: dataBase64,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
          },
        }
      );
      
      console.log('Response:', response.data);
      console.log('Headers:', response.headers);
      console.log('Status:', response.status);
      
      // Check for errors
      if (response.status !== 200) {
        console.error('Error:', response.data);
        // Handle the error appropriately
      } else {
        const url = response.data.data.instrumentResponse.redirectInfo.url;
        router.push(url);
      }
      
    
  }
  return (
    <Button className='w-auto flex items-center justify-center border border-yellow-700 bg-[#5f259f] hover:bg-violet-600 p-3 text-white text-sm font-serif font-semibold rounded-lg' onClick={makePayment}>
            <SiPhonepe className='mr-2' /> Pay with PhonePe
   </Button>
  )
}

export default PhonepeButton