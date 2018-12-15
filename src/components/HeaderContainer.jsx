import React from 'react';
import HeaderImg from './HeaderImg';
import NavBarLinks from './NavBarLinks';
import "../styles/HeaderContainer.css";

function HeaderContainer(){
  return (
    <div className="headerBackgroundBody">
      <style jsx>{`
        `}</style>
      <HeaderImg/>
      <img className="headerBackgroundImg" src={require('../static/media/headerBackgroundImg.jpg')} alt="background"/>
      <h1 className="headerTitle">Help Queue</h1>
      <NavBarLinks/>
    </div>
  );
}

export default HeaderContainer;
