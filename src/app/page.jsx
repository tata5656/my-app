import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import christmas from '/public/santa1234.jpg'




function Page() {
  return (
    <section className={styles.section}>
    <div className={styles.item}>
      <h1 className={styles.title}>
       ახალ წელს ყოველთვის ერთად
      </h1>
      <p className={styles.desc}>
      ახალი წლის ტრადიცია საქართველოში მრავალფეროვანია და ქვეყნის ყოველი კუთხე განსხვავებულად
       აღნიშნავს მას. ადგილობრივები საახალწლო სამზადისს ორი ან ერთი თვით ადრე იწყებენ, რომ ახალი წლის ღამე 
       ჯადოსნურად აღნიშნონ. და, თუ თქვენ ჯერ ისევ არ იცით სად გაატაროთ ახალი წელი ზღაპრულად, გაეცანით
        ჩვენს სტატიას, სადაც ბევრ სასარგებლო ინფორმაციას მიიღებთ.
</p>

<h1 className={styles.h1}>ამის გამო დაარსდა ჩვენი გვერდი</h1>
    </div>
    <div className={styles.item}>
     <Image 
     src={christmas}
      alt='christmas'
     className={styles.jpg}
     width={500}
     height={200}
     />
    </div>
    
   
  </section>
  )
}

export default Page
