import React from 'react'
import styles from './page.module.css'
import Treetwo from '../treetwo/Treetwo'
import Balls from '../balls/Balls'
import Treelights from '../treelights/Treelights'
import Button from '@/component/button/Button'




function page() {
  return (
    <section>
   <div>
    
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
    
     <div className={styles.textbox}>
      <div className={styles.text}>
       <h1></h1>
      </div>
    <Button url={'/joinus'} title={'რეგისტრაცია'}/>
      
</div>
      

    </section>     
         

  )
}

export default page