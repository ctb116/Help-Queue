import React, { Component }  from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import NewTicketControl from './components/NewTicketControl';
import Error404 from './components/Error404';
import TicketList from './components/TicketList';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderContainer/>
        <TicketList/>
      </div>
    );
  }
}

export default App;
