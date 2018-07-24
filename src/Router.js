import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/welcome';
import MuscleGroups from './components/muscle-groups';
import Arms from './components/arms';
import Back from './components/back';
import Chest from './components/chest';
import Shoulders from './components/shoulders';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={Welcome}  hideNavBar={true} initial />
        <Scene key="musclegroups" component={MuscleGroups}  />
        <Scene key="arms" component={Arms}  />
       </Scene>
    </Router>
  );
};

export default RouterComponent;
