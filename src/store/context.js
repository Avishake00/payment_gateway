'use client'
import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export  function PaymentProvider({children}) {
    const [UserName, setUserName] = useState("");
    const [PayMethod, setPayMethod] = useState("");
    return(
        <PaymentContext.Provider value={{}}>
            {children}
        </PaymentContext.Provider>
    )
    
}