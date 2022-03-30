// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEventListener, useOnClickOutside } from 'usehooks-ts'

// import './TitleBarWSearch.scss';


  
// export default function CSSTitleBar(): JSX.Element {
//     const clickRef = useRef(null)

//     const handleClickOutside = () => {
//         // Your custom logic here
//         setSlideOutComponent(false)
//     }

//     useOnClickOutside(clickRef, handleClickOutside)


//     const [isClicked, setIsClicked] = useState(false);
//     const [isActive, setIsActive] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);
//     const [slideOutComponent, setSlideOutComponent] = useState(false);

//     const useSlideOut= () => {
//         setSlideOutComponent(!slideOutComponent);
//         setIsClicked(!isClicked);
//     }


//     return (
//         <div
//             ref={clickRef}
//         >
//             <AnimatePresence>
//                 <div className="title-bar-w-search">
//                     <div className="header-container">
//                         {slideOutComponent && (
//                             <motion.div 
//                                 className="slide-out-container"
//                                 initial={{ 
//                                     opacity: 0,
//                                     x: -100,
//                                 }}
//                                 animate={{
//                                     opacity: 1,
//                                     x: 0,
//                                 }}
//                                 exit={{
//                                     opacity: 0,
//                                     x: -100,
//                                 }}
//                                 transition={{ type: "spring", bounce: 2, duration: 0.4, damping: 5 }}    
//                             >
//                                 <span className="slide-out-text">
//                                     Home | Roll | Inbox | Events | Settings
//                                 </span>
//                                 <input type="text" className="slide-out-search" placeholder="Search"/>
//                             </motion.div>
//                         )}
//                     </div>
//                     <span className='NoUwU'>NoUwU</span>
//                     <span className='Zone'>Zone</span>
//                     <div className="hamburger-icon" id="icon" onClick={useSlideOut}>
//                         <div className={isClicked ? "icon-1 a" : "icon-1" } id="a"></div>
//                         <div className={isClicked ? "icon-2 b" : "icon-2" } id="b"></div>
//                         <div className={isClicked ? "icon-3 c" : "icon-3" } id="c"></div>
//                         <div className="clear"></div>
//                     </div>
//                 </div>
//             </AnimatePresence>
//         </div>
//     );
// }
  export {};