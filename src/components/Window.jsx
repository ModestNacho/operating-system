import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import useStore from '../stores/windowsStore';
import InternetContent from '../contents/InternetContent'; 
import HttpsIcon from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/lock.svg'; 
import BackIcon from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/back.svg'; 
import MaximizeIcon from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Maximize.svg'; // Maximize icon
import MinimizeIcon from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Minimize.svg'; // Minimize icon
import CloseIcon from '/Users/shweb/Documents/Portfolio/OS/Operating-System/src/assets/Close.svg'; // Close icon

function Window({ windowId, children }) {
  const { closeWindow, minimizeWindow, maximizeWindow, windows } = useStore();
  const windowState = windows.find(win => win.id === windowId);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (windowState && !windowState.isMaximized) {
      const width = 800; // Window width
      const height = 600; // Window height

      const centerX = (window.innerWidth - width) / 2;
      const centerY = (window.innerHeight - height) / 2 - 300;

      setPosition({ x: centerX, y: centerY });
    }
  }, [windowState]);

  if (!windowState) return null;

  return (
    <Draggable
      handle=".window-header"
      disabled={windowState.isMaximized}
      position={windowState.isMaximized ? { x: 0, y: 0 } : position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
    >
      <motion.div
        className={`window bg-[#917433] border border-[#7a5c34] ${
          windowState.isMaximized ? 'fixed top-[40px] left-0 w-full h-[calc(100vh-40px)] rounded-none' : 'w-[800px] h-[600px] rounded-[20px] custom-shadow'
        }`}
      >
        {/* Window Header */}
        <div className="window-header bg-[#917433] text-white py-3 p-3 flex justify-between items-center rounded-t-[20px] border-b border-[#7a5c34]">
          
          {/* Back and Forward Icons (outside the address bar) */}
          <div className="flex items-center space-x-5">
            <img src={BackIcon} alt="Back Icon" className="w-4 h-4" />
            <img 
              src={BackIcon} 
              alt="Forward Icon" 
              className="w-4 h-4 transform rotate-180" 
            />
          </div>

          {/* Address Bar */}
          <div
            className={`flex-grow mx-4 flex items-center justify-start bg-[#FFE5AA] text-[#644F1F] rounded-[23px] px-4 py-2 shadow-inner transition-all duration-300`}
            style={{ 
              boxShadow: 'inset 0px 2px 2px rgba(0, 0, 0, 0.25)',  
            }}
          >
            {/* HTTPS Icon */}
            <img src={HttpsIcon} alt="Secure Icon" className="w-4 h-4 mr-2" />

            <span className="text-sm">localhost:shweb</span>
          </div>

          {/* New Button Icons */}
                  <div className="flex space-x-2">
          <button onClick={() => minimizeWindow(windowId)} className="neu-button flex justify-center items-center w-8 h-8">
            <img src={MinimizeIcon} alt="Minimize Icon" className="w-3 h-3" />
          </button>
          <button onClick={() => maximizeWindow(windowId)} className="neu-button flex justify-center items-center w-8 h-8">
            <img src={MaximizeIcon} alt="Maximize Icon" className="w-3 h-3" />
          </button>
          <button onClick={() => closeWindow(windowId)} className="neu-button flex justify-center items-center w-8 h-8">
            <img src={CloseIcon} alt="Close Icon" className="w-3 h-3" />
          </button>
        </div>
        </div>

        {/* Window Content */}
        <div className="window-content flex-grow w-full h-[calc(100%-55px)] overflow-hidden rounded-b-[20px]">
          {windowId === "Internet" ? <InternetContent /> : children}
        </div>
      </motion.div>
    </Draggable>
  );
}

export default Window;
