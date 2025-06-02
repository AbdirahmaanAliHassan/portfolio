"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import {FaSun,FaMoon,FaCode,FaMobileAlt,FaPaintBrush,} from "react-icons/fa";

const projects = [
 {
    title: "e-commerce web",
    description: "This project is about a simple e-commerce web.",
    image:
    "https://media.istockphoto.com/id/2149616592/photo/digital-modern-online-shopping-and-e-commerce-concept-the-modern-interface-online-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=sDn7i1itGXyAUpgtXYVFgVext8h4B3f7DXo1km-dK3g=",
    github: "https://github.com/AbdirahmaanAliHassan/EcommerceSite",
  },
  {
    title: "Blog System",
    description: "A full-stack blog with auth and post management.",
    image:
      "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60",
    github: "https://github.com/yourusername/blog-app",
  },
  {
    title: "Snake Game",
    description: "This project is about a simple snake game.",
    image:
      "https://img.freepik.com/free-vector/board-game-snake-ladder_1308-5206.jpg?semt=ais_items_boosted&w=740",
      // "/snake game.PNG",
    github: "https://github.com/yourusername/snake-game",
  },
   {
    title: "Match-time App",
    description: "Football booking system for local stadiums.",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/yourusername/matchtime",
  },
    {
    title: "Tik-tak Game",
    description: "This project is about a simple e-commerce web.",
    image:
     "https://imgs.search.brave.com/OVSR26dHW9iFGIYKOtdELhfQxB5Q9kQF-pWF-7A21O4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW5n/MWJ1Y2w3dzY2ay5j/bG91ZGZyb250Lm5l/dC9naG9zdC1ibG9n/LzIwMjIvMDQvU2Ny/ZWVuLVNob3QtMjAy/Mi0wNC0wNi1hdC0x/MC4yNC4wNi1BTS5w/bmc",
    github: "https://github.com/yourusername/matchtime",
  },
   {
    title: "Quiz app",
    description: "This project is about a simple quiz app.",
    image:
    "https://1.bp.blogspot.com/--N26aRZdGGM/X3w1K1Ua5aI/AAAAAAAAA6U/CAW__gnZGAwwhtESQ8nIaM5e-vBrXRhzwCLcBGAsYHQ/s1280/Create%2Ba%2BQuiz%2BApp%2Bwith%2BTimer%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp",
    github: "https://github.com/yourusername/matchtime",
  },
  
  
];

