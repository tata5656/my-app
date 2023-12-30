import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
   <section className={styles.section}>
    <div className={styles.coloritem}>
      
    </div>
    <div className={styles.item}>
    <div className={styles.textbox}>
      <div className={styles.text}>
      <h1>მოიწონეთ ჩვენი გვერდი</h1>
      </div>
      <div className={styles.text}>
      <h1>შეგიშლიათ გამოიყენოთ</h1>
      <div className={styles.socialnetworks}>
        <Link href='https://www.facebook.com/'>
        <Image
         src='/1.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='facebook'
          />
          </Link>
          <Link href='https://www.instagram.com/'>
        <Image
         src='/2.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='instagram
          '/>
          </Link>
          <Link href='https:/www.twitter.com/'>
        <Image
         src='/3.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='x'/>
          </Link>
         <Link href='https://www.youtube.com/'>
        <Image
         src='/4.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='youtube'
         />
        </Link>
       
        </div>
      </div>
    </div>
    </div>
    
    </section>
 )
}

export default Footer