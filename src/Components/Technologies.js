import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
//import {SiMongodb} from 'react-icons/si';
//import {FaNodeJs} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
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

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{y:0, opacity: 1}}
        initial={{y:-100, opacity: 0}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>

        <motion.div 
        whileInView={{x:0, opacity: 1}}
        initial={{x:-100, opacity: 0}}
        transition={{duration:1.5}}

        className='flex flex-wrap items-center justify-center gap-4'>
{/* 
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500'/>
            </motion.div> */}

            <motion.div
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            {/* <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div> */}

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl  text-orange-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCss3 className='text-7xl  text-sky-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiJavascriptFill className='text-7xl  text-yellow-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl  text-sky-500'/>
            </motion.div>

        </motion.div>
    </div>
  );
};

export default Technologies;
