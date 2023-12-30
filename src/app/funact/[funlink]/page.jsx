import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'


function page() {
  return (
            <div className={styles.div}>
      <h1 className={styles.title}>გვიამბეთ მცირედი რამ</h1>
      <h3 className={styles.titletwo}>იმ ადამიანის შესახებ,რომლის გახარებაც გსურთ</h3>
      <div className={styles.content}>
       
        <form className={styles.form}>
          <input type="text" placeholder="სახელი და გვარი" className={styles.input} />
          <input type="text" placeholder="საყვარელი ფერი" className={styles.input} />
          <input type="text" placeholder="საყვარელი ნივთი" className={styles.input} />
         
          <textarea
            className={styles.textArea}
            placeholder="მცირე რამ ამ ადამიანის გემოვნებაზე"
            cols="30"
            rows="10"
          ></textarea>
         <div className={styles.buttoncontainer}> 
          <Button title={"back"} url={'/funact'} />
         <Button title={'send'} url={''} />
        
        </div>
        </form>
      </div>
    </div>
  )
}

export default page