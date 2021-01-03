import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    name: {
        fontFamily: 'Caveat-Bold',
        fontSize: 45,
        color: "#0048e8",
        marginBottom: 5
    },
    description: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color: "black",
        marginBottom: 10
    },
    project: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        color: "black",
        marginBottom: 10
    }
})