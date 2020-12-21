<script src="http://localhost:8097"></script>
import React, { createRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Card, IconButton, Favorites } from '../index'
import { photoCards } from '../../constants'
import styles from './Marketplace.styles'
import Swiper from 'react-native-deck-swiper'
import { Transitioning, Transition } from "react-native-reanimated"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, CreateStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Marketplace = ({navigation}) => {

    const swiperRef = createRef()
    const transitionRef = createRef()

    const [index, setIndex] = useState(0)
    const [favorites, setFavorite] = useState([])
    
    const onSwiped = () => {
        transitionRef.current.animateNextTransition()
        setIndex((index + 1) % photoCards.length)
    }

    const onSwipedRight = () => setFavorite([...favorites, photoCards[index]])

    const onSwipedTop = () => {
        console.log("Top")
    }

    const CardDetails = ({index}) => (
        <View style={styles.CardDetails} key={photoCards[index].id}>
        <Text style={[styles.text, styles.name]}>{photoCards[index].name}</Text>
        <Text style={[styles.text, styles.description]}>{photoCards[index].description}</Text>
        <Text style={[styles.text, styles.project]}>Capstone: {photoCards[index].project}</Text>
        </View>
    )
    
    const ANIMATION_DURATION = 200

    const transition = (
        <Transition.Sequence>
        <Transition.Out type="slide-bottom" durationMs={ANIMATION_DURATION} interpolation="easeIn"/>
        <Transition.Together>
            <Transition.In type="fade" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
            <Transition.In type="slide-bottom" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation="easeOut"/>
        </Transition.Together>
        </Transition.Sequence>
    )
    
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorites" component={Favorites} />
        
            <View
            style={styles.container}
            >
                <View style={styles.swiperContainer}>
                    <Swiper
                    containerStyle={styles.container}
                    ref={swiperRef}
                    cards={photoCards}
                    cardIndex={index}
                    renderCard={(card) => <Card card={card} />}
                    onSwiped={onSwiped}
                    onSwipedRight={onSwipedRight}
                    onSwipedTop={onSwipedTop}
                    // onSwipedLeft={onSwipedLeft}
                    stackSize={4}
                    stackScale={10}
                    stackSeparation={14}
                    disableBottomSwipe
                    infinite
                    showSecondCard
                    backgroundColor="transparent"
                    />
                </View>

                <View style={styles.bottomContainer}>
                    <Transitioning.View ref={transitionRef} transition={transition}>
                    <CardDetails index={index}/>
                    </Transitioning.View>
                </View>

                <View style={styles.buttonsContainer}>
                    <IconButton
                    name="heart"
                    onPress={() => swiperRef.current.swipeTop(() => console.log("top"))}
                    color="white"
                    backgroundColor="#3CA3FF"
                    />
                    <IconButton
                    name="heart"
                    onPress={() => navigation.navigate("Favorites") }
                    color="white"
                    backgroundColor="#4CCC93"
                    />
                </View>
            </View>

        </Tab.Navigator>
    )
}

export default Marketplace

// const Favorites = () => {
//     return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
//         <Text>Favorites</Text>
//     </View>
//     )
// }

{/* <IconButton
    name="close"
    onPress={() => swiperRef.current.swipeLeft()}
color="white"
backgroundColor="#E5566D"
/> */}
{/* USE THE ICONBUTTONS TO NAVIGATE TO SWIFLY &/OR FAVORITES */}
{/* SWIPING RIGHT WILL HANDLE THE FAVORITING OF CANDIDATES */}

// DO I NEED TO EMBED A LINK WITHIN THE ONPRESS & PASS IN PROPS? //
// onPress={() => swiperRef.current.swipeRight(setFavorite([...favorites, photoCards[index]]))}