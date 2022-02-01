import Head from 'next/head'
import { useEffect,useRef,useState } from 'react'
import BIRDS from 'vanta/dist/vanta.net.min.js'
import * as THREE from "three"

import Header from '../components/header/header'
import Profile from '../components/profile/profile'
import Skills from '../components/skill/skill'

import ScrollButton from '../components/buttonscoll/ScrollButton';
import { Content, Heading } from '../components/buttonscoll/Styles';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { StickyNav } from 'react-js-stickynav'

import Sty from '../styles/Home.module.css'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


export default function Home() {
  const { t, i18n } = useTranslation();
  
  const [vantaEffect,setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(
    () =>{
      if(!vantaEffect){
        setVantaEffect(BIRDS({el:vantaRef.current,
          THREE,
          //  color: 0x37415f,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfff33f,
           backgroundColor: 0xf0620,
          // points: "10.00",
          // maxDistance: "40.00",
          // spacing: "20.00",
        }))
      }
    return () => {
      if(vantaEffect) vantaEffect.destroy()
    }
    },[vantaEffect]

  )

  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          width: 100%;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          background: rgb(20 26 50);
          width: 100%;
        }
        .styl {
          padding-top: 80px;
          margin-top: 80px
        }
        .contrainner{
          max-width: 960px;
          margin: 0 auto;
        }
        .vanta-canvas{
          z-index: -2;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          font-size: 100px;
          background: orange;
          color: white;
          cursor: pointer;
          border-radius: 100px;
          border: none;
          box-shadow: 0 5px 10px #ccc;
          z-index: 3;
        }
        
        .back-to-top:hover {
          background: red;
        }

      `}</style>
    )
  }

  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   });
  // }, []);

  // // This function will scroll the window to the top 
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth' // for smoothly scrolling
  //   });
  // };
  
  return (
    <>
     <div ref={vantaRef}>
      <Head>
        <title>CV Yutthaphum Seekiaw</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.svg" />
      </Head>

      <Header></Header>
      {/* {style()}
      <StickyNav length='40'><Header></Header></StickyNav> */}
      <Profile></Profile>
      <Skills></Skills>
      

     
  
    </div>

    {/* <ScrollButton></ScrollButton> */}
    

    </>

  )
}
