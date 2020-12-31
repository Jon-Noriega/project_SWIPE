<script src="http://localhost:8097"></script>

import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FavoriteCard } from '../../components/index'
import styles from './Favorites.styles'

const Favorites = ({ favorites }) => {
    
    const renderFriendships = () => {
        return favorites.map(favorite => {
            return (
                <FavoriteCard favorite={favorite} key={favorite.id}/>
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
