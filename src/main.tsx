import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './footer.tsx'
import Marquee from './marquee.tsx'
import About from './about.tsx'
import Testimonial from './Testimonial.tsx'
import Getintouch from './Getintouch.tsx'
import Capabilities from './Capabilities.tsx'
import CTA from './CTA.tsx'
import Media from './Media.tsx'
import Leadership from './Leadership.tsx'
import Navbar from './navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
    <Marquee/>
    <Testimonial/>
    <About/>
    <Getintouch/>
    <Capabilities/>
    <CTA/>
    <Media/>
    <Leadership/>
    
    <Footer/>
  </StrictMode>,
)
