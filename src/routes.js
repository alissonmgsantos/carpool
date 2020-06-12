import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Splash from './screens/Splash';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, animationEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
