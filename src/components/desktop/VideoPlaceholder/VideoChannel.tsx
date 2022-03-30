// import * as React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import { motion, AnimatePresence } from "framer-motion";
// import './MainView.scss';
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

// import Splash from '../../../assets/video/finalhome.mp4';



// export default function VideoChannel(props) {
//   const [input, setInput] = useState('');
//   const [showEmojis, setShowEmojis] = useState(false);
//   const [chatElement, setChatElement] = useState(false);
//   const [inboxElement, setInboxElement] = useState(false);
//   const [feedElement, setFeedElement] = useState(false);

//   const useButtonClick = (e) => {
//     if (e.target.id === 'chat') {
//       setChatElement(!chatElement);
//       setInboxElement(false);
//       setFeedElement(false);
//     } else if (e.target.id === 'inbox') {
//       setChatElement(false);
//       setInboxElement(!inboxElement);
//       setFeedElement(false);
//     } else if (e.target.id === 'feed') {
//       setChatElement(false);
//       setInboxElement(false);
//       setFeedElement(!feedElement);
//     }
    
//   };

//   const domNode = useClickOutside(() => {
//     setChatElement(false);
//     setInboxElement(false);
//     setFeedElement(false);
//   });

//   const addEmoji = (e) => {
//     let sym = e.unified.split("-");
//     let codesArray = [];
//     sym.forEach((el) => codesArray.push("0x" + el));
//     let emoji = String.fromCodePoint(...codesArray);
//     setInput(input + emoji);
//   };
  

  
//   return (
//     <AnimatePresence>
//     <div className="video-channel"
//       ref={domNode}
//     >
//       <div className='video-base-container'>
//         <div className='video-whole-base'>
//           <ReactPlayer
//             className="react-player"
//             url={Splash} 
//             playing={true} 
//             loop={false}
//             controls={true}
//             width="fit-content" 
//             height="fit-content" 
//             muted={true}
//           />
          
//               {chatElement && (
//                 <motion.div 
//                   className='Dropdown'
//                   initial={{ 
//                     opacity: 0,
//                     y: -1,
//                   }}
//                   animate={{
//                       opacity: 1,
//                       y: 0,
//                       bounce: 25,
//                   }}
//                   exit={{
//                       opacity: 0,
//                       y: -100,
//                       duration: 1,
//                   }}
//                   damping={50}
//                   transition={{ type: "spring", bounce: 0, duration: 0.8 }}  
//                 >
//                   <div className='chat-history-elevation'>
//                     <div className='chat-history'>
//                       <p className='chat-history-textarea' placeholder='Type a message...'>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sodales neque sodales ut etiam sit. Sit amet mattis vulputate enim. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Facilisis volutpat est velit egestas dui id ornare. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Eget felis eget nunc lobortis. Blandit massa enim nec dui nunc. Risus quis varius quam quisque id. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Id semper risus in hendrerit gravida rutrum quisque non. Rhoncus dolor purus non enim. Pretium viverra suspendisse potenti nullam ac tortor. Ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a. Tincidunt augue interdum velit euismod in. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Platea dictumst quisque sagittis purus sit. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Aliquet eget sit amet tellus cras adipiscing enim. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Aliquet eget sit amet tellus cras adipiscing. Maecenas sed enim ut sem viverra. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Quis risus sed vulputate odio ut enim. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. In cursus turpis massa tincidunt dui ut ornare. Gravida cum sociis natoque penatibus et magnis. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Faucibus turpis in eu mi bibendum. Et leo duis ut diam quam nulla porttitor massa id. Tellus pellentesque eu tincidunt tortor aliquam. Suspendisse interdum consectetur libero id. Suspendisse ultrices gravida dictum fusce ut. Feugiat vivamus at augue eget arcu. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sodales neque sodales ut etiam sit. Magnis dis parturient montes nascetur ridiculus mus mauris. Volutpat diam ut venenatis tellus in metus. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Sit amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in. Amet porttitor eget dolor morbi non arcu risus. Viverra justo nec ultrices dui sapien. Dictum varius duis at consectetur. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Vitae tempus quam pellentesque nec nam aliquam sem. Orci porta non pulvinar neque laoreet. Lacus luctus accumsan tortor posuere ac ut consequat.
//                       </p>
//                     </div>
//                   </div>
//                   <div className='chat-input-elevation'>
//                     <div className='chat-input'>
//                       <textarea 
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         className='chat-input_component' 
//                         placeholder='Type a message...' 
//                         maxLength='260' 
//                         style={{ resize: "none"}}
//                       />
//                       <button className='chat-emoji-button' onClick={() => setShowEmojis(!showEmojis)}>
//                       </button>
//                         {showEmojis && (
//                           <span className='chat-input-emoji'>
//                             <Picker 
//                               className='emoji'
//                               set='google'
//                               onSelect={addEmoji}
//                               emojiTooltip={true}
//                               enableFrequentEmojiSort={true}
//                               theme='dark'
//                               perLine={5}
//                               emojiSize={20}
//                               sheetSize={32}
//                               style={{
//                                 position: "absolute",
//                                 zIndex: "1",
//                                 top: "-450px",
//                                 left: "0px",
//                                 color: "#56ff59",
//                                 width: "100%",
//                               }}
//                             />
//                           </span>
//                         )}
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             {inboxElement && (
//               <motion.div 
//                 className='Dropdown'
//                 initial={{ 
//                   opacity: 0,
//                   y: -1,
//                 }}
//                 animate={{
//                     opacity: 1,
//                     y: 0,
//                     bounce: 25,
//                 }}
//                 exit={{
//                     opacity: 0,
//                     y: -100,
//                     duration: 1,
//                 }}
//                 damping={50}
//                 transition={{ type: "spring", bounce: 0, duration: 0.8 }}
//               >
//                 <div className='inbox-messages-elevation'>
//                   <div className='inbox-messages'/>
//                 </div>
//               </motion.div>
//             )}
//             {feedElement && (
//               <motion.div 
//                 className='Dropdown'
//                 initial={{ 
//                   opacity: 0,
//                   y: -1,
//                 }}
//                 animate={{
//                     opacity: 1,
//                     y: 0,
//                     bounce: 25,
//                 }}
//                 exit={{
//                     opacity: 0,
//                     y: -100,
//                     duration: 1,
//                 }}
//                 damping={50}
//                 transition={{ type: "spring", bounce: 0, duration: 0.8 }}  
//               >
//                 <div className='feed-elevation'>
//                   <div className='feed-container'>
//                     <div className='feed-header'>

//                     </div>
//                     <div className='feed-body'>
//                       <div className='feed-body-elevation'>
//                         <div className='feed-body'>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//              )}
    
//           <div className='video-base-overlay'>
//             <div className='overlay-left'/>
//             <div className='overlay-top'/>
//             <div className='overlay-bottom'/>           
//           </div>
//           <div className='user-panel'>
//             <div className='UserPanel_Buttons'>
//               <button className='UserPanel_Button' onClick={useButtonClick}>
//                 <span id='inbox' className="Button-label">
//                     Inbox
//                 </span>
//               </button>
//               <button  className='UserPanel_Button' onClick={useButtonClick}>
//                 <span id='chat' className="Button-label">
//                   Chat
//                 </span>
//               </button>
//               <button className='UserPanel_Button' onClick={useButtonClick}>
//                 <span id='feed'className="Button-label">
//                   Feed
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </AnimatePresence>
    
//   );

  
// }
export {};