import React from 'react'
import styles from './page.module.css'
import Tree from '@/component/tree/Tree'



function layout({children}) {
  return (
    <div>
          <h1 className={styles.funact}>აირჩიე შენთვის სასურველი ნებისმიერი პროდუქტი</h1>
        {children}
    </div>
   
  )
}

export default layout