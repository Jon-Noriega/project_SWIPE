<script src="http://localhost:8097"></script>

import React from 'react'
import { View } from 'react-native'
import { Marketplace, Favorites } from '../index'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Caption, Button } from "react-native-paper"


const Home = ({ user, users, favorites, setUser, setFavorite, navigation }) => {

    const Tab = createMaterialTopTabNavigator()

    const handleLogout = () => {
        navigation.navigate("Log In")
        setUser({})
        setFavorite([])
    }

    return (
        <>
        <NavigationContainer independent={true}>
            <Tab.Navigator>

                <Tab.Screen
                    name="Marketplace"
                >
                    {(props) => <Marketplace
                        {...props}
                        user={user}
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
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>

        <View>
            <Button
                title
                onPress={handleLogout}
            >
                <Caption>Logout</Caption>
            </Button>
        </View>
    </>
    )
}

export default Home
