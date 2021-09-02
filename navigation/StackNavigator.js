import React from 'react'
import { Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import List from '../screens/List'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Coins Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="My List"
                onPress={() => navigation.navigate('List')}
              />
            )
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="My List"
                onPress={() => navigation.navigate('List')}
              />
            )
          })}
        />

        <Stack.Screen
          name="List"
          component={List}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                title="Home"
                onPress={() => navigation.navigate('Coins Home')}
              />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
