import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import './Home.css'

function Homeicons() {
  return (
    <div>
      
      <div className='Home-icons'>

        <a href="" target='blank'> <FaGithubSquare /></a>
        <a href="mailto:abdomansmansor@gmail.com" target='blank'><SiGmail /></a>
        <a href="https://wa.me/qr/AQDXC2USSXEZD1" target='blank'><FaSquareWhatsapp /></a>
                 
         </div>
    </div>
  )
}

export default Homeicons
