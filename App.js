<script src="http://localhost:8097"></script>
import React, { useState, useEffect } from "react"
import { SafeAreaView } from "react-native"
import { SignUpForm, Marketplace, Favorites } from './components'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import styles from './App.styles'


const usersURL = "http://localhost:3000/users/"

const App = () => {

  const Tab = createMaterialTopTabNavigator()
  
  const [users, setUsers] = useState([])
  
  useEffect( () => {
    fetch(usersURL)
      .then(response => response.json())
      .then(users => setUsers(users))
  }, [])
  
  console.log(users, "TEST 1 - APP COMPONENT")
  
  return (
    <NavigationContainer>
      <SafeAreaView>
      </SafeAreaView>
        <Tab.Navigator initialRouteName="Marketplace">
          <Tab.Screen
              name="Marketplace">
                {(props) => <Marketplace
                    {...props}
                    users={users}
                    />
                  }
            </Tab.Screen>
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App
