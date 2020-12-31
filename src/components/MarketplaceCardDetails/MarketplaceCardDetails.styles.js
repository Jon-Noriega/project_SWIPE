import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    text: {
        // fontFamily: 'Robot-Medium'
    },
    name: {
        fontSize: 25,
        fontWeight: "500",
        marginBottom: 10,
        color: "#0048e8",
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: "black"
    },
    project: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10,
        color: "black"
    }
})