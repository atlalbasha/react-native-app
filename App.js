import React from 'react'
import { CoinsProvider } from './component/CoinsContext'
import StackNavigator from './navigation/StackNavigator'

export default function App() {
  return (
    <CoinsProvider>
      <StackNavigator />
    </CoinsProvider>
  )
}

{
  /* <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Home}
      >
        <Stack.Screen name="Root" component={Tabs} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          screenOptions={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer> */
}
