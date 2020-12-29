<script src="http://localhost:8097"></script>;

import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Marketplace, Favorites } from './src/screens/index';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './App.styles';


const usersURL = "http://localhost:3000/users/"

const App = () => {

  const Tab = createMaterialTopTabNavigator()
  
  const [users, setUsers] = useState([])
  const [favorites, setFavorite] = useState([])
  
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
  
  return (
      <NavigationContainer>
        <SafeAreaView>
        </SafeAreaView>
          <Tab.Navigator initialRouteName="Marketplace">

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

{/* <Tab.Screen name="Favorites" component={Favorites} /> */}