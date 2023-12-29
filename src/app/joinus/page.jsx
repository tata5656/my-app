import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/component/button/Button'


function page() {
  return (
    <div className={styles.container}>
    <div className={styles.formbox}>
        <h1 className={styles.title}>Sign up</h1>
        <form>
            <div className={styles.group}>
            <div className={styles.inputgroup}>
              <Image 
              src={'/icons8-person-30.png'}
               alt='person'
               width={15}
               height={15}
               className={styles.icon}
               />
               <input type='text' placeholder='name'  className={styles.input}/>
            </div>

            <div className={styles.inputgroup}>
              <Image 
              src={'/icons8-mail-24.png'}
               alt='email'
               width={15}
               height={15}
             className={styles.icon}
                />
               <input type='email' placeholder='email' className={styles.input}/>
            </div>

            <div className={styles.inputgroup}>
              <Image 
              src={'/icons8-lock-30.png'}
               alt='lock'
               width={15}
               height={15}
             className={styles.icon}

               />
               <input type='lock' placeholder='password' className={styles.input}/>
            </div>
            <p className={styles.p}>lost password <Link href={''} className={styles.link}>Click here!</Link></p>
            </div>
            <div className={styles.buttonbox}>
                <button className={styles.button}>sign up</button>
                <button className={styles.button}>sign in</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default page