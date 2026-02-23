import React from 'react'
import './Services.css'
import { FaListAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdQuiz } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa"

function Services() {
  return (
    <section className='services'>
      <div className='top-sec-serv'>
      <h1>services</h1>
      </div>

        <div className='serv-card'>

            <div className='package'>
                <div class="package2">
                  <FaRegListAlt className='serv-icon'/>
                  <h3 class="text">sheats & boards</h3>
                  <p> here you can have all of the sheats and 
                    boards in an easy orgnaized way </p>
                  </div>
            </div>
            <div className='package'>
                <div class="package2">
                  <IoIosNotifications className='serv-icon' />
                  <h3>notifeactions</h3>
                  <p class="text">once you have regesterd your account we
                     will notify you with every up coming quize or sheat</p>
                  </div>
            </div>
            <div className='package'>
                <div class="package2">
                  <MdQuiz className='serv-icon'/>
                  <h3>summarys</h3>
                  <p class="text">summarys will be added soon</p>
                  </div>
            </div> </div>

            {/* /////cards////// */}
            <div className='serv-cards'>
            <div className='card'> 
              <div className='cont'>
               <FaRegListAlt className='serv-icon'/>
               
                  <h3 class="text">sheats & boards</h3>

                  <p> here you can have all of the sheats and 
                    boards in an easy orgnaized way </p>
            </div>


            {/* <div className='card'> 
              <div className='cont'>
              <IoIosNotifications className='serv-icon' />
                  <h3>notifeactions</h3>
                  <p class="text">once you have regesterd your account we
                     will notify you with every up coming quize or sheat</p>
              </div>
            </div> */}


            {/* <div className='card'> 
              <h2>card</h2>
            </div> */}

        </div>
        </div>
        <button>hhhhh</button>

    </section>
  )
}

export default Services
