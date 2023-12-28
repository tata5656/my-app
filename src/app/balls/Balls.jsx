import React from 'react'
import styles from './balls.module.css'
import Buybutton from '@/component/buybutton/Buybutton'


function Balls() {
  return (
    <div className={styles.container}>
       
        <div className={styles.items}>

      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>ფიფქებით</h5>
            <h4 className={styles.coast}>10$</h4>
            </div>
            <Buybutton/>
            </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>სადა , ოქროსფერი</h5>
            <h4 className={styles.coast}>8$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>სადა , წითელი</h5>
            <h4 className={styles.coast}>8$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>ლურჯი , ბჭყვიალა</h5>
            <h4 className={styles.coast}>12$</h4>
            </div>
            <Buybutton/>
        </div>
        
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>ნარინჯისფერი, სადა</h5>
            <h4 className={styles.coast}>8$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>ოქროსფერი ბრჭყვიალა</h5>
            <h4 className={styles.coast}>13$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>თეთრი გამჭვირვალე</h5>
            <h4 className={styles.coast}>12$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      <div className={styles.item}>
         <div className={styles.textbox}>
         <div className={styles.text}>
            <span className={styles.span}>ნაძვისხის სათამაშო</span>
            <h5 className={styles.h5}>ვერცხლისფერი ბრჭყვიალა</h5>
            <h4 className={styles.coast}>13$</h4>
            </div>
            <Buybutton/>
        </div>
      </div>
      </div>
    
  </div>

  )
}

export default Balls