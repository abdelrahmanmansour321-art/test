
import './App.css'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Courses from './components/Courses/Courses'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Services2 from './components/Services/Services2'
import Login from './components/login/Login'
// import Index from './Index2'


import { Route,Routes ,Link} from 'react-router-dom'


function App() {
  

  return (
    <>
    
    {/* <About />
     <Services2 />
    <Nav />  
     <Login /> */}

  <Link to="/home">
    <div >
      <button>Home 777</button>
    </div>
    </Link>

     <Routes>

      <Route path='/home' element= {<Home />}/>

      {/* <Route path='/a' element={} /> */}
      <Route path='/hello' element={<h1>hello world</h1>}/>
    </Routes> 
    
    </>
  )
}

export default App
