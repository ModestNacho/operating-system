import React, { useEffect } from 'react';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import useStore from './stores/windowsStore';
import StickyNote from './components/StickyNote'; 
import useKeyboardSounds from './components/UseKeyboardSounds';

import PCIcon from '/src/assets/PC Icon.svg';
import FolderIcon from '/src/assets/Folder Icon.svg';
import FileIcon from '/src/assets/File Icon.svg';
import InternetIcon from '/src/assets/Internet Icon.svg';
import BackgroundVector from '/src/assets/Backdrop Cube.svg';

// Import the ResumeViewer component (for your resume window)
import ResumeViewer from './contents/ResumeViewer';

// Import the animated PrinterIcon
import PrinterIcon from './components/PrinterIcon';

function App() {
  const openWindow = useStore((state) => state.openWindow);

  useKeyboardSounds();

  useEffect(() => {
    openWindow({ id: 'Internet', name: 'Interwebs' });
  }, []);

  const handleOpenWindow = (iconName) => {
    openWindow({ id: iconName, name: iconName });
  };

  return (
    <div className="bg-[#FFC643] min-h-screen relative">
      <Taskbar />

      {/* Desktop icons */}
      <div className="desktop pt-[70px] h-full flex flex-col items-start p-4 space-y-6 relative z-10">
        <DesktopIcon
          icon={InternetIcon}
          name="Interwebs"
          onDoubleClick={() => handleOpenWindow('Internet')}
        />
        {/* <DesktopIcon
          icon={PCIcon}
          name="PC"
          onDoubleClick={() => handleOpenWindow('PC')}
        /> */}
        {/* <DesktopIcon
          icon={FolderIcon}
          name="Folder"
          onDoubleClick={() => handleOpenWindow('Folder')}
        /> */}
        <DesktopIcon
          icon={FileIcon}
          name="Resume"
          onDoubleClick={() => handleOpenWindow('Resume')}
        />
      </div>

      {/* Printer icon */}
      <div className="absolute top-20 right-10 z-10">
        <PrinterIcon />
      </div>

      <div className="absolute top-20 right-72 z-20">
        <StickyNote />
      </div>

      {/* Windows */}
      <div className="relative z-20">
        <Window windowId="Internet">
          <p>This is the Internet window content.</p>
        </Window>
        <Window windowId="PC">
          <p>This is the PC window content.</p>
        </Window>
        <Window windowId="Folder">
          <p>This is the Folder window content.</p>
        </Window>
        <Window windowId="Resume">
          <ResumeViewer />
        </Window>
      </div>

      {/* Background vector */}
      <img
        src={BackgroundVector}
        alt="Background Vector"
        className="fixed bottom-0 right-0 w-[800px] h-[800px] pointer-events-none z-0"
      />
    </div>
  );
}

export default App;