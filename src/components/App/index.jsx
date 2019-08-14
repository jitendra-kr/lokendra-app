import React from 'react';
import { withRouter} from 'react-router-dom';

import { Home } from '../../components';


const App = (props) => {
  return (
    <div>
      <Home appName="JP" />
    </div>
  )
}

export default withRouter(App);