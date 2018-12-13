import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props){
  return (
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
  );
}

export default TicketList;
