<script src="http://localhost:8097"></script>

import { faVoicemail } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FavoriteCard } from '../../components/index'

const Favorites = ({ user, users, favorites, removeFavorite }) => {
    
    // console.log("USER:", user)

    const renderFriendships = () => {

        return favorites.map(favorite => {
            console.log("TEST 3: Friendships Map", favorite)
            return (
                <FavoriteCard favorite={favorite["friend"]} key={favorite.id} removeFavorite={removeFavorite}/>
            )            
        })
        
        // return favorites.map((favorite, key) => {
        //     return map(favorite, (friend, key) => {
        //         return (
        //             <FavoriteCard friend={friend} key={friend.id} removeFavorite={removeFavorite}/>
        //         )
        //     })
        //     // console.log("TEST 5 - Friendships Map", favorites)
        // })
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
