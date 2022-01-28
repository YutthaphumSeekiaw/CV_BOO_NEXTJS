import React ,{useState} from 'react';
import { FiActivity,FiMenu,FiX } from "react-icons/fi";
// import { useTranslation } from 'react-i18next'
import profilepic from "../../public/profile.jpg"
import Image from 'next/image';
import Style from './header.module.css'

import { Link, Button, Element, Events, scrollToTop,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [click,setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }

//   const { t, i18n } = useTranslation();

//   const handleClickLang =(lang) => {
//     i18n.changeLanguage(lang);
//   }
  return (

    <div className="header">
       <style jsx>{`
              .contrainer{
                  max-width: 960px;
                  margin: 0 auto;
              }

              .header{
                  background: transparent;
                  height: 80px;
              }

              .header-con{
                  display: flex;
                  justify-content: space-between;
                  height: 80px;
                  align-items: center;
              }

              .logo-contrainer{
                  color: #fff;
                  text-decoration: none;
                  font-weight: bold;
                  font-size: 2rem;
              }

              .logo-contrainer a{
                  color: #fff;
                  text-decoration: none;
                  font-weight: bold;
                  font-size: 2rem;
              }

              .menu{
                  display: flex;
                  list-style-type: none;
              }

              .menu li{
                  padding-right: 2rem;
              }

              .menu li a{
                  text-decoration: none;
                  font-weight: bold;
                  color: #fff;
              }

              .menu li Link{
                  text-decoration: none;
                  color: #fff;
              }

              .mobile-menu{
                  display: none;
              }

              .profilepic{
                border-radius: 100%;
                width: 250px;
                margin-top: 30px;
              }

              .profile-con{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 200px;
                margin-top: 60px
              }
           
              @media  screen and (max-width:480px) {
                  .mobile-menu{
                      display: block;
                      color: #fff;
                      font-size: 2rem;
                  }
                  .header{
                      padding: 0 2rem;
                  }
                  .menu{
                      width: 100%;
                      height: auto;
                      display: flex;
                      position: fixed;
                      left: 100%;
                      opacity: 0;
                      flex-direction: column;
                      top: 64px;
                      transition: 0.5s ease;
                  }
                  .menu.active{
                      background: rgb(8, 5, 31);;
                      left: 0;
                      opacity: 1;
                      z-index: 1;
                      align-content: center;
                      transition: 0.5s ease;
                      padding-left: 0;
                  }
                  .menu li{
                      padding-right: 0;
                  }
                  .menu-link{
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 10vw;
                      padding: 10px 0;
                  }

              }
      `}</style>

       <div className='contrainer'>
        <div className='header-con'>
          <div className='logo-contrainer'>
            <a href='#'>CV <FiActivity/></a>
          </div>
          <ul className={click?"menu active":"menu"}>
          <li className='menu-link' onClick={closeMobileMenu}>
               {/* <Link  to="banner" spy={true} smooth={true} offset={50} duration={500} href='#banner' onClick={closeMobileMenu}>Home</Link> */}
               <a href='#profile' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>Profile</a>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
            <a href='#skills' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>Skills</a>
               {/* <Link  to="content" spy={true} smooth={true} offset={50} duration={500} href='#content' onClick={closeMobileMenu}>Skill</Link> */}
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
            <a href='#skills' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>Experience</a>
               {/* <Link  to="content" spy={true} smooth={true} offset={50} duration={500} href='#content' onClick={closeMobileMenu}>Skill</Link> */}
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
            <a href='#skills' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>Education</a>
               {/* <Link  to="content" spy={true} smooth={true} offset={50} duration={500} href='#content' onClick={closeMobileMenu}>Skill</Link> */}
            </li>
            {/* <li className='menu-link' onClick={closeMobileMenu}>
               <Link to="calltoaction" spy={true} smooth={true} offset={50} duration={500} href='#calltoaction' onClick={closeMobileMenu}>{t('header.contract')}</Link>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
               <button onClick={() => handleClickLang('en')}>en</button>
               <button onClick={() => handleClickLang('th')}>th</button>
            </li> */}
            {/* <li className='menu-link' onClick={closeMobileMenu}>
               <a href='#'>Blog</a>
            </li> */}
             <li className='menu-link' onClick={closeMobileMenu}>
            <a href='#skills' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>EN</a>
            <a>  |  </a>
            <a href='#skills' onClick={scrollToTop} spy={true} smooth={true} offset={50} duration={500}>TH</a>
                </li>
            
          </ul>
          <div className='mobile-menu' onClick={handleClick}>
            {click?(<FiX/>):(<FiMenu/>)}
          </div>
         
   
        </div>

        <div className='profile-con'>
              <Image
                className={Style.profilepic}
                src={profilepic}
                alt="profile"
                width={248}
                height={248}
              />
          </div>

      </div>


    </div>
  )
}

export default header;
