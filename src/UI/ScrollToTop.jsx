import React, {useState} from 'react';
import "../Css/ScrollBtn.css";
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
      <button id="scroll-btn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
         <i class="fas fa-long-arrow-alt-up"></i> 
      </button>
  );
}
  export default ScrollButton;