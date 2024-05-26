import React from 'react'
import logo from './Assets/logo.avif';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {motion} from 'framer-motion';

const iconVariants = (duration) => ({
  initial:{y: -10},
  animate: {
          y: [10, -10],
          transition:{
                  duration:duration,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: 'reverse'
          }
  },
});

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6 '> 
  
  <div className='flex flex-shrink-0 items-center '>
  <img className= "mx-2 w-12" src={logo} alt='logo'/>
  </div>

  <motion.div 
   variants={iconVariants(2.5)}
   initial='initial'
   animate='animate'
  className=' m-8 flex item-center justify-center gap-4 text-2xl'>
    <FaLinkedin/>
    <FaGithub/>
    <FaTwitter/>
    <FaInstagram/> 
  </motion.div>
  
  
  
  </nav>;  
}

export default Navbar;
