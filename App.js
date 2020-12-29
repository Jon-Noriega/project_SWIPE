<script src="http://localhost:8097"></script>;

import React, { useState, useEffect } from "react";
import { SafeAreaView, LogBox } from "react-native";
import { SignInForm, SignUpForm, Home } from './src/screens/index';
import { PrivateRoute } from './src/components/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './App.styles';

const usersURL = "http://localhost:3000/users/"

const App = () => {
  // LogBox.ignoreAllLogs()

  const Stack = createStackNavigator()
  
  const [users, setUsers] = useState([])
  const [favorites, setFavorite] = useState([])
  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState([])
  
  useEffect( () => {
    fetch(usersURL)
      .then(response => response.json())
      .then(users => setUsers(users))
  }, [])
  
  useEffect( () => {
      fetch(`${usersURL}13`)
          .then(response => response.json())
          .then(user => setFavorite(user.friends))

  }, [])
  
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
          // AsyncStorage.setItem("token", response.token)
          setUser(response.user),
          setAlerts(["User successsfully created!"])
        }
      })
  }

  return (
      <NavigationContainer>
        <SafeAreaView>
        </SafeAreaView>

          <Stack.Navigator initialRouteName="SignInForm">

            <Stack.Screen
                // name="PrivateRoute"
                name="FREEAGENT"
            >
                {/* {(props) => <PrivateRoute
                    {...props}
                    component={Home}
                    users={users}
                    favorites={favorites}
                    setFavorite={setFavorite}
                    />
                  } */}
                {(props) => <Home
                    {...props}
                    users={users}
                    favorites={favorites}
                    setFavorite={setFavorite}
                    />
                  }
            </Stack.Screen>

            <Stack.Screen
                name="SignUpForm"
            >
                {(props) => <SignUpForm
                    {...props}
                    signUp={signUp}
                    alerts={alerts}
                    />
                  }
            </Stack.Screen>

            <Stack.Screen
                name="SignInForm"
            >
                {(props) => <SignInForm
                    {...props}
                    signUp={signUp}
                    alerts={alerts}
                    />
                  }
            </Stack.Screen>

          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

{/* <Tab.Screen
    name="Marketplace"
>
    {(props) => <Marketplace
        {...props}
        users={users}
        favorites={favorites}
        setFavorite={setFavorite}
        />
      }
</Tab.Screen>

<Tab.Screen
    name="Favorites"
>
    {(props) => <Favorites
        {...props}
        favorites={favorites}
        />
      }
</Tab.Screen> */}