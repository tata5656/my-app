import React from 'react'
import styles from './buybutton.module.css'
import buy from '/public/icons8-shopping-cart-48.png'
import Image from 'next/image'

function Buybutton() {
  return (
    <div>
        <Image src={buy} alt='shopping cart' className={styles.shopping}/>
    </div>
  )
}

export default Buybutton