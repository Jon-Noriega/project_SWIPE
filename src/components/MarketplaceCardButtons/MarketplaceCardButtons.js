<script src="http://localhost:8097"></script>

import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './MarketplaceCardButtons.styles'

const MarketplaceCardButtons = ({ icon, name, onPress, color, backgroundColor }) => (
    <TouchableOpacity
        style={[styles.singleButton, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.5}
    >
        <Icon
            name={name}
            size={45}
            color={color}
        />
    </TouchableOpacity>
)

export default MarketplaceCardButtons