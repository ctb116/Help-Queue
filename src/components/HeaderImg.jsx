import React from 'react';
import "../styles/HeaderImg.css";

function HeaderImg(){
  return (
    <div>
      <style jsx>{`
        img {
          position: absolute;
          height: 220px;
          width: 400px;
          left: 30%;
        }
      `}</style>
    <img src={require('../static/media/helpDeskImg.jpg')}/>
    </div>
  );
}

export default HeaderImg;
