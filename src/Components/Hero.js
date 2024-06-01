import React from 'react';
import profilePic from "./Assets/profilepic.jpeg";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion';

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay},
    },
});

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

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'id='home'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h3 
                      variants={container(0)}
                      initial="hidden"
                      animate="visible"
                      
                              //  initial={{ y: 20, opacity:0 }} 
                              //  animate={{ y: 0, opacity:1 }}
                              //  transition={{staggerChildren:0.1}}
                    
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl inline-block'>Mitali Panchal</motion.h3>

                    {/* <motion.span 
                       variants={container(0.5)}
                       initial="hidden"
                       animate="visible"
                       className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Devloper</motion.span> */}
                        
                <TypeAnimation className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent' sequence={["Frontend Devloper", 1000,"Webdesigner", 1000,]} 
                wrapper="span" speed={50} repeat={Infinity}/> 
                        
                        <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter justify-between'>
                           I am a passionate full stack devloper with a knack for crafting robust and scalable web applications. 
                           I have honed my skills in front-end technologies like React, as well as back-end technologies like node.js, MySQL, and MongoDB.
                        </motion.p>
                        <motion.div 
                         variants={container(2)}
                         initial="hidden"
                         animate="visible"
                        className='text-5xl flex justify-start group my-3'>
                    <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF675EC] 
                      to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -insert-1 group-hover:duration-200 animate-tilt'>
                    </div>

                   <a href="/" title="Download CV"role="button" class='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 
                      py-4 text-lg dont-bold text-white transition-all duration-200 bg-primary-color 
                      font-pj rounded-xl focus: outline:none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
                </motion.div>

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
            </div>
            {/* <div className='my-auto '>
                <div className='flex justify-center'>
                <motion.img 
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity:1}}
                 transition={{duration: 1, delay: 1.2}}
                className='w-[300px] sm:w-[500px] mx-auto h-auto col-span-1 my-auto lg:w-[400px] rounded-full' src={profilePic} alt='Mitali Panchal'/>
                </div>
            </div> */}
            <motion.div
              initial={{x:100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay:1.2}}
            className='flex justify-center pl-20'>
            <img src={profilePic} alt="profilepic" className='w-[300px] sm:w-[500px] mx-auto h-auto col-span-1 my-auto lg:w-[400px] rounded-full'/>
            </motion.div>
        </div>
    </div>
  );
};

export default Hero;
