import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <scene key="root">
        <scene key="login" component={LoginForm} title="Please Login" />
       </scene>
    </Router>
  );
};

export default RouterComponent;
