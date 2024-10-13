import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
import { IoIosMenu } from "react-icons/io";


const Header = () => {

  const [menu, setMenu] = useState(false);

  const handleOnClick = () => {
    let windowWidth = window.screen.width;
    if (windowWidth < 767) {
      setMenu((preValue) => !preValue);
    }
  }

 
  

  return (
    <nav>
        <div className='logo'>
        <h1><Link to={"/"}>TechStar.</Link></h1>
        <IoIosMenu  id='menu' onClick={handleOnClick}/>
        </div>
        <main className={menu ? "open" : null}>
            <HashLink to={"/#home"} onClick={handleOnClick}>Home</HashLink>
            <Link to={"/contact"} onClick={handleOnClick}>Contact</Link>
            <HashLink to={"/#aboutus"} onClick={handleOnClick}>About us</HashLink>
            <HashLink to={"/#brands"} onClick={handleOnClick}>Brands</HashLink>
            <Link to={"/services"} onClick={handleOnClick}>Services</Link>
        </main>
    </nav>
  )
}

export default Header




