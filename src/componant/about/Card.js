import React from 'react'
import html from '../../images/html2.jfif'
import redux from '../../images/redux3nn.jpg'
import react from '../../images/reactp.png'
import css from '../../images/cssnn1.jfif'
import java from '../../images/JSP222.jpg'
import { motion } from 'framer-motion'

const Card = () => {
    const data = [
        {
            id: "1",
            title: "Html",
            p:"Html && Html5",
            img: html
        },
        {
            id: "2",
            title: "CSS",
            p:"Css && Css3",
            img: css
        },
        {
            id: "3",
            title: "Java Script",
            p:"Dom && Bom && ES6",
            img: java
        },
        {
            id: "4",
            title: "ReactJS",
            p:"",
            img: react
        },
        {
            id: "5",
            title: "Redux",
            p:"Redux && Redux TooKit",
            img: redux
        },
        ];
    return (
        <>
        {data.map((d)=>(
        <motion.div 
        initial={{ y : '0vh' }}
        animate={{
            y :'4vh',
        }} 
        transition={{
            duration:1.7,
            delay: 1,
            type: 'spring',
            stiffness: 200,
            mass:1,
            damping: 10,
        }}
    
        className='card' key={d.id}>
        <h3>{d.title}</h3>
        <p>{d.p}</p>
        <img src={d.img} alt=''/> </motion.div>))}
        
            </>
        ) }

export default Card

// Exprience :
// -Design web mockups wireframes,cross browser compatibility and web features

// -  Designed dynamic and interactive pages using Html,Css, and JS