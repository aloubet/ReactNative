import React, {useState} from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer, LogoTitle } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather}  from '@expo/vector-icons';
import  HomeApp  from './src/Home';
import  LoginApp  from './src/Login';
import  DetailsApp  from './src/Details';
import  IconsApp  from './src/Icons';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}




export default function App() {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
              tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                  backgroundColor: '#633689',
                },
                labelStyle: {
                  textAlign: 'center',
                },
                indicatorStyle: {
                  borderBottomColor: '#87B56A',
                  borderBottomWidth: 2,
                },
              }}>
          <Stack.Screen name="Home" component={HomeApp} 
           options={({ navigation, route }) => ({
            title: 'My home',
            tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
            headerStyle: {
              elevation: 0,
              shadowOpacity:0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: (
              <View style={{flex:1, flexDirection:'row', marginLeft:100}}>
                  <Image
                      source={{uri:"https://cdn.freelogovectors.net/wp-content/uploads/2020/11/freshworks-logo-768x154.png"}}
                      style={{width:110, height:18}}
                  />
              </View>
          ),
            headerLeft: () => (
              <Feather name='menu' size={22} color='#342E38' style={{marginLeft:15}}/>
            ),
            headerRight: () => (
              <Feather name='search' size={22} color='#342E38' style={{marginRight:15}} onPress={() => navigation.navigate('Details')}/>
            ),
          }) }/>
          <Stack.Screen name="Details" component={DetailsApp}  />
          <Stack.Screen name="Login" component={LoginApp} />
          <Stack.Screen name="Icons" component={IconsApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
