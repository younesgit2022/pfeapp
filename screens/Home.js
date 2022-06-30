import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile/Profile'
import Maps from './Maps/Maps'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Home = () => {
  return (

     <Tab.Navigator screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
            height: 60,
          backgroundColor: "#f61e44"
        },
           
            
     
        tabBarLabelStyle : { fontWeight : "bold" , fontSize: 14 ,color : "white"},
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          
      }}>
    <Tab.Screen name="Maps" component={Maps}            
    options={{
        headerShown: false,
      tabBarLabel: 'Map',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="map" color="white" size={size} />
      ),
    }}
/>
    <Tab.Screen name="Profile" component={Profile}    options={{
        headerShown: false,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="md-person-sharp" color="white" size={size} />
      ),
    }}/>
  </Tab.Navigator>
    
  )
}

export default Home

const styles = StyleSheet.create({})