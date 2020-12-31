<script src="http://localhost:8097"></script>

import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './MarketplaceCardButtons.styles'

const MarketplaceCardButtons = ({ icon, name, onPress, color, backgroundColor }) => (
    <TouchableOpacity
        style={[styles.singleButton, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.5}
    >
        {/* <FontAwesomeIcon */}
        <Icon
            // icon={icon}
            name={name}
            size={45}
            color={color}
        />
    </TouchableOpacity>
)

export default MarketplaceCardButtons