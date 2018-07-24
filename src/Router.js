import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/welcome';
import MuscleGroups from './components/muscle-groups';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={Welcome}  hideNavBar={true} initial />
        <Scene key="musclegroups" component={MuscleGroups}  />
       </Scene>
    </Router>
  );
};

export default RouterComponent;
