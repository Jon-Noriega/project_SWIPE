<script src="http://localhost:8097"></script>;

import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { LogInForm, SignUpForm, Home } from './src/screens/index';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usersURL = "http://localhost:3000/users/";

const App = () => {
  LogBox.ignoreAllLogs()

  const Stack = createStackNavigator()
  
  const [users, setUsers] = useState([])
  const [favorites, setFavorites] = useState([])
  const [user, setUser] = useState({})
  const [alerts, setAlerts] = useState([])
  
  console.log("TEST 6: App", users)
  
  useEffect(() => AsyncStorage.clear(), [])
  
  const getUsers = (user) => {

    AsyncStorage.getItem("token")
    .then(token => {
      fetch(usersURL, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(users => {
        if(user.userType === "Recruiter"){
          let recruiterCards = users.filter(account => account.userType === "Candidate")
          setUsers(recruiterCards)
        }
        // console.log("TEST 7: Recruiter Cards", recruiterCards)
        else {
          let candidateCards = users.filter(account => account.userType === "Recruiter")
          setUsers(candidateCards)
        }
      })
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
            setUser(response.user)
            setAlerts(["User successsfully created!"])
            setFavorites(response.friendships)
          }
        })
  }

  const removeFavorite = (friendshipID) => {
        
    AsyncStorage.getItem("token")
    .then(token => {
        fetch(`http://localhost:3000/friendships/${friendshipID}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
    })

    let newFavorites = favorites.filter(favorite => favorite.id !== friendshipID)
    return setFavorites(newFavorites)
}

  return (
      <NavigationContainer>

          <Stack.Navigator
            initialRouteName="Log In"
          >

            <Stack.Screen
                name="Log In"

                options={{
                  title: "freeAGENT",
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: 'whitesmoke',
                  },
                  headerTitleStyle: {
                    fontFamily: "Caveat-Bold",
                    fontSize: 40,
                    paddingHorizontal: 10
                  },
                  headerTintColor: '#212121',
                }}
                >
                {(props) => <LogInForm
                    {...props}
                    user={user}
                    setUser={setUser}
                    setUsers={setUsers}
                    getUsers={getUsers}
                    setFavorites={setFavorites}
                    alerts={alerts}
                    setAlerts={setAlerts}
                    />
                  }
            </Stack.Screen>

            <Stack.Screen
                name="Sign Up"

                options={{
                  title: "freeAGENT",
                  headerStyle: {
                    backgroundColor: 'whitesmoke',
                  },
                  headerTitleStyle: {
                    fontFamily: "Caveat-Bold",
                    fontSize: 40,
                    paddingHorizontal: 10
                  },
                  headerTintColor: '#212121',
                  headerBackTitleVisible: false
                }}
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
                name="Home"

                options={{
                  title: "freeAGENT",
                  headerStyle: {
                    backgroundColor: 'whitesmoke',
                  },
                  headerTitleStyle: { 
                    fontFamily: "Caveat-Bold",
                    fontSize: 40,
                    paddingHorizontal: 30
                  },
                  headerTintColor: '#212121',
                  headerBackTitleVisible: false
                }}
            >
                {(props) => <Home
                    {...props}
                    user={user}
                    users={users}
                    setUser={setUser}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    removeFavorite={removeFavorite}
                    />
                  }
            </Stack.Screen>

          </Stack.Navigator>

      </NavigationContainer>
  )
}

export default App
