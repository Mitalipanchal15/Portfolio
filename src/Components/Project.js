import React from 'react';
import projectImage from './Assets/project.png';
import {motion} from 'framer-motion';

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
          whileInView={{y:0, opacity: 1}}
          initial={{y:-100, opacity: 0}}
          transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        {/* <div>
            {PROJECTS.map ((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-3/4'>
                        <img 
                        src={project.image}
                        width={150}
                        height={150}
                        alt={project.title}
                        className='mb-6 rounded'/>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p>{project.description}</p>
                        {project.technologies.map((tech,index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
                    </div>
                </div>
            ))}
        </div> */}
    
        {/* <div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-3/4'>
                        <img src={projectImage} alt="project" className='mb-6 rounded lg:w-1/5'/>
                        
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Rendom-Gif</h6>
                        <p>we can used react talwindcss etc...</p>
                    </div>
                  
                </div>
         
        </div> */}
        <div>
   <div  className='mb-8  flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{x:0, opacity: 1}}
              initial={{x: -100, opacity: 0}}
              transition={{duration: 1}}
            className='w-full lg:w-1/4'>
            <img src={projectImage} alt="project" className='mb-6 rounded lg:w-1/2'/>
            </motion.div>

            <motion.div
              whileInView={{x:0, opacity: 1}}
              initial={{x: 100, opacity: 0}}
              transition={{duration: 1}}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    Random Gif Website
                </h6>
                <p className='mb-4 text-neutral-400 ' >Hello everyone!</p>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">HTML</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">CSS</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">JavaScript</span>
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 justify-between">React.js</span>
            </motion.div>
            </div>
   </div>
    </div>
  )
}

export default Project;
