import React from 'react';
import HeaderImg from './HeaderImg';
import NavBarLinks from './NavBarLinks';
import "../styles/HeaderContainer.css";

function HeaderContainer(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #a9b8c0;
          }
        `}</style>
      <HeaderImg/>
      <img className="headerBackgroundImg" src={require('../static/media/headerBackgroundImg.jpg')}/>
      <h1 className="headerTitle">Help Queue</h1>
      <NavBarLinks/>
    </div>
  );
}

export default HeaderContainer;
