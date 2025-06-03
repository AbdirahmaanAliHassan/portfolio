"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {FaCode, FaMobileAlt, FaPaintBrush, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce platform with product listings and cart functionality.",
    image: "https://media.istockphoto.com/id/2149616592/photo/digital-modern-online-shopping-and-e-commerce-concept-the-modern-interface-online-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=sDn7i1itGXyAUpgtXYVFgVext8h4B3f7DXo1km-dK3g=",
    github: "https://github.com/AbdirahmaanAliHassan/EcommerceSite",
  },
  {
    title: "Blog System",
    description: "Full-stack blog with authentication and post management.",
    image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf",
    github: "https://github.com/madhur-taneja/Personal-Blog-Website",
  },
  {
    title: "Snake Game",
    description: "Classic snake game built with JavaScript.",
    image: "https://img.freepik.com/free-vector/board-game-snake-ladder_1308-5206.jpg",
    github: "https://github.com/AbdirahmaanAliHassan/snake-game",
  },
  {
    title: "Match-time App",
    description: "Football booking system for local stadiums.",
    image: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
    github: "https://github.com/AbdirahmaanAliHassan/My-Project",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Interactive tic-tac-toe game with multiplayer support.",
    image:"data:image/png;base64,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",
    github: "https://github.com/AbdirahmaanAliHassan/TikakGame",
  },
  {
    title: "Quiz App",
    description: "Interactive quiz application with multiple categories.",
    image: "https://1.bp.blogspot.com/--N26aRZdGGM/X3w1K1Ua5aI/AAAAAAAAA6U/CAW__gnZGAwwhtESQ8nIaM5e-vBrXRhzwCLcBGAsYHQ/s1280/Create%2Ba%2BQuiz%2BApp%2Bwith%2BTimer%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp",
    github: "https://github.com/AbdirahmaanAliHassan/Quiz-Simple-Game",
  },
];

const services = [
  {
    icon: <FaCode size={40} className="mx-auto mb-4" />,
    title: "Web Development",
    description: "Building responsive and performant web applications.",
  },
  {
    icon: <FaMobileAlt size={40} className="mx-auto mb-4" />,
    title: "Mobile Apps",
    description: "Creating cross-platform mobile apps with React Native and Expo.",
  },
  {
    icon: <FaPaintBrush size={40} className="mx-auto mb-4" />,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces.",
  },
];

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else if (systemPrefersDark) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">
            MyPortfolio
          </h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-lg items-center">
            <li>
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </li>
            <li>
              {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl focus:outline-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button> */}
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none text-indigo-600 dark:text-indigo-400"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl focus:outline-none text-indigo-600 dark:text-indigo-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button> */}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="bg-white dark:bg-gray-800 px-6 py-4 md:hidden shadow-md">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <a 
                  href="#home" 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center items-center p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Welcome to My Portfolio
          </h2>
          <p className="text-xl max-w-xl text-gray-600 dark:text-gray-300">
            Hi, Iam Abdirahman ali , a passionate developer building awesome projects.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <motion.img
              src="/pic.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Iam a passionate full-stack developer with expertise in React, Node.js, and building
              modern web and mobile apps. I enjoy crafting beautiful, functional user experiences.
            </p>
            <motion.a
              href="/My Cv.pdf"
              download
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download My CV
            </motion.a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md flex flex-col items-center text-center"
              >
                <div className="text-indigo-600 dark:text-indigo-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900"
              >
                <div className="h-full flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub /> View on GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-8"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">
            Contact Me
          </h2>
          
          <form className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your title"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MainPage;