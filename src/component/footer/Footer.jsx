import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import like from '/public/icons8-like-24.png'
import unlike from '/public/icons8-unlike-24.png'
import love from '/public/icons8-love-26.png'


function Footer() {
  return (
    <div className={styles.container}>
    
      <span className={styles.span}>შეგიძლიათ გამოიყენოთ</span>
      <div className={styles.socialNetworks}>
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
       {/*gagaga*/}
      </div>
    </div>
  );
}

export default Footer;