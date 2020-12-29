<script src="http://localhost:8097"></script>

import React from 'react'
import { View, Text } from 'react-native'
import { Card, Headline, Title, Subheading, Paragraph, Caption, Button } from "react-native-paper"

import styles from './MarketplaceCardDetails.styles'

const MarketplaceCardDetails = ({ users, index }) => {

    return (
        <View key={users[index].id}>
            <Text style={[styles.text, styles.name]}>{users[index].name}</Text>
            <Text style={[styles.text, styles.description]}>{users[index].description}</Text>
            <Text style={[styles.text, styles.project]}>Capstone: {users[index].project}</Text>
        </View>

        // <View key={users[index].id}>
        //     <Headline style={[styles.text, styles.name]}>{users[index].name}</Headline>
        //     <Subheading style={[styles.text, styles.description]}>{users[index].description}</Subheading>
        //     <Title style={[styles.text, styles.project]}>Capstone: {users[index].project}</Title>
        // </View>

)}

export default MarketplaceCardDetails