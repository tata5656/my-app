import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
   
<section className={styles.section}>
    <div className={styles.items}>  შეფასება</div>
    <div className={styles.items}>მისამართი</div>
    <div className={styles.items}>ტელ. ნომერი</div>
    </section>
 )
}

export default Footer