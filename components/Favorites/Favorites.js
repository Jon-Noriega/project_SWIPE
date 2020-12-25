<script src="http://localhost:8097"></script>
import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { FavoriteCard } from '../index'
import styles from './Favorites.styles'

const favoritesURL = "http://localhost:3000/friendships/"

const Favorites = () => {
    
    const [friendships, setFriendships] = useState([])

    useEffect( () => {
        fetch(favoritesURL)
            .then(response => response.json())
            .then(friendships => setFriendships(friendships))
    }, [])

    const renderFriendships = () => {
        return friendships.map(friendship => {
            return (
                <FavoriteCard friendship={friendship} key={friendship.id}/>
            )
        })
    }

    return (
        <View>
            <ScrollView>
                {renderFriendships()}
            </ScrollView>
        </View>
    )
}

export default Favorites