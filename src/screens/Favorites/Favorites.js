<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FavoriteCard } from '../../components/index'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const favoritesURL = "http://localhost:3000/friendships/"

const Favorites = ({ favorites, removeFavorite }) => {
    
    // const [visible, setVisible] = useState(true)
    
    const renderFriendships = () => {
        return favorites.map(favorite => {
            return (
                <FavoriteCard favorite={favorite} key={favorite.id} removeFavorite={removeFavorite}/>
            )
        })
    }

    // const removeFavorite = (favorite, key) => {
        
    //     AsyncStorage.getItem("token")
    //     .then(token => {
    //         fetch(`favoritesURL${key}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         })
    //     })
        
    //     setVisible(false)

    //     let newFavorites = favorites.filter(fav => fav.id !== favorite.id)
    //     return setFavorite([newFavorites])
    // }

    return (
        <SafeAreaView>
            <ScrollView>
                {renderFriendships()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favorites
