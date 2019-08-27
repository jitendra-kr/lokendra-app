import React from 'react';
import { createBrowserHistory } from "history";
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Components
 */
import App from './components/App';

/**
 * CSS
 */
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
      <Route path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
