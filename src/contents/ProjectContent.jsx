import React, { useRef, useEffect, useState } from 'react';
import TimeLapse from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Process.mov';
import Wave from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Wave.svg';
import Blender from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Blender.png';
import Book3D from '../components/Book3D';

const Books = () => {
  const books = [
    { title: "Design Systems", author: "John Smith", coverColor: "#B1D044" },    // Yellow/Gold
    { title: "React Patterns", author: "Jane Doe", coverColor: "#337CA0" },      // Blue
    { title: "Web Animation", author: "Mike Johnson", coverColor: "#998080" },    // Mauve
    { title: "Three.js Journey", author: "Sarah Wilson", coverColor: "#FF8360" }, // Coral
    { title: "TypeScript Pro", author: "David Chen", coverColor: "#9153F4" },     // Purple
    { title: "Modern CSS", author: "Emma Taylor", coverColor: "#F3BD29" },        // Yellow/Gold
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {books.map((book, index) => (
        <div key={index}>
          <Book3D {...book} />
        </div>
      ))}
    </div>
  );
};

const ProjectContent = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all section refs
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (techStackRef.current) observer.observe(techStackRef.current);

    return () => observer.disconnect();
  }, []);

  const renderMedia = () => {
    return (
      <div className="relative w-full h-full">
        <video 
          key="timelapse"
          src={TimeLapse} 
          autoPlay 
          loop 
          muted 
          className={`absolute w-full h-full object-cover rounded-md transition-all duration-700 ${
            activeSection === 'overview' ? 'opacity-100 transform-none' : 'opacity-0 translate-x-full'
          }`}
        />
        <img
          key="blender"
          src={Blender}
          alt="Blender Screenshot"
          className={`absolute w-full h-full object-cover rounded-md transition-all duration-700 ${
            activeSection === 'features' ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-full'
          }`}
        />
        <img
          key="blender2"
          src={Blender}
          alt="Blender Screenshot"
          className={`absolute w-full h-full object-cover rounded-md transition-all duration-700 ${
            activeSection === 'techstack' ? 'opacity-100 transform-none' : 'opacity-0 translate-y-full'
          }`}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-8">
          {/* Design Process Section */}
          <div 
            ref={overviewRef} 
            data-section="overview"
            className="rounded-lg p-8 flex flex-col justify-center aspect-[4/4]"
          >
            <h1 className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Design Process</h1>
            <p className={`text-lg mt-4 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From concept to implementation using modern design tools.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Planning with FigJam</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Collaborative brainstorming, workflow mapping, and comprehensive project documentation
                </p>
              </div>
              
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>UI/UX in Figma</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Interface design, interactive prototyping, and visual system development
                </p>
              </div>
            </div>
          </div>

          {/* Wave Separator 1 */}
          <div className="flex justify-start w-full ml-[0%] my-8">
            <img src={Wave} alt="Wave" className="w-full h-auto" />
          </div>

          {/* 3D Graphics Journey Section */}
          <div 
            ref={featuresRef}
            data-section="features" 
            className="rounded-lg p-8 flex flex-col justify-center aspect-[4/4]"
          >
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3D Graphics Journey</h2>
            <p className={`text-lg mt-4 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Exploring the world of 3D graphics and web technologies.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Blender to Web3D</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Transitioning from 3D modeling to Three.js and WebGL implementation
                </p>
              </div>
              
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Graphics Programming</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Understanding core graphics concepts through practical application
                </p>
              </div>
            </div>
          </div>

          {/* Wave Separator 2 */}
          <div className="flex justify-start w-full ml-[0%] my-8">
            <img src={Wave} alt="Wave" className="w-full h-auto" />
          </div>

          {/* Project Features Section */}
          <div 
            ref={techStackRef}
            data-section="techstack"
            className="rounded-lg p-8 flex flex-col justify-center aspect-[4/4]"
          >
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technology Stack</h2>
            <p className={`text-lg mt-4 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Key components and technologies powering this project.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>OS Interface</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  React-based operating system with responsive design and interactive elements
                </p>
              </div>
              
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3D Office Environment</h3>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Immersive workspace built with Three.js and modern web technologies
                </p>
              </div>
            </div>
          </div>

          {/* Final Wave Separator */}
          {/* <div className="flex justify-start w-1/2 ml-[25%] my-8">
            <img src={SmolWave} alt="Wave" className="w-full h-auto" />
          </div> */}
        </div>

        {/* Fixed Right Section */}
        <div className="rounded-lg p-4 flex items-center justify-center bg-[#B1D044] aspect-[4/4.2] md:sticky md:top-4 overflow-hidden">
          {renderMedia()}
        </div>
      </div>
      
      {/* Wave Separator before books */}
      <div className="flex justify-start w-full ml-[0%]">
        <img src={Wave} alt="Wave" className="w-full h-auto" />
      </div>
      
      {/* Books Section */}
      <div className="w-full bg-transparent">
        <Books />
      </div>
    </div>
  );
};

export default ProjectContent;