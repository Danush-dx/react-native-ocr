import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './Components/Home'
import Camera from './Components/Camera'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
