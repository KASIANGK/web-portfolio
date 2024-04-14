// video dark mode simple

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from '../Navbar/Navbar';
// import './Home.css';
// import darkVideo from '../../assets/Home/videodark.mp4'
// import lightVideo from '../../assets/Home/video.mp4'

// const Home = () => {
//   const darkMode = useSelector(state => state.dark.darkMode);

//   return (
//     <div className={`home ${darkMode ? 'dark' : ''}`}>
//       <Navbar />
//       <div className="content">
//         {darkMode ? (
//           <video src={darkVideo} autoPlay loop muted />
//         ) : (
//           <video src={lightVideo} alt="Light Image" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;








// video dark mode synchro

// import React, { useRef, useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from '../Navbar/Navbar';
// import './Home.css';
// import darkVideo from '../../assets/Home/videodark.mp4';
// import lightVideo from '../../assets/Home/video.mp4';

// const Home = () => {
//   const darkMode = useSelector(state => state.dark.darkMode);
//   const [videoTime, setVideoTime] = useState(0); 

//   const darkVideoRef = useRef(null);
//   const lightVideoRef = useRef(null);

//   // sauvegarder le moment de la vidéo lorsqu'elle est en cours de lecture
//   useEffect(() => {
//     const saveVideoTime = () => {
//       if (darkMode) {
//         if (darkVideoRef.current) {
//           setVideoTime(darkVideoRef.current.currentTime);
//         }
//       } else {
//         if (lightVideoRef.current) {
//           setVideoTime(lightVideoRef.current.currentTime);
//         }
//       }
//     };

//     if (darkMode) {
//       if (darkVideoRef.current) {
//         darkVideoRef.current.addEventListener('timeupdate', saveVideoTime);
//       }
//     } else {
//       if (lightVideoRef.current) {
//         lightVideoRef.current.addEventListener('timeupdate', saveVideoTime);
//       }
//     }

//     return () => {
//       if (darkMode) {
//         if (darkVideoRef.current) {
//           darkVideoRef.current.removeEventListener('timeupdate', saveVideoTime);
//         }
//       } else {
//         if (lightVideoRef.current) {
//           lightVideoRef.current.removeEventListener('timeupdate', saveVideoTime);
//         }
//       }
//     };
//   }, [darkMode]); 

//   // restaurer le moment de la vidéo lorsqu'elle est chargée
//   useEffect(() => {
//     if (darkMode) {
//       if (darkVideoRef.current) {
//         darkVideoRef.current.currentTime = videoTime;
//       }
//     } else {
//       if (lightVideoRef.current) {
//         lightVideoRef.current.currentTime = videoTime;
//       }
//     }
//   }, [darkMode]); 

//   return (
//     <div className={`home ${darkMode ? 'dark' : ''}`}>
//       <Navbar />
//       <div className="content">
//         {darkMode ? (
//           <video ref={darkVideoRef} src={darkVideo} autoPlay loop muted />
//         ) : (
//           <video ref={lightVideoRef} src={lightVideo} autoPlay loop muted />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;










import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import './HomeDark.css';
import darkVideo from '../../assets/Home/Automatic.mp4';
import lightVideo from '../../assets/Home/light.mp4';

const Home = () => {
  const darkMode = useSelector(state => state.dark.darkMode);
  const [videoTime, setVideoTime] = useState(0); 

  // références de réacteur pour les éléments vidéo
  const darkVideoRef = useRef(null);
  const lightVideoRef = useRef(null);

  // sauvegarder le moment de la vidéo lorsqu'elle est en cours de lecture
  useEffect(() => {
    const saveVideoTime = () => {
      if (darkMode) {
        if (darkVideoRef.current) {
          setVideoTime(darkVideoRef.current.currentTime);
        }
      } else {
        if (lightVideoRef.current) {
          setVideoTime(lightVideoRef.current.currentTime);
        }
      }
    };

    if (darkMode) {
      if (darkVideoRef.current) {
        darkVideoRef.current.addEventListener('timeupdate', saveVideoTime);
      }
    } else {
      if (lightVideoRef.current) {
        lightVideoRef.current.addEventListener('timeupdate', saveVideoTime);
      }
    }

    return () => {
      if (darkMode) {
        if (darkVideoRef.current) {
          darkVideoRef.current.removeEventListener('timeupdate', saveVideoTime);
        }
      } else {
        if (lightVideoRef.current) {
          lightVideoRef.current.removeEventListener('timeupdate', saveVideoTime);
        }
      }
    };
  }, [darkMode]); 

  // restaurer le moment de la vidéo lorsqu'elle est chargée
  useEffect(() => {
    const adjustedTime = Math.floor(videoTime) + 1;

    if (darkMode) {
      if (darkVideoRef.current) {
        darkVideoRef.current.currentTime = adjustedTime;
      }
    } else {
      if (lightVideoRef.current) {
        lightVideoRef.current.currentTime = adjustedTime;
      }
    }
  }, [darkMode]); 

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      <div className={`content ${darkMode ? 'dark' : ''}`}>
        {darkMode ? (
          <video ref={darkVideoRef} src={darkVideo} autoPlay loop muted preload="auto" />
        ) : (
          <video ref={lightVideoRef} src={lightVideo} autoPlay loop muted preload="auto" />
        )}
      </div>
      <div className={`presentation ${darkMode ? 'dark' : ''}`}>
          <div className={`presentation-txt ${darkMode ? 'dark' : ''}`}>
            <p>Hello! Je suis Kasia - Web Developer passionné et un créatif visuel intrépide.</p>
            <p>Avec une expérience solide en tant que graphiste, je jongle avec les pixels et les lignes de code pour créer des expériences en ligne mémorables. </p>
            <p>De Photoshop à Blender, je m'aventure dans toutes les dimensions du design pour donner vie à des projets uniques et captivants.</p> 
            <p>Explorez mon univers en cliquant ci-dessous pour en savoir plus !</p>
          </div>
      </div>
    </div>
  );
};

export default Home;

