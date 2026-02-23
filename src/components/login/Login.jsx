import React from 'react'
import './login.css'
import { MdAlternateEmail } from "react-icons/md"
import { FaUser } from "react-icons/fa";

function Login() {
  return (
    <section className="login"id='login'>
        {/* <div className='login-container'>

                        
                <h1>Login</h1>


                <div className='inputs'>
                   <FaUser className='login-icon1' />
                    <input type="text" placeholder='Username' />

                     <MdAlternateEmail  className='login-icon' />
                    <input type="email" placeholder='Email' />


                </div>

                <button>submit</button>

                
        </div> */}

                <div className='card'>

                    <div className='cont'>
                        <div className='h'></div>
                    <h1 >login</h1>

                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Email'/>

                    <button className='button'>submit</button>
                    </div>
                </div>
    </section>
  )
}

export default Login
