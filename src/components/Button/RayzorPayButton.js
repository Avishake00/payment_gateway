'use client'
import { useContext } from 'react';
import { Button } from '../ui/button';
import { SiRazorpay } from 'react-icons/si';
import { PaymentContext } from '@/store/context';
import axios from 'axios';



const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
function RayzorPayButton() {
    const {User}=useContext(PaymentContext);

    const makePayment = async () => {
        console.log(User);

        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        try {
          // Make API call to the serverless API
          const response = await axios.post("http://localhost:3000/api/razorpay", User);
    
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
    
          const data = await response.json();
    
          console.log(data);
    
          var options = {
            key: `${process.env.RAZORPAY_KEY}`,
            name: "Manu Arora Pvt Ltd",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thank you for your test donation",
            image: "https://manuarora.in/logo.png",
            handler: function (response) {
              // Validate payment at server - using webhooks is a better idea.
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
            },
            prefill: {
              name: "Manu Arora",
              email: "manuarorawork@gmail.com",
              contact: "9999999999",
            },
          };
    
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } catch (error) {
          console.error(error);
          alert("Error making payment. Please try again later.");
        }
    };
    

  return (
    <div className="App ">
      <header className="App-header flex items-center">
     
        <Button
        onClick={makePayment}
        className=' flex w-48 items-center justify-center border border-yellow-700 bg-[#3395ff] p-3 text-white text-sm font-serif font-semibold rounded-lg'
        > 
        <SiRazorpay className='mr-2'/>
          Pay with RazorPay
        </Button>
      </header>
    </div>
  );
}

export default RayzorPayButton;