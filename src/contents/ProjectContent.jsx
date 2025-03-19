import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PFVideo from '../assets/Process.mov'; // Adjust the relative path if needed

const panels = [
  { id: 'red', colorClass: 'bg-red-500', number: 1 },
  { id: 'orange', colorClass: 'bg-orange-500', number: 2 },
  { id: 'green', colorClass: 'bg-green-500', number: 3 },
  { id: 'blue', colorClass: 'bg-blue-500', number: 4 },
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
            className={`relative rounded-xl shadow-xl cursor-pointer overflow-hidden ${panel.colorClass}`}
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
            {/* Number Circle */}
            <div
              className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white text-black rounded-full"
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                zIndex: 20, // Ensures the circle appears above other elements
              }}
            >
              {panel.number}
            </div>

            {panel.id === 'red' && (
              <motion.video
                ref={redVideoRef}
                src={PFVideo}
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  filter: clickedPanel === 'red' ? 'none' : 'blur(5px)',
                }}
                className="w-full h-full object-cover rounded-xl"
              />
            )}

            {clickedPanel === panel.id && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[20%] bg-white bg-opacity-70 backdrop-blur-md p-4 rounded-b-xl"
              >
                <p className="text-black text-xl">TEST {panel.id} panel.</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
