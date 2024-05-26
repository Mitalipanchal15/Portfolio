import React from 'react';
import profilePic from "./Assets/profilepic.png";
import {motion} from 'framer-motion';

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                      variants={container(0)}
                      initial="hidden"
                      animate="visible"
                              //  initial={{ x: -100, opacity:0 }} 
                              //  animate={{ x: 0, opacity:1 }}
                              //  transition={{duration:0.5, delay:2 }}
                    
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Mitali Panchal</motion.h1>

                    <motion.span 
                       variants={container(0.5)}
                       initial="hidden"
                       animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Devloper</motion.span>
                        
                        <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter justify-between'>
                           I am a passionate full stack devloper with a knack for crafting robust and scalable web applications. 
                           I have honed my skills in front-end technologies like React, as well as back-end technologies like node.js, MySQL, and MongoDB.
                        </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/3 lg:p-8'>
                <div className='flex justify-center'>
                <motion.img 
                 initial={{x: 100, opacity: 0}}
                 animate={{x: 0, opacity:1}}
                 transition={{duration: 1, delay: 1.2}}
                className='rounded-2xl' src={profilePic} alt='Mitali Panchal'/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
