import React from 'react';
import { FaPaypal, FaCreditCard } from 'react-icons/fa';
import { SiPhonepe,SiRazorpay } from "react-icons/si";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RayzorPayButton from '../Button/RayzorPayButton';
import PhonepeButton from '../Button/PhonepeButton';

const PaymentCard = () => {
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
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="framework">Enter The Amont</Label>
                <Input placeholder='$$$'/>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-100 py-4 px-6">
         <RayzorPayButton/>
          <PhonepeButton/>
        </CardFooter>
      </Card>

    </div>
  );
};

export default PaymentCard;
