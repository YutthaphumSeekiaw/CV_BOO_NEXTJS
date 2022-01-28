import React from 'react';
import Image from 'next/image'
// import './banner.css'
// import { useTranslation } from 'react-i18next'
import profilepic from "../../public/profile.jpg"
// import ReactTypingEffect from 'react-typing-effect'

let bannerData = {
    title:"React Landing Page",
     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente cum ab laborum voluptatum atque alias sint ipsa? Saepe dolor sequi ex sint tenetur quaerat numquam magni aspernatur perspiciatis id?"
}

function Profile() {

    // const { t, i18n } = useTranslation();

    // const handleClickLang =(lang) => {
    //   i18n.changeLanguage(lang);
    // }
  return <div className='banner-bg' id='profile'>
      <style jsx>
          {`
          .contrainner{
            max-width: 960px;
            margin: 0 auto;
        }
        .banner-bg{
            height: 600px;
            background: transparent;
            background-size: cover;
            overflow: hidden;
        }
        .banner-con{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 600px;
        }
        .banner-text{
            margin-top: 300px;
            color: #fff;
            text-align: center;
        }
        .banner-btn{
            background: rgb(43, 74, 211);
            display: inline-block;
            padding: .5rem 2rem;
            text-decoration: none;
            color: #fff;
            border: 2px solid transparent;
            transition: 0.3s;
            margin-top: 1rem;
            border-radius: 5px;
            text-transform: uppercase;
        }
        .banner-btn:hover{
            background: transparent;
            border: 2px solid #fff;
            color: #fff;
        }
        
        @media screen and (max-width:480px) {
            .banner-text{
                padding: 0 2rem;
            }
        }
        
          `}
      </style>
      <div className='contrainner'>
          <div className='banner-con'>
              
              <div className='banner-text'>
              {/* <img src={profilepic} title="profile" className='profilepic'></img> */}
{/*               
                <img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' title='profile' className='profilepic'></img> 
               */}
                 {/* <ima src={profilepic} alt="profile"/> */}
                 {/* <Image
                    src={profilepic}
                    alt="Picture of the author"
                    width={400}
                    height={30}
                    boderRe
                    /> */}
                  <h2>Mr.Yutthaphum Seekiaw</h2>
                  <p>
                  {/* Address: 310 Moo.1 Buangung, Nampong, KhonKhan, 40140 Thailand */}
                  Date of birth: Fabruary 23 1991, Age: 30, Gender: Male 
                  </p>
                  <p>
                  Present Address: 260/305 Unio H Tiwanon, Bangkhen, Mueang Nonthaburi, Nonthaburi 10110 Thailand
                  </p>
                  <p>
                  Mobile: 0626983863
                  </p>
                  <p>
                  Email: yutthaphum_bo@hotmail.com
                  </p>
                  <a href='#' className='banner-btn'>Download CV</a>
              </div>
          </div>
      </div>
  </div>;
}

export default Profile;
