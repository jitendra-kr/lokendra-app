import React from 'react';

import { withRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../../components';
// import { Header } from '../../components';

const App = (props) => {
  return (
    <div>
      {/* <Header
        appName="conduit"
        currentUser="jimmy" /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default withRouter(App);