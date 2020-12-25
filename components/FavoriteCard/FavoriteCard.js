<script src="http://localhost:8097"></script>
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './FavoriteCard.styles'

const FavoriteCard = ({ friendship }) => {

    return (
        <View
            activeOpacity={1}
            style={styles.card}
        >
                <Image
                    style={styles.image}
                    source={{uri: friendship.friend.photo}}
                    resizeMode="cover"
                />
                <Text style={[styles.text, styles.name]}>{friendship.friend.name}</Text>
                <Text style={[styles.text, styles.description]}>{friendship.friend.description}</Text>
        </View>
)}

export default FavoriteCard