'use client'
import { createContext, useState } from 'react';

export const PaymentContext = createContext();

export  function PaymentProvider({children}) {
    const [User, setUser] = useState({
        UserName:"",
        Amount:""
    });
    return(
        <PaymentContext.Provider value={{User,setUser}}>
            {children}
        </PaymentContext.Provider>
    )
    
}