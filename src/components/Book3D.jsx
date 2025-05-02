import React from 'react';
import { motion } from 'framer-motion';

const Book3D = ({ 
  title = "Sample Book", 
  author = "Author", 
  coverColor = "#2075fc",
  rectangleColor = "rgba(255, 255, 255, 0.2)",
  rectangleCount = 2,
  rectangleWidth = "4px",
  rectangleGap = "8px",
  rectanglePosition = "left",
  rectangleOffset = "0px",
  rectangleHeight = "100%", // Control height of rectangles
  rectangleTopOffset = "0%", // Control vertical position from top
  rectangleDepth = "2px" // Control how much the rectangles stick out
}) => {
  const rectangles = Array.from({ length: rectangleCount });

  // Calculate position styles based on rectanglePosition
  const getPositionStyle = () => {
    switch(rectanglePosition) {
      case 'left':
        return { left: rectangleOffset };
    }
  };

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
          {/* Vertical Rectangles */}
          <div 
            className="absolute flex gap-[12px]" 
            style={{ 
              gap: rectangleGap,
              top: rectangleTopOffset,
              height: rectangleHeight,
              ...getPositionStyle()
            }}
          >
            {rectangles.map((_, index) => (
              <div
                key={index}
                style={{
                  width: rectangleWidth,
                  height: '100%',
                  backgroundColor: rectangleColor,
                  transform: `translateZ(${rectangleDepth})`,
                }}
                className="rounded-sm"
              />
            ))}
          </div>

          {/* Content positioning inside front cover */}
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm mt-2 opacity-80">{author}</p>
          </div>
        </motion.div>

        {/* Paper Edge - now centered using top positioning */}
        <motion.div
          className="absolute right-0 w-[35px] bg-gray-100" // Removed h-full to control height separately
          style={{
            height: '97%', // Adjust this value to control paper edge height
            top: '50%', // Centers vertically
            transform: 'translateX(-3px) rotateY(90deg) translateY(-50%)', // Added translateY for centering
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
            transform: 'translateZ(-1px)', // Adjust this to control book thickness
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Book3D;

/* Key Adjustments Guide:

Book Size:
- Change w-[200px] h-[300px] in main container className
- These control the overall dimensions of the book

3D Effect Intensity:
- Adjust perspective: '1000px' - larger = subtler effect
- Change rotation range in whileHover={{ rotateY: -30 }}

Book Thickness:
- Adjust translateZ values on front/back covers
- Modify paper edge width (w-[2px])

Hover Animation:
- Modify the duration and easing in transition={{ duration: 0.5, ease: "easeOut" }}

Colors:
- Front cover: bg-blue-500
- Back cover: bg-blue-600
- Paper edge: bg-gray-100

Content Positioning:
- Modify padding and margin in the content div
- Adjust text sizes and spacing with Tailwind classes

*/