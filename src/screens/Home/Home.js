<script src="http://localhost:8097"></script>

import React from 'react'
import { Marketplace, Favorites } from '../index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Home = ({ users, favorites, setFavorite }) => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator>

            <Tab.Screen
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
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default Home
