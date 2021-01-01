import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../constants/index'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    card: {
        height: height - 470,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    image: {
        borderRadius: 8,
        flex: 1,
        width: '100%',
    },
})