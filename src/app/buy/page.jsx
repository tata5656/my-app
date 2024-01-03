import React from 'react'
import styles from './page.module.css'
import Treetwo from '../treetwo/Treetwo'
import Balls from '../balls/Balls'
import Treelights from '../treelights/Treelights'
import Button from '@/component/button/Button'



 function page() {


  return (
    <main className={styles.container}>
     <div>
   <div className={styles.cards}>
    
    <h3 className={styles.h3}>ნაძვის ხე</h3>
   <Treetwo/>
     </div>
     <div>
     <h3 className={styles.h3}>ნაძვის ხის სათამაშოები</h3>
   <Balls/>
     </div>
     <div>
     <h3 className={styles.h3}>განათება</h3>
   <Treelights/>
  </div>
     <Button title={'შეიძინეთ'} url={''}/>
    </div>
    <br/>
     <div className={styles.textbox}>
      <h1 className={styles.title}>არ დაგავიწყდეს !</h1>
      <br/>
      <span className={styles.test}>თუ მოგწონს ჩვენი გვერდი და გსურთ მეტი შეიტყოთ და ნახოთ ყველა სიახლე აუცილებლად დარეგისტრირდით და გახდით ჩვენი გუნდის წევრი.
     </span>
      <p className={styles.underpara}>გადადი შემდეგ გვერდზე და შეავსე ანკეტა</p>
     <Button title={"რეგისტრაცია"} url={"/joinus/register"}/>
  </div>
      

    </main>     
         

  )
}

export default page