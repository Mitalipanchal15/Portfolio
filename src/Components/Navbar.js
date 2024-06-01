import logo from './Assets/logo.avif';
import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import {motion} from 'framer-motion';

// const iconVariants = (duration) => ({
//   initial:{y: -10},
//   animate: {
//           y: [10, -10],
//           transition:{
//                   duration:duration,
//                   ease: "linear",
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//           }
//   },
// });

const Navbar = () => {
  const [nav, setNav]=useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return(
      <div className='text-white flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4 text-1' >
  
            <div className='text-3xl font-bold primary-color ml-4 font-sans'>
            <img className= "mx-2 w-12" src={logo} alt='logo'/>
            </div>
            <ul className='hidden md:flex bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
                <li className='p-5 active:text-indigo-600 '><a href='#home'>Home</a></li>
                <li className='p-5 active:text-indigo-600'><a href='#about'>About</a></li>
                <li className='p-5 active:text-indigo-600'><a href='#skill'>Skill</a></li>
                <li className='p-5 active:text-indigo-600'><a href='#experience'>Experience</a></li>
                <li className='p-5 active:text-indigo-600'><a href='#project'>Project</a></li>
                <li className='p-5 active:text-indigo-600'><a href='#contact'>Contact</a></li>
          </ul>
          {/* <motion.div
              variants={iconVariants(2.5)}
              initial='initial'
              animate='animate'
              className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <div className='text-sky-400'><FaLinkedin /></div>
              <FaGithub />
              <div className='text-blue-600'> <FaTwitter /></div> 
              <div className='bg-gradient-to-r from-pink-600 via-state-500 to-purple-500'><FaInstagram /></div>
          </motion.div>  */}
        
          <div onClick={handleNav} className='block md:hidden'>
               {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>} 
          </div>

        <div className={nav ? 'text-gray-500 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
           <div className='flex flex-shrink-0 items-center '>
               <img className= "mx-2 w-12" src={logo} alt='logo'/>
           </div>
           <ul className='p-8 text-2xl bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
              <li className='p-2 active:text-indigo-600'><a href='#home'>Home</a></li>
              <li className='p-2 active:text-indigo-600'><a href='#about'>About</a></li>
              <li className='p-2 active:text-indigo-600'><a href='#skill'>Skill</a></li>
              <li className='p-2 active:text-indigo-600'><a href='#experience'>Experience</a></li>
              <li className='p-2 active:text-indigo-600'><a href='#project'>Project</a></li>
              <li className='p-2 active:text-indigo-600'><a href='#contact'>Contact</a></li> 
           </ul>
        
            {/* <motion.div
              variants={iconVariants(2.5)}
              initial='initial'
              animate='animate'
              className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <div className='text-sky-400'><FaLinkedin /></div>
              <FaGithub />
              <div className='text-blue-600'> <FaTwitter /></div> 
              <div className='bg-gradient-to-r from-pink-600 via-state-500 to-purple-500'><FaInstagram /></div>
            </motion.div> */}
         </div>
      </div>
    )
};

export default Navbar;


