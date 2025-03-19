import React from 'react';
import { motion } from 'framer-motion';
import useStore from '../stores/windowsStore';
import CubeIcon from '../assets/Cube Taskbar.svg';
import WeatherIcon from '../assets/Weather.svg';
import CrossIcon from '../assets/Cross.svg'; // Import the Cross SVG
import Clock from './Clock';  // Import the Clock component

function Taskbar() {
  const { windows, minimizeWindow, closeWindow } = useStore();

  // Check if any window is maximized
  const isMaximized = windows.some(window => window.isMaximized);

  return (
    <motion.div
      animate={{
        height: isMaximized ? '40px' : '50px',
        borderRadius: isMaximized ? '0px' : '15px',
        top: isMaximized ? '0px' : '10px',
        left: isMaximized ? '0px' : '20px',
        right: isMaximized ? '0px' : '20px',
        backgroundColor: isMaximized ? '#000000' : 'rgba(0, 0, 0, 0.8)',
      }}
      className="fixed mx-auto max-w border-2 border-black/20 shadow-lg z-50 flex items-center justify-between p-4"
    >
      {/* Left-aligned icon */}
      <div className="flex items-center">
        <img src={CubeIcon} alt="Cube Taskbar Icon" className="h-8 w-8 mr-4" />
      </div>

      {/* Taskbar buttons for windows */}
      <div className="flex-grow flex items-center justify-center space-x-4">
        {windows.map(window => (
          <div
            key={window.id}
            className="flex items-center justify-between bg-[#917433] text-white rounded-[23px] px-4 py-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] min-w-[150px]"
          >
            <span className="text-sm font-medium">{window.name}</span>
            <button onClick={() => closeWindow(window.id)} className="ml-auto pl-4 pr-0">
              <img src={CrossIcon} alt="Close Window" className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Right-aligned live clock */}
      <div className="flex items-center">
        <img src={WeatherIcon} alt="Weather Taskbar Icon" className="h-8 w-8 mr-4" />
        <Clock />
      </div>
    </motion.div>
  );
}

export default Taskbar;
