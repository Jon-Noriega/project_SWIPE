/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

<script src="http://localhost:8097"></script>
import React from "react"
import { Marketplace, Favorites } from './components'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import styles from './App.styles'

const App = () => {
  
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="freeAGENT">
          <Stack.Screen name="freeAGENT" component={Marketplace} />
          <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
