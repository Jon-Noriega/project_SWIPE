<script src="http://localhost:8097"></script>

import React from 'react'
import { View } from 'react-native'
import { Marketplace, Favorites } from '../index'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Caption, Button } from "react-native-paper"
import Icon from 'react-native-vector-icons/FontAwesome'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


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

                        // options={{
                        //     tabBarIcon:() => <PersonPinIcon />
                        // }}
                        // icon={<PersonPinIcon />}
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
                    style={{ 
                        // fontFamily: "Caveat-Bold",
                        // color: "#0048e8",
                        paddingBottom: 10
                    }}
                >
                    <Caption>Logout</Caption>
                </Button>

            </View>
        </>
    )
}

export default Home
