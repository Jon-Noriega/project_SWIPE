<script src="http://localhost:8097"></script>

import React from 'react'
import { View, Text } from 'react-native'
import styles from './MarketplaceOverlayLabels.styles'

const MarketplaceOverlayLabels = ({ label, color }) => (
    <View style={[styles.overlayLabel, { borderColor: color }]}>
        <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
    </View>
)

export default MarketplaceOverlayLabels