'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'Project 1', image: '/lat.jpg' },
  { id: 2, title: 'Project 2', image: '/lat.jpg' },
  { id: 3, title: 'Project 3', image: '/lat.jpg' },
  { id: 4, title: 'Project 4', image: '/lat.jpg' },
];

export default function MyProjects() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ scale: [0.9, 1], opacity: [0, 1], transition: { duration: 0.8, ease: 'easeOut' } });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      {/* Navbar */}
      <header className="bg-indigo-700 text-white py-4 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={controls}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-black">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto">I am a passionate developer who enjoys creating beautiful and functional web applications.</p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h2>
          <form className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <div className="mb-4 flex items-center border-b border-gray-300 py-2">
              <FaUser className="text-indigo-700 mr-3" />
              <input type="text" placeholder="Your Name" className="w-full p-2 outline-none" required />
            </div>
            <div className="mb-4 flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-indigo-700 mr-3" />
              <input type="email" placeholder="Your Email" className="w-full p-2 outline-none" required />
            </div>
            <div className="mb-4 flex items-center border-b border-gray-300 py-2">
              <FaCommentDots className="text-indigo-700 mr-3" />
              <textarea placeholder="Your Message" className="w-full p-2 outline-none" rows="4" required></textarea>
            </div>
            <motion.button 
              className="bg-indigo-700 text-white py-2 px-6 rounded-lg text-lg font-semibold w-full hover:bg-indigo-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </>
  );
}
