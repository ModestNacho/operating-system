import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TimeLapse from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/PF-Full2.mov';
import AboutMe from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/AboutMeSketch.mov';
import Wave from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Wave.svg'; 
import ProjectContent from './ProjectContent'; // Import the Project Content

const InternetContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home'); // State to track active page

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigateToPage = (page) => {
    setActivePage(page); // Update the active page
  };

  return (
    <div className={`window-content ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F5ECDA] text-black'} w-full h-full overflow-y-auto p-4 relative transition-colors duration-300`}>
      
      {/* Conditional Rendering Based on Active Page */}
      {activePage === 'home' && (
        <>
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`rounded-lg p-8 flex flex-col justify-center ${isDarkMode ? 'bg-[#333333]' : 'bg-[#ddd]'}`}>
              <h1 className="text-6xl font-bold">How This Project Was Made</h1>
              <p className="text-lg mt-4 max-w-xl">
                Dive into the process behind building this project, from concept to code.
              </p>
              <button 
                onClick={() => navigateToPage('project')} // Navigates to project
                className="mt-8 px-6 py-2 bg-[#9153f4] text-white rounded-full text-lg self-start"
              >
                View Project
              </button>
            </div>
            <div className={`rounded-lg p-4 flex items-center justify-center ${isDarkMode ? 'bg-[#B1D044]' : 'bg-[#B1D044]'}`}>
              <video src={TimeLapse} autoPlay loop muted className="w-full h-full object-cover rounded-md"></video>
            </div>
          </div>

          {/* SVG Wave Divider */}
          <div className="w-full mt-8">
            <img src={Wave} alt="Wave" className="w-full h-auto" />
          </div>

          {/* Flipped Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className={`rounded-lg p-4 flex items-center justify-center ${isDarkMode ? 'bg-[#B1D044]' : 'bg-[#B1D044]'}`}>
              <video src={AboutMe} autoPlay loop muted className="w-full h-full object-cover rounded-md"></video>
            </div>

            <div className={`rounded-lg p-8 flex flex-col justify-center ${isDarkMode ? 'bg-[#333333]' : 'bg-[#ddd]'}`}>
              <h1 className="text-6xl font-bold">More About Me</h1>
              <p className="text-lg mt-4 max-w-xl">
                Learn more about my journey, skills, and what drives me as a developer.
              </p>
              <button 
                onClick={() => navigateToPage('about')}
                className="mt-8 px-6 py-2 bg-[#9153f4] text-white rounded-full text-lg self-start"
              >
                Learn More
              </button>
            </div>
          </div>
        </>
      )}

      {/* Project Page */}
      {activePage === 'project' && <ProjectContent />}  {/* Renders Project Content */}

      {/* Floating Sticky Navigation Bar */}
      <div className="sticky bottom-0 left-0 w-full flex justify-center p-4 z-10">
        <div className="bg-[#333333] flex items-center space-x-4 p-4 rounded-lg shadow-lg">
          <button 
            onClick={() => navigateToPage('home')} // Navigates to the home page
            className="bg-black text-white p-2 rounded-lg"
          >
            <span className="text-2xl font-bold">B.</span>
          </button>
          {/* Conditional Rendering of the Navigation Buttons */}
          {activePage === 'home' ? (
            <>
              <button className="bg-[#444444] text-white p-2 rounded-lg border border-[#F3CB41]">
                <span className="text-lg">Projects</span>
              </button>
              <button className="bg-[#444444] text-white p-2 rounded-lg">
                <span className="text-lg">About Me</span>
              </button>
              <button className="bg-[#444444] text-white p-2 rounded-lg">
                <span className="text-lg">Contact</span>
              </button>
            </>
          ) : activePage === 'project' ? (
            <>
              <button className="bg-[#444444] text-white p-2 rounded-lg border border-[#F3CB41]">
                <span className="text-lg">Process</span>
              </button>
              <button className="bg-[#444444] text-white p-2 rounded-lg">
                <span className="text-lg">Tools</span>
              </button>
              <button className="bg-[#444444] text-white p-2 rounded-lg">
                <span className="text-lg">Challenges</span>
              </button>
            </>
          ) : null}

          <div
            onClick={toggleDarkMode}
            className="relative w-[80px] h-[40px] bg-white rounded-lg cursor-pointer p-1 shadow-inner"
          >
            <motion.div
              className="absolute top-1 bottom-1 w-[50%] bg-[#F3CB41] rounded-lg shadow-lg"
              initial={false}
              animate={{ x: isDarkMode ? 'calc(100% - 20%)' : '0%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetContent;
