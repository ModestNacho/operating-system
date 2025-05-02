import React from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';

const SideNav = ({ activePage, onNavigate, onToggleDarkMode, isDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'project', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'profile', label: 'About Me', icon: <FaUser /> },
  ];

  return (
    <aside className={`sticky top-0 left-0 h-full w-[80px] flex flex-col justify-between items-center py-8 overflow-y-auto ${
      isDarkMode
        ? 'bg-[#1a1a1a] border-gray-700'
        : 'bg-[#EBE2D1] border-gray-300'
    }`}>
      {/* Navigation buttons */}
      <nav className="flex flex-col gap-6 items-center"> {/* Increased gap from 4 to 6 */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200
              ${activePage === item.id 
                ? 'bg-[#9153f4] text-white shadow-md' 
                : `text-gray-700 hover:bg-gray-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`
              }`}
          >
            <span className={`text-2xl ${activePage === item.id ? 'text-white' : isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              {item.icon}
            </span>
          </button>
        ))}
      </nav>

      {/* Dark mode toggle */}
      <div className="mb-4">
        <button
          onClick={onToggleDarkMode}
          className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200 border-2
            ${isDarkMode 
              ? 'border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400' 
              : 'border-gray-700 text-gray-700 hover:border-gray-900 hover:text-gray-900'
            }`}
        >
          <span className="text-2xl">
            {isDarkMode ? <LuSunMedium /> : <FaMoon />}

          </span>
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
