import * as React from 'react';
import { useState, useCallback } from 'react';
import './App.scss';

import { ViewProvider } from './contexts/ViewContext';
import MobileConsole from './components/mobile/MobileConsole/MobileConsole';
import MovieHolder from './components/mobile/MovieHolder/MovieHolder';
import MobileTitle from './components/mobile/MobileTitleBar/MobileTitleBar';


function App() {

  
  
  return (
    <ViewProvider>
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
        <MovieHolder />
        <MobileConsole />
        {/* <CSSTitleBar />
        <VideoChannel /> */}
      </div>
    </ViewProvider>
  );
}

export default App;
