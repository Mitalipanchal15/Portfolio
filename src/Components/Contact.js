

import {motion} from 'framer-motion';


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
         whileInView={{y:0, opacity: 1}}
         initial={{y:-100, opacity: 0}}
         transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        
        <div className='text-center tracking-tighter'>
           
            <motion.p 
             whileInView={{x:0, opacity: 1}}
             initial={{x:-100, opacity: 0}}
             transition={{duration: 1}}
            className='my-4'>Vyara</motion.p>
           
            <motion.p
            whileInView={{x:0, opacity: 1}}
            initial={{x:100, opacity: 0}}
            transition={{duration: 1}}
            className='my-4'>1234567890</motion.p>

            <a href='#' className=' active:text-indigo-600 underline'>mitalipanchal1507@gmail.com</a>
            {/* hover:text-indigo-600 */}


        </div>
    </div>
  );
};

export default Contact;
