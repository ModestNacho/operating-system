// File: src/components/WebampPlayer.jsx
// import React, { useEffect } from 'react';

// const WebampPlayer = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/webamp@1.4.0/built/webamp.bundle.min.js';
//     script.type = 'module';
//     script.onload = () => {
//       // Instantiate Webamp with default skin (no custom skin)
//       const webamp = new Webamp({
//         initialTracks: [
//           {
//             metaData: {
//               artist: 'Artist', // Update as needed
//               title: 'DnB Mix 01',
//             },
//             url: '/src/assets/DnB%20Mix%2001.mp3',
//           },
//         ],
//         // Using default skin by not providing an initialSkin property
//       });
//       webamp.renderWhenReady(document.getElementById('winamp-container'));
//     };

//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       id="winamp-container"
//       style={{
//         width: '600px',
//         height: '400px',
//         position: 'relative',
//         pointerEvents: 'auto',
//         // Remove background color if it might interfere
//         // backgroundColor: 'rgba(255,255,255,0.1)',
//       }}
//     ></div>
//   );
// };

// export default WebampPlayer;