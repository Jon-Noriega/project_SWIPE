import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    text: {
        fontFamily: "Courier",
    },
    name: {
        fontSize: 25,
        fontWeight: "500",
        marginBottom: 10,
        color: "#6200ee",
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