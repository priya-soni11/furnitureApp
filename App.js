import React from 'react';
import SplashScreen from './screens/SplashScreen';
import AllNavigation from './navigation/AllNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AllNavigation />
    </NavigationContainer>
  );
};

export default App;
