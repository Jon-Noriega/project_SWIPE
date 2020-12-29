import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    marketplaceContainer: {
        height: height,
        flex: 1,
        justifyContent: 'space-between'
    },
    swiperContainer: {
        height: height - 370,
    },
    overlayWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30,
    },
    cardDetailsContainer: {
        flex: 0.95,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    buttonsContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '15%',
        paddingBottom: 50,
    }
})