<script src="http://localhost:8097"></script>
import React from 'react'
import { View, Image } from 'react-native'
import { shape, string } from 'prop-types'
import styles from './Card.styles'

const Card = ({ card }) => {

    console.log(card, "TEST 2 - CARD COMPONENT")

    return (
        <View
        activeOpacity={1}
        style={styles.card}
        >
            {card
                ?
                <Image
                style={styles.image}
                source={{uri: card.photo}}
                resizeMode="cover"
                />
                : null
            }
        </View>
)}

Card.propTypes = { 
    card: shape({
        // name: string,
        photo: string,
        // description: string,
        // project: string,
        // userType: string,
        // username: string
    })
}

export default Card