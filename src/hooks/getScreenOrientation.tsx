import {useState, useEffect} from 'react';




export default function useScreenOrientation() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);

  useEffect(() => {
    const handleOrientationChange= () => setOrientation(window.screen.orientation.type);

    // Add event listener
    window.addEventListener('orientationchange', handleOrientationChange);

    // Remove event listener
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
}


