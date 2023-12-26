import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function page() {
  return (
    <div className={styles.gallery}>
   <div className={styles.content}>
    <Image
     src={'https://images.pexels.com/photos/5686476/pexels-photo-5686476.jpeg?auto=compress&cs=tinysrgb&w=400'}
     alt='treeone'
     width={100}
     height={100}
     />
     <p>ნაძვის ხე </p>
     <h5>5$</h5>
     <div className={styles.socialNetworks}>
        <Image
          src="/icons8-mail-24.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="mail"
        />
        <Image
          src="/icons8-messenger-24.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="messenger"
        />
        <Image
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="x"
        />
        <Image
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="youtube"
        />
     </div>
     </div>
     </div>
  )
}
export default page