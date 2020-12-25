/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

<script src="http://localhost:8097"></script>
import React from "react"
import { SignUpForm, Marketplace, Favorites } from './components'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import styles from './App.styles'

const App = () => {
  
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Marketplace">
          <Stack.Screen name="Marketplace" component={Marketplace} />
          <Stack.Screen name="Sign Up" component={SignUpForm} />
          <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
