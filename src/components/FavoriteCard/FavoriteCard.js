<script src="http://localhost:8097"></script>
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './FavoriteCard.styles'

const FavoriteCard = ({ friendship }) => {

    return (
        <View style={styles.card}>
            <View
                style={styles.cardDetails}
            >
                <Text style={[styles.text, styles.name]}>{friendship.friend.name}</Text>
                <Text style={[styles.text, styles.description]}>{friendship.friend.description}</Text>
            </View>
            
        </View>
    )
}

export default FavoriteCard
