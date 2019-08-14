import React from 'react';
import { createBrowserHistory } from "history";
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Components
 */
import App from './components/App';
import ProductDetail from "./components/ProductDetail";

/**
 * CSS
 */
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={ProductDetail}/>
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
