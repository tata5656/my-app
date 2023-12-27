import React from 'react'
import styles from './page.module.css'
import Tree from '@/component/tree/Tree'
import Balls from '@/component/balls/Balls'


function page() {
  return (
    <section>
   <div>
    
    <h3 className={styles.h3}>ნაძვის ხე</h3>
     <Tree/>
     </div>
     <div>
   
    <h3 className={styles.h3}>ნაძვის ხე</h3>
     <Tree/>
     </div>
     </section>
     
      

      

         
         

  )
}

export default page