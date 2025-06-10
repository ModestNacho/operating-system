import React from 'react';
import { motion } from 'framer-motion';

// Import all icons
import BlenderLogo from '../assets/BlenderLogo.svg';
import FramerLogo from '../assets/Framer.svg';
import ReactLogo from '../assets/React.svg';
import TailwindLogo from '../assets/tailwind.svg';
import ThreejsLogo from '../assets/threejs.svg';
import ZustandLogo from '../assets/Zustand.svg';

const books = [
  {
    title: 'Three.js',
    author: '3D Graphics Rendering',
    icon: ThreejsLogo,
    coverColor: '#B1D044'  // Original gold/yellow color
  },
  {
    title: 'React',
    author: 'UI Framework',
    icon: ReactLogo,
    coverColor: '#337CA0'  // Original blue color
  },
  {
    title: 'Tailwind CSS',
    author: 'Utility-First CSS',
    icon: TailwindLogo,
    coverColor: '#998080'  // Original mauve color
  },
  {
    title: 'Framer Motion',
    author: 'Animation Library',
    icon: FramerLogo,
    coverColor: '#FF8360'  // Original coral color
  },
  {
    title: 'Blender',
    author: '3D Modeling Software',
    icon: BlenderLogo,
    coverColor: '#9153F4'  // Original purple color
  },
  {
    title: 'Zustand',
    author: 'State Management',
    icon: ZustandLogo,
    coverColor: '#F3BD29'  // Original yellow/gold color
  }
];

const Book3D = ({ 
  title = "Sample Book", 
  author = "Description",
  coverColor = "#2075fc",
  icon = null
}) => {
  return (
    <motion.div
      className="relative w-[240px] h-[300px]"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Cover */}
        <motion.div
          className="absolute inset-0 rounded-sm"
          style={{
            backgroundColor: coverColor,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(35px)',
          }}
        >
          {/* Decorative vertical lines */}
          <div className="absolute left-0 top-0 h-full w-[10px] bg-black opacity-10" />
          <div className="absolute left-[6px] top-0 h-full w-[3px] bg-white opacity-20" />
          
          {/* Content positioning inside front cover */}
          <div className="p-6 text-white h-full relative overflow-hidden">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm mt-1 opacity-80">{author}</p>
            </div>
            {/* Icon display */}
            <img 
              src={icon} 
              alt={`${title} icon`} 
              className="w-40 h-40 object-contain absolute bottom-0 right-0 translate-x-10 translate-y-10"
              style={{ 
                filter: 'brightness(2) saturate(0%)',
                opacity: 0.4,
                mixBlendMode: 'soft-light'
              }}
            />
          </div>
        </motion.div>

        {/* Paper Edge - now centered using top positioning */}
        <motion.div
          className="absolute right-0 w-[35px] bg-gray-100"
          style={{
            height: '97%',
            top: '50%',
            transform: 'translateX(-3px) rotateY(90deg) translateY(-50%)',
            transformOrigin: 'right',
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Back Cover */}
        <motion.div
          className="absolute inset-0 rounded-sm"
          style={{
            backgroundColor: coverColor,
            filter: 'brightness(0.8)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(-1px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Bookshelf component that uses Book3D
export const Bookshelf = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center p-8">
      {books.map((book, index) => (
        <Book3D
          key={index}
          title={book.title}
          author={book.author}
          icon={book.icon}
          coverColor={book.coverColor}
        />
      ))}
    </div>
  );
};

export default Book3D;