"use client";

import React, { useState } from 'react'
import styles from './buybutton.module.css'
import buy from '/public/icons8-shopping-cart-48.png'
import Image from 'next/image'

function Buybutton() {
   const [light, setlight]=useState('light')

   const BuyButton=()=>{
    if( light === 'light'){
      setlight('dark');
           } else {
             setlight('light')
           }
   }

  return (
    <div
    className={styles.container}
    onClick={BuyButton}
     
  
    >
        <Image src={buy} alt='shopping cart' className={styles.shopping} style={light=== 'light'?{backgroundColor: 'white', border: '3px solid white'}:{backgroundColor: 'red', border: '3px solid red'}}/>
    </div>
  )
}

export default Buybutton