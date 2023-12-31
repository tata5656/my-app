'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Crud from '../page';
import Delete from '../delete/page';

function Edit() {
  const [name, setName] = useState('');
  const [email , setEmail] = useState('');
  const [id , setId] =useState ('');
  const [data , setData] = useState({});
  const [users, setUsers] = useState();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((res)=>res.json())
    .then((json)=>{
      setData(json)
      setName(json.name);
      setEmail(json.email);
      setId(json.id);
    });
  },[])



  const edit =()=>{
    fetch("https://jsonplaceholder.typicode.com/users/3",{
      method: 'PUT',
      body:JSON.stringify({
        id:3,
        name:name,
        email:email,
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      }
    })
    .then((res)=>res.json())
    .then((json)=>console.log(json));
  }
  
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
                 placeholder={data.name}
                  className={styles.input}
                  onChange={(e) => setName(e.target.value)}
                  />
            </div>

            <div className={styles.inputgroup}>
            <Image 
              src={'/icons8-mail-24.png'}
               alt='person'
               width={15}
               height={15}
               className={styles.icon}
               />
               <input 
               type='text'
               placeholder={data.email}
                 className={styles.input}
                 onChange={(e) => setEmail(e.target.value)}
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
                placeholder={data.id}
                 className={styles.input}
                 onChange={(e) => setId(e.target.value)}
                 />
            </div>
            </div>
  <div className={styles.buttonbox}  >
               <div>
               <button className={styles.button} onClick={edit}>edit</button>
               <Delete/>
              
    </div>
               
 </div>
  </div>
    </div>
    </div>
  )
}

export default Edit