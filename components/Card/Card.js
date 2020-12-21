<script src="http://localhost:8097"></script>
import React from 'react'
import { View, Image, ImageSourcePropType } from 'react-native'
import { shape, string } from 'prop-types'
import styles from './Card.styles'

const Card = ({ card }) => (

    <View
        activeOpacity={1}
        style={styles.card}
    >
        <Image
        style={styles.image}
        source={card.photo}
        resizeMode="cover"
        />
    </View>
)

Card.propTypes = { 
    card: shape({
        name: string,
        photo: ImageSourcePropType,
        description: string,
        project: string,
    }).isRequired,
}

export default Card