import React from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

export const Button = styled.div`
position: fixed;
width: 100%;
left: 80%;
bottom: 40px;
height: 40px;
font-size: 8rem;
z-index: 4;
cursor: pointer;
color: rgb(43, 74, 211);
`

function education() {
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };

  return <div className='edu-bg' id='education'>
      <style jsx>{`
                .contrainner{
                    max-width: 960px;
                    margin: 0 auto;
                }
                .edu-bg{
                    height: 650px;
                    background: transparent;
                    background-size: cover;
                    overflow: hidden;
                }
                .edu-con{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 650px;
                }
                .edu-text{
                    color: #fff;
                    text-align: center;
                }
                .edu-text h1{
                    font-size: xxx-large;
                    color: darkgoldenrod;
                    cursor:pointer;
                    margin-top:50px;
                }

      `}</style>



      <div className='contrainner'>
         <div className='edu-con'>
             <div className='edu-text'>
                 <h2>Education</h2>
                 <p>
                 2010-2013 - Bachelor of Accounting, Major of Business Computer Mahasarakham University GPA 3.12
                    <br></br>
                    <br></br>
                    <br></br>         
                   2007-2010 - Nampong Suksa School, Khon Kaen [Science-Mathematics program GPA 2.41]                        
                 </p>
                 <h1>
                 <Button>
                 <FaArrowCircleUp onClick={scrollToTop}/>
                 </Button>
                 </h1>
                 
             </div>
         </div>
      </div>
      </div>;
}

export default education;
