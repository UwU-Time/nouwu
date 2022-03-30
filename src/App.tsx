import * as React from 'react';
import { useState, useCallback, useRef } from 'react';
import './App.scss';

import MobileConsole from './components/mobile/MobileConsole/MobileConsole';
import MovieHolder from './components/mobile/MovieHolder/MovieHolder';
import MobileTitle from './components/mobile/MobileTitleBar/MobileTitleBar';
import ReactPlayer from 'react-player';
import usePictureInPicture, { ExtendedHTMLVideoElement } from 'react-use-pip';

interface Props {
  videoRef: React.RefObject<ReactPlayer>;
  usePictureInPicture: () => void;
}

function App(): JSX.Element {
  // handle click for picture in picture in movie holder
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);

  const videoRef = useRef<ReactPlayer>(null);

  const usePictureInPicture = () => {
    if (videoRef.current) {
      setIsPictureInPicture(!isPictureInPicture);
    }
  } 
  
  
  return (
      <div 
        className="main"
        style={{
          backgroundColor: '#131313',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <MobileTitle />
        <MovieHolder videoRef={videoRef} isPictureInPicture/>
        <MobileConsole usePictureInPicture={usePictureInPicture}/>
        {/* <CSSTitleBar />
        <VideoChannel /> */}
      </div>
  );
}

export default App;
