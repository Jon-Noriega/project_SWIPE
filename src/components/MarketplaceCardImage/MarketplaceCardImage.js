<script src="http://localhost:8097"></script>

import React from 'react'
import { View, Image } from 'react-native'
import styles from './MarketplaceCardImage.styles'

const MarketplaceCardImage = ({ card }) => {

    return (
        <View style={styles.card}>

            {card
                ?
                <Image
                    style={styles.image}
                    source={{ uri: card.photo }}
                    resizeMode="cover"
                />
                : null
            }
            
        </View>
    )
}

export default MarketplaceCardImage