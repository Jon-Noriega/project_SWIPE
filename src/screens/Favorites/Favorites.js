<script src="http://localhost:8097"></script>

import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FavoriteCard } from '../../components/index'

const Favorites = ({ favorites, removeFavorite }) => {

    const renderFriendships = () => {

        return favorites.map(favorite => {
            console.log("TEST 2: Favorites", favorite)
            return (
                <FavoriteCard favorite={favorite["friend"]} friendshipID={favorite.id} removeFavorite={removeFavorite}/>
            )            
        })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {renderFriendships()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favorites
