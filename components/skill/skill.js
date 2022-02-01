import React from 'react';
// import './content.css'

function Skills() {
  return <div className='containner' id="skills">
      <style jsx>{
          `
          .containner{
            max-width: 960px;
            margin: 0 auto;
        }
        .content-con{
            margin: 1em 0;
            display: flex;
            justify-content: space-between;
        }
        .content-text{
            color: #fff;
            text-align: center;
        }
        .skills-con{
            display:grid;
            grid-template-columns:repeat(2,1fr);
        }
        .skills-item{
          border: 2px solid #333;
          padding: 2rem;
          color:#fff;
          margin: 0 1rem;
        }
        .skills-item:hover{
            background: rgb(20,26,50);
        }
        .skills-item h3{
          text-align: center;
        }
    
        @media screen and (max-width:480px) {
            .skills-con{
                display:grid;
                grid-template-columns:1fr;
            }
            .skills-item{
                margin: 1rem;
            }
        }

          `
      }</style>
      <div className='content-text'>
          <h2>Skills</h2>
      </div>
      <section className='skills-con'>
          <div className='skills-item'>
              <h3>Font-end</h3>
              <h4>Language</h4>
              <p>
              - html<br></br>
              - css<br></br>
              - javascript<br></br>
                - razor<br></br>
                - jquery<br></br>
              </p>
              <h4>Framework and Build up</h4>
              <p>
              - reactjs<br></br> 
              - nextjs<br></br>
              - vuejs<br></br>
              - nuxtjs<br></br>
              - vite<br></br>
              - asp.net<br></br>
              </p>
          </div>
          <div className='skills-item'>
              <h3>Back-end</h3>           
              <h4>Language</h4>
              <p>           
              - C#<br></br>
              </p>
              <h4>Framework</h4>
              <p>           
              - .net<br></br>
              - .net core<br></br>
              </p>
              <h4>Source Control</h4>
              <p>           
              - git<br></br>
              - svn<br></br>
              - github<br></br>
              - gitlab<br></br>
              </p>
              <h4>Server</h4>
              <p>                
              - iis<br></br>
              </p>
              <h4>Database</h4>
              <p>           
              - sql server<br></br>
              - oracle<br></br>
              </p>
          </div>
      </section>
  </div>;
}

export default Skills;
