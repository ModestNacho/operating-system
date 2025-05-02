import React, { useState, useEffect } from 'react';
import SmolWave from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/SmolWave.svg';
import Me0 from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Me0.jpg';
import Me1 from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Me1.jpg';
import Me2 from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Me2.jpg';
import Me3 from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/me3.jpg';
import Me4 from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Me4.jpg';

const ProfileContent = ({ isDarkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [Me0, Me1, Me2, Me3, Me4];

  useEffect(() => {
    let timer;
    if (currentImage < images.length - 1) {
      // Faster transitions for first images
      timer = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImage((prev) => prev + 1);
          setIsTransitioning(false);
        }, 100);
      }, 350); // 1 second between transitions
    }
    return () => clearInterval(timer);
  }, [currentImage]);

  const renderMedia = () => {
    return (
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Profile ${index}`}
            className={`absolute w-full h-full object-cover rounded-md transition-all duration-300 ${
              currentImage === index
                ? 'opacity-100 transform-none filter-none'
                : 'opacity-0 transform translate-x-full blur-sm'
            } ${isTransitioning ? 'scale-105 blur-sm' : ''}`}
            style={{
              transform: isTransitioning ? 'scale(1.05) translateX(5px)' : 'none',
              filter: isTransitioning ? 'url(#pixel-filter)' : 'none'
            }}
          />
        ))}
        {/* SVG Filter for pixel effect */}
        <svg className="hidden">
          <filter id="pixel-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" />
            <feDisplacementMap in="SourceGraphic" scale="20" />
          </filter>
        </svg>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-8">


          {/* Main Section */}
          <div className="rounded-lg p-8 flex flex-col justify-center aspect-[4/4]">
            <h1 className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h1>
            <p className={`text-lg mt-4 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Frontend Developer with a passion for creating intuitive user experiences
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Technical Skills</h3>
                <p className={`text-sm mt-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  React, Three.js, TailwindCSS, WebGL, Figma, UI/UX Design
                </p>
              </div>
              
              <div className={`rounded-lg p-6 ${
                isDarkMode 
                  ? 'bg-[#1f1f1f] hover:bg-[#2a2a2a]' 
                  : 'bg-[#eddebf] hover:bg-[#ede6eb]'
                } transition-colors cursor-pointer`}>
                <h3 className={`text-xl font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Experience</h3>
                <p className={`text-sm mt-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Frontend Development, 3D Graphics, Interactive Web Applications
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Wave Separator */}
          <div className="flex justify-start w-1/2 ml-[25%] my-4">
            <img src={SmolWave} alt="Wave" className="w-full h-auto" />
          </div>
        </div>

        {/* Fixed Right Section with Animated Images */}
        <div className="rounded-lg p-4 flex items-center justify-center bg-[#B1D044] aspect-[4/4.2] md:sticky md:top-4 overflow-hidden">
          {renderMedia()}
        </div>
      </div>
    </>
  );
};

export default ProfileContent;