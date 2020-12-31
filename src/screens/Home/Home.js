<script src="http://localhost:8097"></script>

import React from 'react'
import { View } from 'react-native'
import { Marketplace, Favorites } from '../index'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Caption, Button } from "react-native-paper"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
            <Tab.Navigator
                // screenOptions={({ route }) => ({
                //     tabBarIcon: () => {
                //         if (route.name === 'Marketplace') {
                //             icon={faTimes}
                //         } else {
                //             icon={faHeart}
                //         }
                //         return <FontAwesomeIcon icon={icon}/>;
                //     },
                // })}
            >

                <Tab.Screen
                    name="Marketplace"
                    // options={{
                    //     tabBarIcon:() => <FontAwesomeIcon icon={faHeart}/>
                    // }}
                    // icon={faHeart}
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
                onPress={handleLogout}
                style={{paddingBottom: 10}}
            >
                <Caption>Logout</Caption>
            </Button>
        </View>
    </>
    )
}

export default Home
