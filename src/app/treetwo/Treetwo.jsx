import React from 'react'
import styles from './treetwo.module.css'
import Buybutton from '@/component/buybutton/Buybutton'
import Button from '@/component/button/Button'


function Treetwo() {
  return (
    <div className={styles.container}>
       
        <div className={styles.items}>

      <div className={styles.item}>
         <div className={styles.textbox}>
          <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>2 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>70$</h4>
            </div>
          <Buybutton/>
        </div>
       
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>2 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>70$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
     
      <div className={styles.item}>
      <div className={styles.textbox}>
      <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}> 1.5 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>60$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>1.8 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>68$</h4>
            </div>
           <Buybutton/>
        </div>
      </div>
     
      <div className={styles.item}>
        <div className={styles.textbox}>
        <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>1.5 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>60$</h4>
            </div>
           <Buybutton/>
        </div>
      </div>
    
      
      <div className={styles.item}>
        <div className={styles.textbox}>
        <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>1 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>40$</h4>
            </div>
           <Buybutton/>
        </div>
       </div>
     
       <div className={styles.item}>
        <div className={styles.textbox}>
        <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>1 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>40$</h4>
            </div>
            <Buybutton/>
        </div>
       </div>
      
       <div className={styles.item}>
        <div className={styles.textbox}>
        <div className={styles.text}>
            <span className={styles.span}>ნაძვის ხე</span>
            <h5 className={styles.h5}>2 მ ულამაზესი ნაძვის ხე</h5>
            <h4 className={styles.coast}>70$</h4>
            </div>
          <Buybutton/>
        </div>
       </div>
      
      </div>
  </div>
  
  )
}

export default Treetwo