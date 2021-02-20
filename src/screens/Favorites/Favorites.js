<script src="http://localhost:8097"></script>

import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FavoriteCard } from '../../components/index'

const Favorites = ({ user, users, favorites, removeFavorite }) => {
    
    // const renderFriendships = () => {
        
    //     return favorites.map(favorite => {
    //         console.log("TEST 5 - Friendships Map", favorite)
    //         return (
    //             <FavoriteCard favorite={favorite} key={favorite.id}/>
    //         )
    //     })
    // }

    const renderFriendships = (current) => {
        users.filter(user => user === current)
        console.log("TEST 5 - User Map", user)
                // users.map(user => {
                //     return (
                //         <FavoriteCard user={user} key={user.id} removeFavorite={removeFavorite}/>
                //     )
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
