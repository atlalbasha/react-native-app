/* import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Profile from '../screens/Profile'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../component/Card'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'darkorange'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-tie" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default Tabs
 */
