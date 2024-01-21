
const Razorpay = require("razorpay");
const shortid = require("shortid");
import { NextResponse } from "next/server";

export  async function POST(request) {

  
 
  try {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: `${process.env.RAZORPAY_KEY}`,
      key_secret:`${ process.env.RAZORPAY_SECRET}`,
    });

    const reqBody=await request.formData();
    const {UserName,Amount}=reqBody;
    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = Amount;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

      const response = await razorpay.orders.create(options);
     return  NextResponse.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
     return  NextResponse.status(400).json(err);
    }
  
}
