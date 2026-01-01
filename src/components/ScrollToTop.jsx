import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


// this component let's the page scrolls to the top when the page 's changed on the browser
const ScrollToTop = () => {
        const {pathname} = useLocation();

        //this code means : 
        useEffect(()=>{

            window.scrollTo(0,0);

        }, [pathname])
        // when pathname = url = location of the page = the page changes 
        
        // then : scroll to the top of the page  
  
}

export default ScrollToTop
