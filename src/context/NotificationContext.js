import react, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react/cjs/react.development'


export const NotificationContext = createContext(
    
    {
        notification: {
            message: '',
            type: '',
            display: false
        },
        setNotification: () => {
            console.log('notification')
        
         }
    }
)