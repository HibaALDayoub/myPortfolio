import React from 'react'
import './project.css'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCube, Navigation, Pagination } from 'swiper';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import data from './data'
import 'swiper/css/navigation';

const Projects = () => {

  return (
    <motion.div
      initial={{ x: '-100vw', }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.3
      }}
      exit={{
        y: "-100vh"
      }}
      className='project'
    >

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          data.map((item, id) => (
            <SwiperSlide className='app' key={id}>
              <Swiper effect={"cube"} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} pagination={true} modules={[EffectCube, Pagination]} className="mySwiper"
                style={{ 'transform': "rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)" }}  >
                {
                  item.image_urls.map((sm, id) => (
                    <SwiperSlide key={id}>
                      <img src={sm} alt='' />
                      <div className='appProject'>
                        <h3>{item.header}</h3>
                        <p>
                          {item.p}
                        </p>
                        <h2>link of the website :</h2>
                        <a href={item.linkWebsite}>{item.linkWebsite}</a>
                        <h2 className='h2child'>git hub link:</h2>
                        <a className='achild2' href='dddddd'>{item.linkGithub}</a></div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </motion.div>
  )
}

export default Projects
