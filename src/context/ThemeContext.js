'use client';

import { createContext ,useState } from "react";

export const ThemeContext =createContext();
export const ThemeProvider = ({children}) =>{
    const [theme , setTheme] = useState('light');

    const change =()=>{
        if(theme==='light'){
        setTheme('dark')
     }
     else{
        setTheme('light')
     }
    };

    return(
       < ThemeContext.Provider value={{theme , change}}>
          <div className={`theme ${theme}`}>{children}</div>
       </ThemeContext.Provider>
    )
}