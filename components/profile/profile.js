import React from 'react';
import { useTranslation } from 'next-i18next'
import {FaGithub,FaGitlab,FaLine} from 'react-icons/fa';

function Profile() {

    const { t, i18n } = useTranslation();

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
            height: 650px;
            background: transparent;
            background-size: cover;
            overflow: hidden;
        }
        .banner-con{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 650px;
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
        .banner-text h1{
            font-size: xxx-large;
            color: darkgoldenrod;
            cursor:pointer;
        }
        .banner-text h1 a{
            margin-top:30px;
            padding: 0 1rem;
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
                 <h2>{t('profile.title')}</h2>
                  <p>
                  {t('profile.person')}
                  </p>
                  <p>
                  {t('profile.address')}
                  </p>
                  <p>
                  {t('profile.mobile')}
                  </p>
                  <p>
                  {t('profile.email')}
                  </p>
                  <a href='#' className='banner-btn'>{t('profile.btn')}</a>
                  <h1>
                    <a href='https://github.com/YutthaphumSeekiaw?tab=repositories'>
                    <FaGithub></FaGithub>
                    {/* <BsGithub/> */}
                    </a>
                    <a href='http://line.me/ti/p/~yutthaphumbo'>
                    <FaLine/>
                    </a>
                    <a href='https://gitlab.com/yutthaphum'>
                    <FaGitlab/>
                    </a>
                  </h1>
            </div>      
          </div>
      </div>
  </div>;
}

export default Profile;
