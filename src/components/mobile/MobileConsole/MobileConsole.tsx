import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import './MobileConsole.scss';
import usePictureInPicture from 'react-use-pip';

import PipIcon from '../../../utilities/icons/PipIcon';
import Chat from '../../../utilities/icons/Chat';
import Feed from '../../../utilities/icons/Feed';
import Inbox from '../../../utilities/icons/Inbox';

export default function MobileConsole() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const {
        isPictureInPictureActive,
        isPictureInPictureAvailable,
        togglePictureInPicture,
      } = usePictureInPicture(videoRef)

    console.log(document.readyState);

    
    
    


    return (
        <>
            <div className="mobile-console-container">
                <div className="mobile-console-header">
                    <div className='mobile-menu'>
                        <button className='mobile-menu-pip-toggle' onClick={togglePIP}>
                            <span className='mobile-menu-pip-toggle-icon'>
                                <PipIcon/>
                            </span>
                        </button>
                        <button className='mobile-menu-chat'>
                            <span className='mobile-menu-chat-icon'>
                                <Chat/>
                            </span>
                        </button>
                        <button className='mobile-menu-feed'>
                            <span className='mobile-menu-feed-icon'>
                                <Feed/>
                            </span>
                        </button>
                        <button className='mobile-menu-inbox'>
                            <span className='mobile-menu-inbox-icon'>
                                <Inbox/>
                            </span>
                        </button>
                    </div>
                    <span className='mobile-console-title'></span>
                </div>
            </div>
            <div className="chat-expand-container">
            </div>
        </>
    );
}