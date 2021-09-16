import { createStackNavigator, NavigationContainer } from '@react-navigation/stack';
import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen  from './Login';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  
// const stackNavigationOptions = {
//     headerShown:false
// }

// const AppNatigator = createStackNavigator({
//         home:  {screen: home },
//         login: {screen: login }
// },
// {
//     defaultNavigationsOptions: stackNavigationOptions,
// });

// export default AppNatigator