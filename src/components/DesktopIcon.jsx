import React from 'react';
import Draggable from 'react-draggable';

function DesktopIcon({ icon, name, onDoubleClick }) {
  return (
    <Draggable>
      <div className="flex flex-col items-center cursor-pointer p-2 w-fit">
        <div className="flex flex-col items-center" onDoubleClick={onDoubleClick}>
          <img src={icon} alt={`${name} Icon`} className="w-16 h-16" draggable="false" />
          <p className="text-center text-sm mt-2">{name}</p>
        </div>
      </div>
    </Draggable>
  );
}

export default DesktopIcon;


// import React, { useState, useEffect } from 'react';
// import Draggable from 'react-draggable';

// function DesktopIcon({ icon, name, onDoubleClick }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);

//   useEffect(() => {
//     // Check if the device is mobile using the touch event
//     const checkMobile = () => {
//       if ('ontouchstart' in window || navigator.maxTouchPoints) {
//         setIsMobile(true);
//       }
//     };

//     checkMobile();
//   }, []);

//   const handleTouchStart = () => {
//     setTouchStart(Date.now());
//   };

//   const handleTouchEnd = () => {
//     const touchDuration = Date.now() - touchStart;
//     if (touchDuration > 500) { // 500ms for long press
//       onDoubleClick(); // Trigger window open on long press
//     }
//   };

//   return (
//     <Draggable>
//       <div className="flex flex-col items-center cursor-pointer p-2 w-fit">
//         <div
//           className="flex flex-col items-center"
//           onDoubleClick={onDoubleClick} // Double click for desktop
//           onTouchStart={isMobile ? handleTouchStart : null} // Long press for mobile
//           onTouchEnd={isMobile ? handleTouchEnd : null} // Long press for mobile
//         >
//           <img src={icon} alt={`${name} Icon`} className="w-16 h-16" draggable="false" />
//           <p className="text-center text-sm mt-2">{name}</p>
//         </div>
//       </div>
//     </Draggable>
//   );
// }

// export default DesktopIcon;
