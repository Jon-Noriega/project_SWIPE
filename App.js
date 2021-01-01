<script src="http://localhost:8097"></script>;

import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { LogInForm, SignUpForm, Home } from './src/screens/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Title, Subheading, Paragraph, Caption } from "react-native-paper"
import styles from './App.styles';

const usersURL = "http://localhost:3000/users/"

const App = () => {
  LogBox.ignoreAllLogs()

  const Stack = createStackNavigator()
  
  const [users, setUsers] = useState([])
  const [favorites, setFavorite] = useState([])
  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState([])
  
  useEffect(() => AsyncStorage.clear(), [])

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then(token => {
        fetch(usersURL, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(users => setUsers(users))
      })
  }, [])
  
  const getUsers = () => {
    AsyncStorage.getItem("token")
      .then(token => {
        fetch(usersURL, {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(users => setUsers(users))
        })
  }

  const signUp = (user) => {
    return fetch(usersURL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
        .then(response => response.json())
        .then(response => {
          if(response.errors){
            setAlerts(response.errors)
          }
          else {
            AsyncStorage.setItem("token", response.token)
            setUser(response.user),
            setAlerts(["User successsfully created!"]),
            setFavorite(response.friends)
          }
        })
  }

  return (
      <NavigationContainer

        // style={{ 
        //   fontFamily: "Caveat-Bold",
        //   color: "#0048e8"
        // }}
      >

          <Stack.Navigator
            initialRouteName="Log In"

            // style={{ 
            //   fontFamily: "Caveat-Bold",
            //   color: "#0048e8"
            // }}
          >

            <Stack.Screen
                name="Log In"
                options={{ headerShown: false }}
            >
                {(props) => <LogInForm
                    {...props}
                    setUser={setUser}
                    setUsers={setUsers}
                    getUsers={getUsers}
                    setFavorite={setFavorite}
                    alerts={alerts}
                    setAlerts={setAlerts}
                    />
                  }
            </Stack.Screen>

            <Stack.Screen
                name="Sign Up"
            >
                {(props) => <SignUpForm
                    {...props}
                    signUp={signUp}
                    getUsers={getUsers}
                    alerts={alerts}
                    />
                  }
            </Stack.Screen>

            <Stack.Screen
                name="freeAGENT"
                options={{ headerBackTitleVisible: false }}
            >
                {(props) => <Home
                    {...props}
                    user={user}
                    users={users}
                    setUser={setUser}
                    favorites={favorites}
                    setFavorite={setFavorite}
                    />
                  }
            </Stack.Screen>

          </Stack.Navigator>

      </NavigationContainer>
  )
}

export default App
