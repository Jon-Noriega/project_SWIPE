<script src="http://localhost:8097"></script>
import React from 'react'
import { View, Text } from 'react-native'
import { Transition } from "react-native-reanimated"
import styles from './MarketplaceCardDetails.styles'

const MarketplaceCardDetails = ({ users, index }) => {

    const ANIMATION_DURATION = 200
    
    const transition = (
        <Transition.Sequence>
            <Transition.Out type="slide-bottom" durationMs={ANIMATION_DURATION} interpolation="easeIn"/>
            <Transition.Together>
                <Transition.In type="fade" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
                <Transition.In type="slide-bottom" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation="easeOut"/>
            </Transition.Together>
        </Transition.Sequence>
    )

    return (
        <View key={users[index].id}>
            <Text style={[styles.text, styles.name]}>{users[index].name}</Text>
            <Text style={[styles.text, styles.description]}>{users[index].description}</Text>
            <Text style={[styles.text, styles.project]}>Capstone: {users[index].project}</Text>
        </View>
)}

export default MarketplaceCardDetails