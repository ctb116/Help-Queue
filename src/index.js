import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Component/>
      </HashRouter>,
    document.getElementById('root')
  );
};

render(App);

serviceWorker.unregister();
