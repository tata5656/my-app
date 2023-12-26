import React from 'react'
import styles from './page.module.css'

function layout({children}) {
  return (
    <div>
         <h1 className={styles.funact}>სახალისო აქტივობა</h1>
        {children}
    </div>
   
  )
}

export default layout