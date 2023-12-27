import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/component/button/Button'


function page() {
  return (
  
    <main className={styles.cardcontainer}>
    <div className={styles.items}>
      
    <Link href={"/funact/santaClaus"} className={styles.item}>
    <span className={styles.title}> სანტა კლაუსის გამოძახება</span>
         <h6 className={styles.test}>გაახალისე საყვარელი ადამიანები</h6>
         <h6 className={styles.test}>ფასი:40$</h6>
      </Link>
         
      <Link href={"/funact/fairy-tail"} className={styles.item}>
        <span className={styles.title}>ზღაპრის გმირების გამოძახება</span>
        <h6 className={styles.test}>გაახალისე საყვარელი ადამიანები</h6>
         <h6 className={styles.test}>ფასი:50$</h6>
      </Link>
      <Link href={"/funact/present"} className={styles.item}>
        <span className={styles.title}>გაუკეთე საჩუქარი..</span>
        <h6 className={styles.test}>გაახალისე საყვარელი ადამიანები</h6>
         <h6 className={styles.test}>ფასი:..$</h6>
      </Link>
      
    </div>
    <div className={styles.undertext}>
      <h1 className={styles.undertitle}>აირჩიე!!!</h1>
      <br/>
      <span className={styles.undertext}>შეგიძლია აირჩიო ამ ბარათებიდან ერთერთი რათა ახალი წელი მეტად ზღაპრული და 
      მომაჯადოებელი იყოს შენთვის და შენს გარშემო მყოფი ადამიანებისთვის.</span>
      <p className={styles.underpara}>თუ არ გსურს შეგიძლია შემდეგ გვერდზე გადახვიდე</p>
     <Button title={"next page"} url={"/buy"}/>
    </div>
    </main>
  
  )
}

export default page