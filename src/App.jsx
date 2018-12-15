import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import NewTicketControl from './components/NewTicketControl';
import Error404 from './components/Error404';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/" exact component={TicketList} />
          <Route path="/newticket/" component={NewTicketForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
