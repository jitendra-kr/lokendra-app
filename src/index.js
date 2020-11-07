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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


ReactDOM.render(
  <ErrorBoundary>

    <Router history={createBrowserHistory()}>
      <Switch>
      <Route path="/" component={App} />
      </Switch>
    </Router>
  </ErrorBoundary>,
    document.getElementById('root'),
  );
