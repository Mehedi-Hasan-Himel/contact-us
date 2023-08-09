import React from 'react';
import Logo from "/images/logo.png"
import styles from "./Navbar.module.css"


const Navbar = () => {
   return (
     <nav className={`${styles.navigation} container`}>
       <div className="logo">
         <img src={Logo} alt="do some coding logo" />
       </div>

       <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
       </ul>
     </nav>
   );
};

export default Navbar;