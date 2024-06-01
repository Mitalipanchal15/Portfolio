import React from 'react';
import {motion} from 'framer-motion';
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id='experience'>
      <motion.h1
       whileInView={{y:0, opacity: 1}}
       initial={{y:-100, opacity: 0}}
       transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Experience</motion.h1>
      {/* <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8  flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    {experience.role}-{" "}
                    <span className='text-sm text-purple-100'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-400' >{experience.description}</p>
                {experience.technologies.map((tech,index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
            </div>
            </div>
        ))}
      </div> */}
   <div>
   <div  className='mb-8  flex flex-wrap lg:justify-center'>

            <motion.div 
             whileInView={{x:0, opacity: 1}}
             initial={{x:-100, opacity: 0}}
             transition={{duration: 1}}
            className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'> 2024 - Present</p>
            </motion.div>

            <motion.div 
            whileInView={{x:0, opacity: 1}}
            initial={{x: 100, opacity: 0}}
            transition={{duration: 1}}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    Intern - {""}
                    <span className='text-sm text-purple-100'>MindNova</span>
                </h6>
                <p className='mb-4 text-neutral-400 ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">HTML</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">CSS</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">JavaScript</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">React.js</span>
            </motion.div>
            </div>
   </div>
    </div>
  );
};

export default Experience;
//index.js
// export const EXPERIENCES = [
//   {
//   year:"2024-Present",
//   role: "Intern",
//   company:"MindNova",
//   description: 'Hello',
//   technologies:['HTML','CSS','React'],
// },
// ];