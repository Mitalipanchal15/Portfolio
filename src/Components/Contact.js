import React from 'react'
import { motion } from 'framer-motion';



const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center my-30' id='contact'>
      <div className='max-w-[1200px] mx-auto justify-center ' >
      <motion.h1
       whileInView={{y:0, opacity: 1}}
       initial={{y:-100, opacity: 0}}
       transition={{duration:1}}
      className='my-25 text-center text-4xl'>Contact
      <span className='text-neutral-500'>Me</span></motion.h1>
     
      
       
          
          <motion.form 
           whileInView={{x:0, opacity: 1}}
           initial={{x:100, opacity: 0}}
           transition={{duration: 1}}
          
          action="https://getform.io/f/jawxoopb" method="post" className='p-6 flex flex-col justify-between max-w-xl'>
            <div className='flex flex-col'>
              <input type='name' name='name' id='name' placeholder='Full Name' className='w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
            </div>

            <div className='flex flex-col mt-2'>
               <input type='email' name='email' id='name' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
            </div>

            <div className='flex flex-col mt-2'>
               <textarea name='message' id='message' placeholder='Your Message' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
            </div>

            <button type='submit' className=' bg-primary-color text-white py-3 px-6 rounded-lg mt-3  hover: bg-green-600'>
              Submit
            </button>

          </motion.form>


     </div>
      </div>
   // </div>
  )
}

export default Contact
