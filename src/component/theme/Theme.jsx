"use client";

import React, { useContext, useState } from "react";
import styles from "./theme.module.css";
import { ThemeContext } from "@/context/ThemeContext";


function Theme() {
    const {theme, change} = useContext(ThemeContext);

  
  return (
    <div className={styles.container} 
    onClick={change}
     >
      <div className={styles.webpage}
      style={theme==='light' ? {left: '2px'}:{right:'2px'}}
      >
        Merry Christmas
        </div>  
    </div>
  );
}

export default Theme;