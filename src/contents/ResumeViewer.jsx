// File: src/contents/ResumeViewer.jsx
import React from 'react';
import ResumePDF from '/src/assets/BassimShweRes-1.pdf'; // Adjust the path if needed

const ResumeViewer = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src={ResumePDF}
        title="Resume Viewer"
        width="100%"
        height="100%"
        className="border-0"
      />
    </div>
  );
};

export default ResumeViewer;