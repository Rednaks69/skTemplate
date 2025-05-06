import './App.css'
import ButtonAction from '../components/ButtonAction'
import CardsList from '../components/CardsList'
import Loading from '../components/Loading'
import { data } from '../data/data'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll';
import axios from 'axios'
function App() {

  //| State |
  const [loading, setLoading] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [message, setMessage] = useState('');
  const scrollContainer = useRef(null);
  const cursorRef = useRef(null);
  

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    // Initialize LocomotiveScroll
    const locomotiveScroll = new LocomotiveScroll();

    // Fetch data from the server
    axios.get('http://localhost:5000/')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));

    // Cleanup function to clear the timeout    
    // Cleanup function to destroy the scroll instance  
      return () => {
        clearTimeout(timer)
        locomotiveScroll.destroy();
      }
  }, [])


//| Animation cursor|

useGSAP(() => { 
 
  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY })
  }

  const handleClick = () => {
    
    gsap.to(cursorRef.current, {
      scale: 2,
      duration: 0.3,
      ease: 'power2.inOut',
      // Scale up and then back to normal
      onComplete: () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.inOut'
        });
      }
    });
  };

  window.addEventListener('click', handleClick);
  window.addEventListener('mousemove', handleMouseMove)
  
  gsap.to(cursorRef.current, {
    x: cursor.x,
    y: cursor.y,
    duration: 0.5,
    ease: 'power2.out',
  },[cursor])

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('click', handleClick);
  }
}
, [cursor])


//| Fin Animation cursor|


return (
  <>
    {loading ? <Loading /> :
      <div className='relative' ref={scrollContainer}>
        
        {/* Cursor */}
        <div className='h-6 w-6 rounded-full fixed bg-black z-50' ref={cursorRef}></div>
      
        {/* Hero + Menu Section */}
        <div className="relative h-screen p-2">
          {/* Background with full height */}
          <div className="hero absolute top-0 left-0 w-full h-full -z-10 bg-emerald-100"></div>

          {/* Main Menu */}
          <div className="flex justify-between items-baseline m-4 font-bold text-2xl relative z-10">
            viteLogo
            <ButtonAction url={'login'} />
          </div>
        </div>

        {/* Third div (comes after hero section) */}
        <div className="third border h-[340px] w-full flex justify-center items-center border-amber-700">
          {message}
        </div>
        {/* ?/? */}
        
        {/* Cards List Section */}
        <div className='border h-[340px] w-full flex justify-center items-center border-amber-700'>
          <CardsList data={data} />
        </div>

      </div>
    }
  </>
  )
}

export default App
