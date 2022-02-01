import React from 'react';

function footer() {
  return <div className='footer'>
      <style jsx>{`
      .footer{
        background: rgb(8, 5, 31);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
      `}</style>
      <p>Yutthaphum @ 2022</p>
  </div>;
}

export default footer;
