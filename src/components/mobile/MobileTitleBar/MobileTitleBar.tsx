import * as React from "react";
import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

import finalhome from '../../../assets/video/finalhome.mp4';
import './MobileTitleBar.scss';
import ReactPlayer from "react-player";

  
  export default function MobileTitle(props) {


    return (
        <div
        >
            <div className="mobile-player-container"/>
            <div className="mobile-title-bar">
                <span className='Mobile-NoUwU'>NoUwU</span>
                <span className='Mobile-Zone'>Zone</span>
            </div>
        </div>
    );
}
  