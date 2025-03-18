// File: src/components/PrinterIcon.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import your printer layers
import PrinterBack from '/src/assets/PrinterBack.svg';
import PrinterMiddle from '/src/assets/PrinterMiddle.svg';
import PrinterFront from '/src/assets/PrinterFront.svg';

// Import your PDF file (this will resolve to the proper URL)
import ResumePDF from '/src/assets/BassimShweRes-1.pdf';

const PrinterIcon = () => {
  const [paperDown, setPaperDown] = useState(false);

  const handleClick = () => {
    setPaperDown(true);

    // After a 2-second delay, trigger the download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = ResumePDF;
      link.download = 'BassimShweRes-1.pdf'; // You can change the file name if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); // 2000 milliseconds = 2 seconds

    // After 3 seconds, reset the animation (bring the paper back up)
    setTimeout(() => {
      setPaperDown(false);
    }, 3000);
  };

  return (
    <div
      className="relative w-32 h-32 cursor-pointer"
      onClick={handleClick}
    >
      {/* Back layer */}
      <img
        src={PrinterBack}
        alt="Printer Back"
        className="absolute inset-0 w-full h-full object-contain z-0"
      />

      {/* Middle layer (paper) */}
      <motion.img
        src={PrinterMiddle}
        alt="Printer Paper"
        initial={{ y: -20 }}
        animate={paperDown ? { y: 65 } : { y: -5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-contain z-10"
      />

      {/* Front layer */}
      <img
        src={PrinterFront}
        alt="Printer Front"
        className="absolute inset-0 w-full h-full object-contain z-20"
      />
    </div>
  );
};

export default PrinterIcon;