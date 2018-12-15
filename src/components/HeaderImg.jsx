import React from 'react';

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
    <img src={require('../static/media/helpDeskImg.jpg')} alt="headerImg"/>
    </div>
  );
}

export default HeaderImg;
