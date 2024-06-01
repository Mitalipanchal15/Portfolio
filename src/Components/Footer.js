import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    },
  });

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <h1 className='mt-3 text-center text-2xl bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text  tracking-tight text-transparent'>
            Thank You</h1>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <div className='text-sky-400'><FaLinkedin /></div>
          <FaGithub />
        <div className='text-blue-600'> <FaTwitter /></div> 
        <div className='bg-gradient-to-r from-pink-600 via-state-500 to-purple-500 rounded-lg'><FaInstagram /></div>
        </motion.div>
      
    </div>
  )
}

export default Footer
