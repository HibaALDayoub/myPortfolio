import  './Home.css'
import hiba from '../../images/IMG-20230719-WA0001.jpg'
import { motion } from 'framer-motion';
import {init} from 'ityped';
import { useEffect , useRef} from 'react';
const Home = () => {
  
  const txtRef = useRef();
  useEffect(()=>{
    init(txtRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed:  60,
      strings: ["Front End Developer" ],
    })
  },[])
  return (
    <motion.div
        initial={{ x : '-100vw', }}
        animate={{x :0}}transition={{duration:0.3}}exit={{ y: "-100vh"}}
    className='Home'>
      <div className='left'>
        <div className="all-text">
          <h2>Hi There , I'm</h2>
          <h1>Hiba AL Dayoub</h1>
          <h3>- <span ref={txtRef}></span>
      <div className='circle'></div>
            </h3>
      <div className='circle'></div>
        </div>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <div className='circle'></div>
          <img
          src={hiba} alt='' />
          <div className='circle'></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home