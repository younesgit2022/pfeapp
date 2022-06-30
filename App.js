import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maps from './screens/Maps/Maps';
import LoginScreen from './screens/Login/Login';
import Profile from './screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>

      
    </NavigationContainer>
  );
};