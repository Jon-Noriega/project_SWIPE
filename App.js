<script src="http://localhost:8097"></script>;

import React, { useState, useEffect } from "react";
import { SafeAreaView, LogBox } from "react-native";
import { Marketplace, Favorites, SignUpForm } from './src/screens/index';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './App.styles';

const usersURL = "http://localhost:3000/users/"

const App = () => {
  // LogBox.ignoreAllLogs()

  const Tab = createMaterialTopTabNavigator()
  
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
    fetch(usersURL, {
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
          localStorage.setItem("token", response.token)
          setUser(response.user),
          setAlerts(["User successsfully created!"])
        }
      })
  }

  return (
      <NavigationContainer>
        <SafeAreaView>
        </SafeAreaView>
          <Tab.Navigator initialRouteName="SignUpForm">

          <Tab.Screen
                name="SignUpForm"
                icon={faHeart}
            >
                {(props) => <SignUpForm
                    {...props}
                    signUp={signUp}
                    alerts={alerts}
                    />
                  }
              </Tab.Screen>

            <Tab.Screen
                name="Marketplace"
                icon={faHeart}
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
                icon={faHeart}
            >
                {(props) => <Favorites
                    {...props}
                    favorites={favorites}
                    />
                  }
            </Tab.Screen>
              
          </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App
