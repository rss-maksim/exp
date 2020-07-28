import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import { Navigation } from '../Navigation'
import { routes, IRoute } from '../../constants/routes'

import './App.scss'

const App = () => {
  return (
      <Router>
          <Navigation />

          {Object.values(routes).map(({ path, exact, name, component }: IRoute) => (
              <Route key={name} exact={exact} path={path} component={component} />
          ))}
      </Router>
  );
}

export default App
