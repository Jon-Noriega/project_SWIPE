<script src="http://localhost:8097"></script>

import React from 'react'
import { View } from 'react-native'
import { Marketplace, Favorites } from '../index'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Caption, Button } from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Home = ({ user, users, favorites, setUser, setFavorites, removeFavorite, navigation }) => {

    console.log("TEST 4: Home", favorites)

    const Tab = createMaterialTopTabNavigator()

    const handleLogout = () => {
        navigation.navigate("Log In")
        setUser({})
        setFavorites([])
    }

    return (
        <>
            <NavigationContainer independent={true}>

                <Tab.Navigator
                    tabBarOptions={{
                        showIcon: true,
                        labelStyle: { fontFamily: "Roboto-Medium" },
                        style: { backgroundColor: 'whitesmoke' }
                    }}
                >

                    <Tab.Screen
                        name="Marketplace"
                        options={{
                            tabBarIcon: () => <Icon name="account-group" color="#0048e8" size={25} />
                        }}
                    >
                        {(props) => <Marketplace
                            {...props}
                            user={user}
                            users={users}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            />
                        }
                    </Tab.Screen>

                    <Tab.Screen
                        name="Favorites"
                        options={{
                            tabBarIcon: () => <Icon name="heart-multiple" color="#e0b402" size={25} />
                        }}
                    >
                        {(props) => <Favorites
                            {...props}
                            user={user}
                            users={users}
                            favorites={favorites}
                            removeFavorite={removeFavorite}
                            />
                        }
                    </Tab.Screen>

                </Tab.Navigator>
                
            </NavigationContainer>

            <View>

                <Button
                    onPress={handleLogout}
                    style={{ 
                        paddingBottom: 10
                    }}
                >
                    <Caption
                        style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 15,
                            fontWeight: "600"
                        }}
                    >
                        Logout
                    </Caption>

                </Button>

            </View>
        </>
    )
}

export default Home
