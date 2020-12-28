<script src="http://localhost:8097"></script>;
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Marketplace, Favorites } from './src/screens/index';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './App.styles';
// import 'fontsource-roboto'
// import Paper from '@material-ui/core/Paper';
import { Provider as PaperProvider } from "react-native-paper"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


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
                name="Marketplace"
            >
                  {(props) => <Marketplace
                      {...props}
                      users={users}
                      />
                    }
              </Tab.Screen>
            <Tab.Screen name="Favorites" component={Favorites} />
          </Tab.Navigator>
      </NavigationContainer>

    // <PaperProvider>
    //   <Paper>
    //     <Tabs>
    //       <Tab icon={<PersonPinIcon />} label="CANDIDATES" /> 
    //       <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    //     </Tabs>
    //   </Paper>
    // </PaperProvider>

    // <PaperProvider>
    //   <Paper>
    //     <Tabs>
    //       <Tab icon={<PersonPinIcon />} label="CANDIDATES" /> 
    //       <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    //     </Tabs>
    //   </Paper>
    // </PaperProvider>  
      
  )
}

export default App
