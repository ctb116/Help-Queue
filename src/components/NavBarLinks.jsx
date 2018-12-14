import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBarLinks.css";

function NavBarLinks(){
  return (
    <div className="NavBarLinks">
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default NavBarLinks;
