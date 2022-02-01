import React, {useState,useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(true)
const [scollh, setScollh] = useState(0)

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
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

// const handleScroll = () => {
//     console.log('scrolled!')
//   }

//   useEffect(() => {
//     document.body.addEventListener('scroll', handleScroll)
//     return () => document.body.removeEventListener('scroll', handleScroll)
//   }, [])
// useEffect(() => {
//   const container = document.querySelector('main')

//   const handleScroll = ({ target }) => {
//     setScrollTopValue(target.scrollTop)
//   }

//   container.addEventListener('scroll', handleScroll, false)
//   return () => container.removeEventListener('scroll', handleScroll)
// }, [])

// window.addEventListener('scroll', toggleVisible);

useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 300) {
    //     setVisible(true);
    //   } else {
    //     setVisible(false);
    //   }
    // });
	const scrolled = document.documentElement.scrollTop;
	setScollh(scrolled)
	if (scollh > 300){
	setVisible(true)
	}
	else if (scollh <= 300){
	setVisible(false)
	}
  }, [scollh]);

return (
	<Button>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'inline'}} />
	</Button>
);
}

export default ScrollButton;
