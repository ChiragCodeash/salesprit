import { IconArrowBigUpLinesFilled } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';

const BottomToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Function to check if the user has scrolled enough to display the button
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);
    
      const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 500, // You can adjust the duration as per your preference
          smooth: 'easeInOutQuad', // You can change the scrolling behavior
        });
      };
  return (
    <>
    <div className={` fixed bottom-5 right-5 bg-primary z-50 p-3 rounded-full cursor-pointer transition ease-in-out delay-100 hover:scale-90 ${!isVisible && "hidden"}`} onClick={scrollToTop}>
        <IconArrowBigUpLinesFilled height={25} width={25} className='text-light'/>
    </div>
    </>
  )
}

export default BottomToTop