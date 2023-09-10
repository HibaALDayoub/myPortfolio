import './Concat.css'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import wave from '../../images/social2.png'
import { Link } from 'react-router-dom';

const Concat = () => {
  return (
    <motion.div className='concat' initial={{ x: '-100vw', }} animate={{ x: 0, }} transition={{ duration: 0.3 }} exit={{ y: "-100vh" }}
    >
      <div className='overlay'>
      </div>
      <div className='container'>
        <h2>Contact Us :</h2>
        <form action=''>
          <div className='left'>
            <input type="text" placeholder="User Name" name="Name"></input>
            <input type="text" placeholder="Phone Number" name="Number"></input>
            <input type="email" placeholder="User Email" name="Email"></input>
            <input type="text" placeholder="Subject" name="Subject"></input>
          </div>
          <div className="right">
            <textarea name="message" placeholder="Your Message"></textarea>
            <input type="submit" value="send"></input>
          </div>
        </form>

      <div className="f-icons">
      <Link to='https://www.facebook.com/hiba.aldayoub?mibextid=ZbWKwL'>
          <CiLinkedin className='icon' />
        </Link>
        <Link to='https://github.com/HibaALDayoub?tab=repositories' >
          <FaGithub  className='icon' />
        </Link>
        <Link to='https://instagram.com/hiba_aldayoub?igshid=ZDdkNTZiNTM='>
          <FaInstagram  className='icon' />
        </Link>
        <Link to='https://www.facebook.com/hiba.aldayoub?mibextid=ZbWKwL'>
          <CiFacebook className='icon' />
        </Link>
       

      </div>
      </div>
      <img src={wave} alt='' className='wavee' />
      
    </motion.div>

  )
}

export default Concat