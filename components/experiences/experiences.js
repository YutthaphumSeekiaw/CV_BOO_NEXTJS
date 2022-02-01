import React from 'react';
// import './content.css'

function Skills() {
  return <div className='containner' id="experiences">
      <style jsx>{
          `
          .containner{
            max-width: 960px;
            margin: 0 auto;
        }
        .content-text{
            color: #fff;
            text-align: center;
            margin-top: 80px;
        }
        .content-con{
            display: flex;
            justify-content: space-between;
        }
        .content-con:first-child, .content-con:last-child{
            padding: 5rem 0;
        }
        .content-l img{
            width: 100%;
            border-radius: 10px;
        
        }
        .content-r{
            padding: 2rem;
            text-align: left;
        }
        .content-r h3{
            color:#fff;
        }
        .content-r p{
            color:#fff;
        }
        .content-l h3{
            color:#fff;
        }
        .content-l p{
            color:#fff;
        }
        
        @media screen and (max-width:480px) {
            .content-con{
                flex-direction: column;
            }
            .content-l{
                padding: 0 1rem;
            }
            .content-con:nth-child(2) .content-r{
              order: 1;
            }
            .content-r h3{
                color:#fff;
            }
            .content-r p{
                color:#fff;
            }
            .content-l h3{
                color:#fff;
            }
            .content-l p{
                color:#fff;
            }
        }

          `
      }</style>
      <div className='content-text'>
          <h2>Experiences</h2>
      </div>
      <section className='content-con'>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' title='dev'></img> 
          </div>
          <div className='content-r'>
              <h3>Some title 1</h3>
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia nam, excepturi quas corporis laboriosam perspiciatis autem nihil! Deleniti rerum nisi labore nostrum quisquam delectus facere soluta ab alias iusto?
              </p>
          </div>
      </section>
      <section className='content-con'>
      <div className='content-r'>
              <h3>Some title 2</h3>
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia nam, excepturi quas corporis laboriosam perspiciatis autem nihil! Deleniti rerum nisi labore nostrum quisquam delectus facere soluta ab alias iusto?
              </p>
          </div>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' title='dev'></img> 
          </div>
         
      </section>
      <section className='content-con'>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' title='dev'></img> 
          </div>
          <div className='content-r'>
              <h3>Some title 3</h3>
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae mollitia nam, excepturi quas corporis laboriosam perspiciatis autem nihil! Deleniti rerum nisi labore nostrum quisquam delectus facere soluta ab alias iusto?
              </p>
          </div>
      </section>
  </div>;
}

export default Skills;
