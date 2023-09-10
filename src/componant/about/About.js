import './about.css'

import { motion } from 'framer-motion'
import Card from './Card'
import CV from './CV';


const About = () => {
  return (
    <motion.div
        initial={{ x : '-100vw', }}
        animate={{x :0,}}transition={{duration:0.3}} exit={{y: "-100vh"}}
        className="about"
    >
      <div className='top'
      >
        <motion.h2 
            initial={{ x : '-20vw', }}
            animate={{x :'2vw',}} 
            transition={{
              duration:1.7
          }}
        >about me :
        </motion.h2>
        <motion.div
          initial={{ y : '100vh' }}
          animate={{y :0}}
          transition={{ duration:1.3}}
        >
        <p>I help businesses grow through visually stunning and user-friendly websites</p>
        <p>Making a beautiful Website pages with CSS and Fontawesome library.</p>
            <p> Little knowledge with React JS framework.</p>
            <p> Good knowledge with local storage with JS.</p>
            <a href={CV} download>
              <button className='btn-cv'> Download CV</button>
            </a>
      </motion.div>
      </div>
        <div className='appskills'>
        <motion.h2 
            initial={{ x : '-20vw', rotate:180}}
            animate={{
                x :'0vw',
                rotate: 0
            }} 
            transition={{
              duration:1.3
          }}
        >Skills</motion.h2>
        <div className='skills'>
          <Card />
        </div>
        </div>
    </motion.div>
  )
}

export default About

