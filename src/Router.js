import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Welcome from './components/welcome';
import MuscleGroups from './components/muscle-groups';
import Arms from './components/arms';
import Backs from './components/backs';
import Chest from './components/chest';
import Legs from './components/legs';
import Shoulders from './components/shoulders';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={Welcome}  hideNavBar={true} initial />
        <Scene key="musclegroups" component={MuscleGroups}  />
        <Scene key="arms" component={Arms}  />
        <Scene key="backs" component={Backs}  />
        <Scene key="chest" component={Chest}  />
        <Scene key="legs" component={Legs}  />
        <Scene key="shoulders" component={Shoulders}  />
       </Scene>
    </Router>
  );
};

export default RouterComponent;
