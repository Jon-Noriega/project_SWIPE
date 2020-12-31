import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    marketplaceContainer: {
        height: height,
        flex: 1,
        justifyContent: 'space-between'
    },
    swiperContainer: {
        height: height - 380,
    },
    cardDetailsContainer: {
        flex: 1,
        alignItems: "center"
    },
    buttonsContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10%',
        paddingBottom: 10,
    },
    overlayWrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30,
    }
})