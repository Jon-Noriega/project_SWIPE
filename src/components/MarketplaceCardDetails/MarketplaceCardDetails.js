<script src="http://localhost:8097"></script>

import React from 'react'
import { View, Text } from 'react-native'
import styles from './MarketplaceCardDetails.styles'

const MarketplaceCardDetails = ({ users, index }) => {

    return (
        <View key={users[index].id}>
            <Text style={[styles.name]}>{users[index].name}</Text>
            <Text style={[styles.description]}>{users[index].description}</Text>
            <Text style={[styles.project]}>Capstone: {users[index].project}</Text>
        </View>

)}

export default MarketplaceCardDetails