import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    swiperContainer: {
        height: height - 435,
        position: "absolute",
        top: -45

    },
    cardDetailsContainer: {
        flex: 1,
        position: "absolute",
        bottom: 90,
        alignSelf: "flex-start",
        marginLeft: 20
    },
    buttonsContainer: {
        position: "absolute",
        bottom: -35,
        justifyContent: 'space-between',
        alignSelf: 'center',
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