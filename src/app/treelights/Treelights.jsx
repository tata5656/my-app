import React from 'react'
import styles from './treelights.module.css'
import Buybutton from '@/component/buybutton/Buybutton'


function Treelights() {
  return (
    <div className={styles.container}>
       
    <div className={styles.items}>

  <div className={styles.item}>
     <div className={styles.textbox}>
     <div className={styles.text}>
        <span className={styles.span}>ნაძვის ხის განათება</span>
        <h5 className={styles.h5}>უბრალო , ფერადფერადი</h5>
        <h4 className={styles.coast}>10$</h4>
        </div>
            <Buybutton/>
    </div>
    
  </div>
  <div className={styles.item}>
     <div className={styles.textbox}>
     <div className={styles.text}>
        <span className={styles.span}>განათება</span>
        <h5 className={styles.h5}>ვარსკვლავი . ბრწყვიალა</h5>
        <h4 className={styles.coast}>5$</h4>
        </div>
        <Buybutton/>
    </div>
  </div>
 
  <div className={styles.item}>
  <div className={styles.textbox}>
  <div className={styles.text}>
        <span className={styles.span}>ნაძვის ხის განათება</span>
        <h5 className={styles.h5}>ფიფქი</h5>
        <h4 className={styles.coast}>10$</h4>
        </div>
        <Buybutton/>
    </div>
  </div>
  
  <div className={styles.item}>
     <div className={styles.textbox}>
     <div className={styles.text}>
        <span className={styles.span}>ნაძვის ხის განათება</span>
        <h5 className={styles.h5}>სახლისთვის</h5>
        <h4 className={styles.coast}>68$</h4>
        </div>
        <Buybutton/>
    </div>
  </div>
 
  
  </div>

</div>

)
}
  


export default Treelights