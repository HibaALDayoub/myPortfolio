import  './Navbar.css'
import logo from "./images/Hiba.jpg"
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen , setMeuOpen] = useState(false)
    return (
        <>
            <div className="header">
                <Link to='/' className="logo"><h4>H.</h4></Link>
                    <div className="links-container">
                        <ul className={"alllinks "  + (menuOpen && "openMenu")}>
                            <li onClick={()=> setMeuOpen(false)}><Link to='/' className="active" >Home</Link></li>
                            <li onClick={()=> setMeuOpen(false)}><Link to='about' >About</Link></li>
                            <li onClick={()=> setMeuOpen(false)}><Link to='projects' >Projects</Link></li>
                            <li onClick={()=> setMeuOpen(false)}><Link to='concat'>Contact</Link></li>
                        </ul>
                        <div className={"Bars " + (menuOpen && "open")} onClick={()=> setMeuOpen(!menuOpen)}>
                                    <span className="line1" ></span>
                                    <span className="line2"></span>
                                    <span className="line3"></span>
                            
                        </div>
                        {/* <VscThreeBars className='Bars' onClick={()=> setMeuOpen(!menuOpen)}/> */}
                    </div>
            </div>
        </>
    )
}

export default Navbar