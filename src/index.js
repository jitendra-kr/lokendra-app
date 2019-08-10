import React from 'react';
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
