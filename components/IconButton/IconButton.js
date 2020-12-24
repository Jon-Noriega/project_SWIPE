<script src="http://localhost:8097"></script>
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { func, string } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import styles from './IconButton.styles'

const IconButton = ({ onPress, icon, backgroundColor, color }) => (
    <TouchableOpacity
        style={[styles.singleButton, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.5}
    >
        <FontAwesomeIcon
        icon={icon}
        size={40}
        color={color}
        />
    </TouchableOpacity>
)

IconButton.propTypes = {
    onPress: func.isRequired,
    icon: string,
    color: string,
    backgroundColor: string,
}

export default IconButton