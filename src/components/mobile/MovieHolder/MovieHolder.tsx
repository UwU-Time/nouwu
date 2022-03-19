import * as React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import './MovieHolder.scss';

import useWindowDimensions from '../../../hooks/getWindowDimensions';
import finalhome from '../../../assets/finalhome.mp4';

export default function MovieHolder(props): JSX.Element {
     
    const { screenWidth, screenHeight } = useWindowDimensions();
    const [isPlaying, setIsPlaying] = useState(false);

    



    

    return (
        <motion.div>
            <ReactPlayer
                id={'mobi-react-player'}
                className="mobile-rp"
                url={finalhome} 
                playing={true} 
                loop={false}
                controls={true}
                width="fit-content" 
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