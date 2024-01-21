'use client'
import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RayzorPayButton from '../Button/RayzorPayButton';
import PhonepeButton from '../Button/PhonepeButton';
import { PaymentContext } from '@/store/context';

const PaymentCard = () => {
  const [Name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { setUser } = useContext(PaymentContext);

  useEffect(() => {
    setUser({
      UserName: Name,
      Amount: amount
    });
  }, []); // Include Name and amount in the dependency array

  return (
    <div className='flex justify-center items-center gap-4 mt-8'>

      <Card className="w-[450px] bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <CardHeader className="bg-slate-500  py-4">
          <CardTitle className='text-white text-center'>Payment Gateway</CardTitle>
          <CardDescription className='text-slate-300 text-center'>Make your payment successful</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Username</Label>
                <Input id="name" placeholder="Enter your username" onChange={(e) => { setName(e.target.value) }} />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="framework">Enter The Amount</Label>
                <Input placeholder='$$$' onChange={(e) => { setAmount(e.target.value) }} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-100 py-4 px-6">
          <RayzorPayButton />
          <PhonepeButton />
        </CardFooter>
      </Card>

    </div>
  );
};

export default PaymentCard;
