import React from 'react';
import logo from './Assets/logo.avif';
import { Outlet, Link } from 'react-router-dom';
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

const Navbar = () => {
  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <img className="mx-2 w-12" src={logo} alt='logo' />
        </div>
        <ul className='flex space-x-4 '>
          <li>
            <Link className='active:text-indigo-600' to="/hero">Home</Link>
          </li>
          <li>
            <Link className='active:text-indigo-600' to="/about">About</Link>
          </li>
          <li>
            <Link className='active:text-indigo-600' to="/technologies">Technologies</Link>
          </li>
          <li>
            <Link className='active:text-indigo-600'to="/experience">Experience</Link>
          </li>
          <li>
            <Link className='active:text-indigo-600' to="/project">Project</Link>
          </li>
          <li>
            <Link className='active:text-indigo-600' to="/contact">Contact</Link>
          </li>
        </ul>

        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='m-8 flex items-center justify-center gap-4 text-2xl'
        >
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
        </motion.div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
