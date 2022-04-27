import Link from "next/link"

import styles from "../styles/layout.module.css"
import { useState } from "react"






const Navbar =()=>{
  
const [menu,setMenu]=useState(false)


const ActiveMenu=()=>{
   setMenu(!menu)
 

} 


    return (
        <nav className={!menu ? styles.nav : styles.nav_active + " "+ styles.nav}>
         <a onClick={ActiveMenu}> 

         <svg 
            className={!menu ? styles.arrow : styles.arrow_close +" "+ styles.arrow}
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path 
            d="M0,0h24v24H0V0z" fill="none"/><path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z 
            M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"/>
         </svg>

         <svg 
            className={!menu ? styles.icon_menu : styles.icon_menu_close +" "+ styles.icon_menu_close}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" 
             width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
         </svg>


          </a>  
       <ul>

         <Link href="/">
            <a>
            <svg 
            className={styles.home}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" 
            width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path 
            d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            </svg>
               
            </a>
         </Link>

         <Link href="/dashboard">
            <a>
            <svg
            className={styles.icon_dash}
            xmlns="http://www.w3.org/2000/svg" 
            enableBackground="new 0 0 24 24" height="24px" 
            viewBox="0 0 24 24" width="24px" fill="#000000">
               <g><rect fill="none" height="24" width="24"/></g><g><g>
                  <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" 
                  fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/>
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="7"/>
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="11"/>
                  <rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g>
                  </svg> 
            </a>
         </Link>

         <Link href="/ticketView">
            <a>
            <svg 
            className={styles.add}
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" 
            width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
               
            </a>
         </Link>

       </ul>
</nav>
    )
}
export default Navbar