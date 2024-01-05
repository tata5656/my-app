import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import tree from '/public/icons8-christmas-tree-96.png';
import Image from 'next/image';
import Theme from '../theme/Theme';

function Navbar() {
  const types=[
    {
      imagesrc:'/icons8-home-24.png',
      id:1,
      name:'მთავარი გვერდი',
      remote:'/',
      
    },
    {
      imagesrc:'/icons8-present-26.png',
      id:2,
      name:'სახალისო აქტივობა',
      remote:'/funact',
      
    },
    {
      imagesrc:'/icons8-shopping-cart-24.png',
      id:3,
      name:'პროდუქტის დათვალიერება',
      remote:'/products',
    },
    {
      imagesrc:'/icons8-group-48.png',
      id:4,
      name:'გახდი ჩვენი გუნდის წევრი',
      remote:'/joinus/register',
    }
    
  ]
 return( 
   
  <section className={styles.section}>
  <div className={styles.welldrop}>
    
    <Image
     src={tree}
     alt="christmas tree"
     className={styles.imgTree}/>
   <Theme/>

    </div>
    <div className={styles.navbar}>
    
    {types.map((link) => (
      <div className={styles.div}>
        <Link href={link.remote}>
        <Image src={link.imagesrc} width={20} height={20} className={styles.icon}/>
        </Link>
            <Link href={link.remote} className={styles.part}>
              {link.name}
              </Link>
               </div>
    ))}
    </div>
    </section>
 )
}
export default Navbar