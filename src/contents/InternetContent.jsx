import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TimeLapse from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/PF-Full2.mov';
import AboutMe from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/AboutMeSketch.mov';
import Wave from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Wave.svg'; 
import ProjectContent from './ProjectContent'; // Import the Project Content
import SideNav from '../components/SideNav'; // Import the SideNav component
import ProfileContent from './ProfileContent'; // Import the Profile Content

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
    <div className={`window-content ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F5ECDA] text-black'} w-full h-full overflow-y-auto transition-colors duration-300 rounded-b-[20px] relative flex`}>
      
      {/* Sticky Navbar */}
      <SideNav 
        activePage={activePage} 
        onNavigate={navigateToPage} 
        onToggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
      />
  
      {/* Content */}
      <div className="flex-1 p-4">
        {activePage === 'home' && (
          <>
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`rounded-lg p-8 flex flex-col justify-center ${isDarkMode ? 'bg-[#333333]' : 'bg-[#eddebf]'}`}>
                <h1 className="text-6xl font-bold">How This Project Was Made</h1>
                <p className="text-lg mt-4 max-w-xl">
                  Dive into the process behind building this project, from concept to code.
                </p>
                <button 
                  onClick={() => navigateToPage('project')}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pb-8">
              <div className={`rounded-lg p-4 flex items-center justify-center ${isDarkMode ? 'bg-[#B1D044]' : 'bg-[#B1D044]'}`}>
                <video src={AboutMe} autoPlay loop muted className="w-full h-full object-cover rounded-md"></video>
              </div>
  
              <div className={`rounded-lg p-8 flex flex-col justify-center ${isDarkMode ? 'bg-[#333333]' : 'bg-[#eddebf]'}`}>
                <h1 className="text-6xl font-bold">More About Me</h1>
                <p className="text-lg mt-4 max-w-xl">
                  Learn more about my journey, skills, and what drives me as a developer.
                </p>
                <button 
                  onClick={() => navigateToPage('profile')}  // Changed from 'about' to 'profile'
                  className="mt-8 px-6 py-2 bg-[#9153f4] text-white rounded-full text-lg self-start"
                >
                  Learn More
                </button>
              </div>
            </div>
          </>
        )}
  
        {activePage === 'project' && <ProjectContent isDarkMode={isDarkMode} />}
        {activePage === 'profile' && <ProfileContent isDarkMode={isDarkMode} />}
      </div>
    </div>
  );
};

export default InternetContent;
