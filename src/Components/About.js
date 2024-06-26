import React from 'react';
//import aboutImg from './Assets/ab.png';
import {motion} from "framer-motion";

const About = () => {
  return (
    
    <div className='border-b border-neutral-900 pb-4 'id='about'>
        <motion.h1
         whileInView={{y:0, opacity: 1}}
         initial={{y:-100, opacity: 0}}
         transition={{duration:1.5}}
        className='my-20 text-center text-4xl' >About
        <span className='text-neutral-500'>Me</span>
        </motion.h1>
        <div className='flex flex-wrap'> 

            <motion.div 
            whileInView={{x:0, opacity: 1}}
            initial={{ x:-100, opacity: 0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                {/* <div className='flex items-center justify-center'>
                    <img className='lg:w-1/2 rounded-2xl'  src={aboutImg} alt='About'/>
                </div> */}
                </motion.div>

                <motion.div 
                 whileInView={{x:0, opacity: 1 }}
                 initial={{ x: 100, opacity: 0}}
                 transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                    <div className='felx justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6' >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
            </motion.div>
        </div>
    </div>
  
  );
};

export default About;
