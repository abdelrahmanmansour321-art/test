import React from 'react'
import './Home.css'
import img from '../../assets/mainpic.svg'
import Homeicons from './homeicons'
// import Homeicons from './components/Home/homeicons.jsx'
// import { FaGithubSquare } from "react-icons/fa";

function Home() {
  return (
    <div className='home'>
      <div className='container home-container'>
      
        <h2>Easer study</h2>
       
        <h1>Higher grades</h1>

        <h4 className='text'> Learn smarter, not harder. <br /> This platform was built to be your ultimate study companion. 
        </h4>


        <div className="btn-wrap">
         <a href="#"><button className='button'>view servises</button></a>
         <a href="#"><button  className='button button-sec '>courses</button></a>
        </div>


         <div className='img'>
          <img src={img} alt="" />
         </div>

          <Homeicons />

          

      </div>
    </div>
  )
}

export default Home
