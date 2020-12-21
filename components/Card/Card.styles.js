import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../constants'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    card: {
        height: height - 360,
        justifyContent: 'center',
        alignItems: "center",
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
    image: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
    },
})