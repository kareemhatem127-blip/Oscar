import { ServerRouter } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/Pages/About'
import Hero from './Component/Pages/Hero'
import Services from './Component/Pages/Services'
import Projects from './Component/Pages/Projects'
import Reviews from './Component/Pages/Reviews'
import Contact from './Component/Pages/Contact'
import Footer from './Component/Footer/Footer'
 
 export default function App() {
   return (
     <div>
       <Navbar />
       <Hero />
       <About />
       <Services />
       <Projects />
       <Reviews />
      <Contact />
      <Footer /> 
     </div>
   )
 }
 