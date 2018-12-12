import React from 'react';
import "../styles/HeaderImg.css";

function HeaderImg(){
  return (
    <div>
      <style jsx>{`

      `}</style>
    <img className="HeaderImg" src={require('../static/media/helpDeskImg.jpg')}/>
    </div>
  );
}

export default HeaderImg;
