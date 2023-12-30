
'use client';
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Crud() {
 const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(1);
 

 const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body: desc,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={styles.container}>
    <div className={styles.formbox}>
        <h1 className={styles.title}>Sign up</h1>
        <div>
            <div className={styles.group}>
            <div className={styles.inputgroup}>
              <Image 
              src={'/icons8-person-30.png'}
               alt='person'
               width={15}
               height={15}
               className={styles.icon}
               />
               <input
                type='text'
                 placeholder='name' 
                  className={styles.input}
                  onChange={(e) => setTitle(e.target.value)}
                  />
            </div>

            <div className={styles.inputgroup}>
            <Image 
              src={'/icons8-person-30.png'}
               alt='person'
               width={15}
               height={15}
               className={styles.icon}
               />
               <input 
               type='text'
                placeholder='last name'
                 className={styles.input}
                 onChange={(e) => setDesc(e.target.value)}
                 />
            </div>

            <div className={styles.inputgroup}>
            <Image 
              src={'/icons8-mail-24.png'}
               alt='email'
               width={15}
               height={15}
             className={styles.icon}
                />
               <input 
               type='email'
                placeholder='email'
                 className={styles.input}
                 onChange={() => setUserId(1)}
                 />
            </div>
            <p className={styles.p}>lost password <Link href={''} className={styles.link}>Click here!</Link></p>
            </div>
            <div className={styles.buttonbox}  >
                <button className={styles.button} onClick={handleSubmit}>გაგზავნა</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Crud

