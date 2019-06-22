import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './Store';
import Login from './login';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Route path="" exact component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
