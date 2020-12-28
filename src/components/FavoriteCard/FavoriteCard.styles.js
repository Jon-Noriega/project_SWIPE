import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../constants/index'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: colors.white,
        borderRadius: 5,
        shadowColor: colors.black,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    cardDetails: {
        height: 100,
        alignItems: "flex-start",
        // textAlignVertical: "center",
        backgroundColor: colors.white
    },
    cardButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
        padding: 15,
    },
    text: {
        fontFamily: "Courier",
    },
    name: {
        fontSize: 25,
        fontWeight: "500",
        marginBottom: 10,
        color: "#0458d6",
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
        color: "black"
    }
})