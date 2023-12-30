import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import tree from '/public/icons8-christmas-tree-96.png';
import Image from 'next/image';
import Theme from '../theme/Theme';

function Navbar() {
  const types=[
    {
      id:1,
      name:'მთავარი გვერდი',
      url:'/'
      
    },
    {
      id:2,
      name:'სახალისო აქტივობა',
      url:'/funact',
      
    },
    {
      id:3,
      name:'პროდუქტის შეძენა',
      url:'/buy'
    },
    {
      id:4,
      name:'გახდი ჩვენი გუნდის წევრი',
      url:'/joinus'
    }
    
  ]
 return( 
   
  <section className={styles.section}>
  <div className={styles.welldrop}>
  
    <Image src={tree} alt="christmas tree" className={styles.imgTree}/>
   <Theme/>
    </div>
    <div className={styles.navbar}>
    
    {types.map((link) => (
            <Link href={link.url} className={styles.part}>{link.name}</Link>
          ))}
    </div>
    </section>
 )
}
export default Navbar