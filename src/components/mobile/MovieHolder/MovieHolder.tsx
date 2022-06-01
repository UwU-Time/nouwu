import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import './MovieHolder.scss';
import { useScreen } from 'usehooks-ts';

import finalhome from '../../../assets/video/finalhome.mp4';

interface Props {
    videoRef: React.RefObject<ReactPlayer>;
    isPictureInPicture: boolean;
}

export default function MovieHolder({ videoRef, isPictureInPicture }: Props): JSX.Element {
     
    const screen = useScreen();
    const [isPlaying, setIsPlaying] = useState(false);
    const [ elWidth, setElWidth ] = useState(480);

    const screenWidth = screen ? screen.width : 'undefined';
    const screenHeight = screen ? screen.height : 'undefined';
    
    if (screenWidth !== 'undefined') {
        if (screenWidth > 380 && screenWidth <= 480 && elWidth !== 480) {
            setElWidth(480);
        } else if (screenWidth > 480 && screenWidth <= 640 && elWidth !== 640) {
            setElWidth(640);
        } else if (screenWidth > 640 && screenWidth <= 800 && elWidth !== 800) {
            setElWidth(800);
        } else if (screenWidth > 800 && screenWidth <= 1024 && elWidth !== 1024) {
            setElWidth(1024);
        } else if (screenWidth > 1024 && screenWidth <= 1280 && elWidth !== 1280) {
            setElWidth(1280);
        } else if (screenWidth > 1280 && screenWidth <= 1440 && elWidth !== 1440) {
            setElWidth(1440);
        } else if (screenWidth > 1440 && screenWidth <= 1600 && elWidth !== 1600) {
            setElWidth(1600);
        } else if (screenWidth > 1600 && screenWidth <= 1920 && elWidth !== 1920) {
            setElWidth(1920);
        }
    }

    return (
        <motion.div>
            <ReactPlayer
                pip={isPictureInPicture ? true : false}
                ref={videoRef}
                id={"mobi-react-player"}
                className="mobile-rp"
                url={finalhome} 
                playing={true} 
                loop={false}
                controls={true}
                width={elWidth} 
                height="fit-content" 
                muted={true}
                style={{
                    position: 'static',
                    marginTop: '60px',

                }}
            />

        </motion.div>
    );
}