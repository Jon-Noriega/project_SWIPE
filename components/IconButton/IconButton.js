<script src="http://localhost:8097"></script>
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { func, string } from 'prop-types'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './IconButton.styles'

const IconButton = ({ onPress, name, backgroundColor, color }) => (
    <TouchableOpacity
        style={[styles.singleButton, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.5}
    >
        <Icon
        name={name}
        size={40}
        color={color}
        />
    </TouchableOpacity>
)

IconButton.propTypes = {
    onPress: func.isRequired,
    name: string.isRequired,
    color: string,
    backgroundColor: string,
}

export default IconButton