// New services array 
const services = [
  {
    icon: <FaCode size={40} className="mx-auto mb-4 text-indigo-600" />,
    title: "Web Development",
    description: "Building responsive and performant web applications.",
  },
  {
    icon: <FaMobileAlt size={40} className="mx-auto mb-4 text-indigo-600" />,
    title: "Mobile Apps",
    description: "Creating cross-platform mobile apps with React Native and Expo.",
  },
  {
    icon: <FaPaintBrush size={40} className="mx-auto mb-4 text-indigo-600" />,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces.",
  },
];

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav
        className={
          darkMode
            ? "shadow-md sticky top-0 z-50 bg-gray-800"
            : "shadow-md sticky top-0 z-50 bg-white"
        }
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className={
              darkMode
                ? "text-indigo-400 text-2xl font-bold"
                : "text-indigo-600 text-2xl font-bold"
            }
          >
            MyPortfolio
          </h1>

            {/* nav-bars// */}
          <ul className="flex gap-6 text-lg items-center">
            <li>
              <a href="#home" className={darkMode
               ? "hover:text-indigo-300 text-gray-100"
                    : "hover:text-indigo-600 text-gray-900"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  darkMode
                    ? "hover:text-indigo-300 text-gray-100"
                    : "hover:text-indigo-600 text-gray-900"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={
                  darkMode
                    ? "hover:text-indigo-300 text-gray-100"
                    : "hover:text-indigo-600 text-gray-900"
                }
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={
                  darkMode
                    ? "hover:text-indigo-300 text-gray-100"
                    : "hover:text-indigo-600 text-gray-900"
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={
                  darkMode
                    ? "hover:text-indigo-300 text-gray-100"
                    : "hover:text-indigo-600 text-gray-900"
                }
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="text-center py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={darkMode ? "text-gray-100 text-4xl font-bold mb-4" : "text-gray-900 text-4xl font-bold mb-4"}
        >
          Welcome to My Portfolio
        </motion.h2>
        <p className={darkMode ? "text-indigo-300 text-lg mb-6" : "text-gray-700 text-lg mb-6"}>
          Explore my recent work and get in touch.
        </p>
        
      </section>

     {/* About */}
<section id="about" className="py-16 px-4">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-lg ${
      darkMode ? "bg-gray-800" : "bg-white"
    } flex flex-col sm:flex-row items-center gap-8`}
  >
    {/* my local path in my image */}
    <img
      src="/pic.JPG" 
      alt="About Me"
      className="w-60 h-60 rounded-full object-cover shadow-lg"
    />

    {/* Qoraalka iyo button-ka under */}
    <div className="text-center sm:text-left max-w-xl flex flex-col justify-center gap-6">
      <div>
        <h2 className={darkMode ? "text-gray-100 text-3xl font-semibold mb-4" : "text-gray-900 text-3xl font-semibold mb-4"}>
          About Me
        </h2>
        <p className={darkMode ? "text-indigo-300 text-lg" : "text-gray-700 text-lg"}>
          I’m a passionate full-stack developer based in Hargeisa, Somaliland. I love building
          beautiful and functional web and mobile apps using React, Next.js, Prisma, Tailwind, and TypeScript.
        </p>
      </div>

      {/* Button-ka Download CV */}
      <a
        href="/My Cv.pdf"
        download
        className="self-start bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Download CV
      </a>
    </div>
  </motion.div>
</section>


      {/* Services */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={
              darkMode
                ? "text-gray-100 text-3xl font-semibold text-center mb-8"
                : "text-gray-900 text-3xl font-semibold text-center mb-8"
            }
          >
            My Services
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 text-center">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className={
                  darkMode
                    ? "bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    : "bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                }
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className={darkMode ? "text-gray-100 text-xl font-semibold mb-2" : "text-gray-900 text-xl font-semibold mb-2"}>
                  {service.title}
                </h3>
                <p className={darkMode ? "text-indigo-300" : "text-gray-700"}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={
              darkMode
                ? "text-gray-100 text-3xl font-semibold text-center mb-8"
                : "text-gray-900 text-3xl font-semibold text-center mb-8"
            }
          >
            My Projects
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={
                  darkMode
                    ? "bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    : "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                }
                whileHover={{ scale: 1.03 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className={darkMode ? "text-gray-100 text-xl font-semibold" : "text-gray-900 text-xl font-semibold"}>
                    {project.title}
                  </h3>
                  <p className={darkMode ? "text-indigo-300 mt-2" : "text-gray-700 mt-2"}>
                    {project.description}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className={darkMode ? "py-16 px-4 bg-gray-900" : "py-16 px-4 bg-white"}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={darkMode ? "text-gray-100 text-3xl font-semibold mb-6" : "text-gray-900 text-3xl font-semibold mb-6"}>
            Contact Me
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className={
                darkMode
                  ? "w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 border-gray-700"
                  : "w-full px-4 py-2 border rounded-lg bg-white text-gray-900 border-gray-300"
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              className={
                darkMode
                  ? "w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 border-gray-700"
                  : "w-full px-4 py-2 border rounded-lg bg-white text-gray-900 border-gray-300"
              }
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className={
                darkMode
                  ? "w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 border-gray-700"
                  : "w-full px-4 py-2 border rounded-lg bg-white text-gray-900 border-gray-300"
              }
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={darkMode ? "py-6 text-center text-sm text-indigo-300" : "py-6 text-center text-sm text-gray-600"}>
        &copy; {new Date().getFullYear()} Abdirahmaan. All rights reserved.
      </footer>
    </div>
  );
};

export default MainPage;
