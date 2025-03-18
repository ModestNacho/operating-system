import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PFVideo from '../assets/Process.mov'; // Adjust the relative path if needed

const panels = [
  { id: 'red', colorClass: 'bg-red-500' },
  { id: 'orange', colorClass: 'bg-orange-500' },
  { id: 'green', colorClass: 'bg-green-500' },
  { id: 'blue', colorClass: 'bg-blue-500' },
];

const ProjectContent = () => {
  const [clickedPanel, setClickedPanel] = useState(null);
  const redVideoRef = useRef(null);
  const panelRefs = useRef({});

  // Control the red panel's video playback based on whether it's clicked.
  useEffect(() => {
    if (redVideoRef.current) {
      if (clickedPanel === 'red') {
        redVideoRef.current.play();
      } else {
        redVideoRef.current.pause();
      }
    }
  }, [clickedPanel]);

  // Smoothly scroll to the clicked panel when it's clicked, or scroll to top if none are open.
  useEffect(() => {
    if (clickedPanel && panelRefs.current[clickedPanel]) {
      panelRefs.current[clickedPanel].scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (!clickedPanel) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [clickedPanel]);

  const handleClick = (panelId) => {
    setClickedPanel(clickedPanel === panelId ? null : panelId);
  };

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {panels.map((panel) => (
          <motion.div
            key={panel.id}
            ref={(el) => (panelRefs.current[panel.id] = el)}
            className={`rounded-xl shadow-xl cursor-pointer overflow-hidden ${panel.colorClass}`}
            layout
            onClick={() => handleClick(panel.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              aspectRatio: clickedPanel === panel.id ? '16/9' : '6/16',
              width: clickedPanel === panel.id ? '100%' : 'auto',
              gridColumn: clickedPanel === panel.id ? '1 / 5' : undefined,
              zIndex: clickedPanel === panel.id ? 10 : 1,
            }}
          >
            {panel.id === 'red' && (
              <motion.video
                ref={redVideoRef}
                src={PFVideo}
                loop
                muted
                playsInline
                // Do not autoPlay; playback is controlled via the ref and useEffect.
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  filter: clickedPanel === 'red' ? 'none' : 'blur(5px)',
                }}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;

// import React, { useRef } from 'react';
// import { motion, useScroll } from 'framer-motion';
// import Wave from '../assets/Wave.svg'; // Import the wave SVG

// // Correct relative paths for your icons
// import FramerIcon from '../assets/Tools/framer.svg';
// import FigmaIcon from '../assets/Tools/figma.svg';
// import BlenderIcon from '../assets/Tools/blender.svg';
// import ReactIcon from '../assets/Tools/react.svg';
// import ThreeIcon from '../assets/Tools/threejs.svg';
// import ZustandIcon from '../assets/Tools/zustand.svg';
// import TailwindIcon from '../assets/Tools/tailwind.svg';

// const ProjectContent = () => {
//   const tools = [
//     { icon: FramerIcon, name: 'Framer' },
//     { icon: FigmaIcon, name: 'Figma' },
//     { icon: BlenderIcon, name: 'Blender' },
//     { icon: ReactIcon, name: 'React' },
//     { icon: ThreeIcon, name: 'Three.js' },
//     { icon: ZustandIcon, name: 'Zustand' },
//     { icon: TailwindIcon, name: 'Tailwind' },
//   ];

//   // Scroll progress settings for the new section
//   const ref = useRef(null);
//   const { scrollXProgress } = useScroll({ container: ref });

//   return (
//     <div className="p-4">
//       {/* Centered content with padding */}
//       <div className="max-w-screen-lg mx-auto">
        
//         {/* Introduction Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="text-center py-12"
//         >
//           <h1 className="text-5xl font-bold mb-4">Building This Project, One Block at a Time</h1>
//           <p className="text-lg max-w-2xl mx-auto">
//             Watch as blocks of different sizes come together to form a larger shape, symbolizing how this project was built piece by piece, layer by layer.
//           </p>
//         </motion.div>

//         {/* Wave Separator */}
//         <div className="w-full my-12">
//           <img src={Wave} alt="Wave" className="w-full h-auto" />
//         </div>

//         {/* Tools Section with larger blocks and even spacing */}
//         <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
//           {tools.map((tool, index) => (
//             <div key={index} className="relative flex justify-center items-center">
//               {/* Yellow block (background) with inner shadow */}
//               <div 
//                 className="absolute rounded-[13px] bg-[#F4CA41]" 
//                 style={{
//                   width: '110%', // Making the yellow block slightly bigger than the white block
//                   height: '110%', // Adjusting height similarly
//                   padding: '10px',  // Adds more padding for visibility
//                   boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)', // Inner shadow
//                 }}
//               ></div>

//               {/* White block (foreground) with drop shadow */}
//               <div 
//                 className="relative bg-white p-6 rounded-[13px] text-center flex items-center justify-center flex-col" 
//                 style={{
//                   zIndex: 1,
//                   width: '180px',  // Setting the size of the white block
//                   height: '220px', 
//                   boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', // Drop shadow for white part
//                 }}
//               >
//                 <img src={tool.icon} alt={`${tool.name} Icon`} className="mx-auto w-24 h-24" /> {/* Icon is larger now */}
//                 <p className="mt-4 text-lg font-semibold text-black">{tool.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Wave Separator */}
//         <div className="w-full my-12">
//           <img src={Wave} alt="Wave" className="w-full h-auto" />
//         </div>

//         {/* Scroll Progress Section */}
//         <div className="py-12">
//           <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="30"
//               pathLength="1"
//               className="indicator"
//               style={{ pathLength: scrollXProgress }}
//             />
//           </svg>

//           {/* Scrollable list section */}
//           <ul ref={ref} className="scroll-list overflow-x-scroll whitespace-nowrap mt-8">
//             <li className="inline-block w-40 h-40 bg-gray-200 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-300 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-400 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-500 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-600 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-700 m-2 rounded-lg"></li>
//             <li className="inline-block w-40 h-40 bg-gray-800 m-2 rounded-lg"></li>
//           </ul>
//         </div>

//         {/* Wave Separator */}
//         <div className="w-full my-12">
//           <img src={Wave} alt="Wave" className="w-full h-auto" />
//         </div>

//         {/* Challenges Section */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="my-12 text-center"
//         >
//           <h2 className="text-4xl font-bold mb-8">Challenges & Solutions</h2>
//           <p className="text-lg max-w-2xl mx-auto">
//             The biggest challenges were synchronizing window drag-and-drop with state management and making sure animations felt smooth without impacting performance. Creative problem-solving and testing helped us overcome these hurdles.
//           </p>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="text-center mt-16"
//         >
//           <button className="px-8 py-4 bg-[#FF6F61] text-white rounded-full text-xl">
//             Let's Collaborate on Your Next Project!
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ProjectContent;
