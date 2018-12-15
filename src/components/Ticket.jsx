import React from "react";
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div className="color-toggle">
      <style jsx global>{`
          .color-toggle:hover {
            background-color: #f1f6f8;
          }
          `}</style>
        <hr/>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    );
  }

  Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string
  };

  export default Ticket;
