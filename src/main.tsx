import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './footer.tsx'
import Marquee from './marquee.tsx'
import About from './about.tsx'
import Testimonial from './Testimonial.tsx'
import Getintouch from './Getintouch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Marquee/>
    <Testimonial/>
    <About/>
    <Getintouch/>
    <Footer/>
  </StrictMode>,
)
