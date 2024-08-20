import React from 'react'
import './Navbar.css'
import Navlist from './navlist/Navlist'
import Button from '../shared/button/Button'
import { BiLogIn } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav>
    <img src="excelrlogo.jpg" />
    <Navlist/>
    <Button  mytext="SIGN IN"  myicon= {<BiLogIn/>}/>
    </nav>
  )
}

export default Navbar