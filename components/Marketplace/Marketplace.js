<script src="http://localhost:8097"></script>
import React, { createRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Card, IconButton} from '../index'
import { photoCards } from '../../constants'
import styles from './Marketplace.styles'
import Swiper from 'react-native-deck-swiper'
import { Transitioning, Transition } from "react-native-reanimated"
import { useLinkTo } from "@react-navigation/native"

const favoritesURL = "http://localhost:3000/favorites/"

const Marketplace = () => {

    const swiperRef = createRef()
    const transitionRef = createRef()

    const [index, setIndex] = useState(0)
    const [favorites, setFavorite] = useState([])
    
    const onSwiped = () => {
        transitionRef.current.animateNextTransition()
        setIndex((index + 1) % photoCards.length)
    }

    const onSwipedRight = () => setFavorite([...favorites, photoCards[index]])
    
    // const onSwipedRight = () => {
    //     setFavorite([...favorites, photoCards[index]])

    //     fetch(favoritesURL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(photoCards[index])
    //     })
    //         .then(response => response.json())
    //         .then(user => setFavorite([...favorites, user]))
    // }

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
    
    const linkTo = useLinkTo()
    
    return (
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
                onPress={() => linkTo("/Favorites")}
                color="white"
                backgroundColor="#4CCC93"
                />
            </View>
        </View>
    )
}

export default Marketplace



// const Tab = createBottomTabNavigator()

// onPress={() => navigation.navigate("Favorites") }

{/* <Tab.Navigator>
    <Tab.Screen
    name="Favorites"
    component={Favorites}
    options={{
        style: {height:100}
    }}
    />
</Tab.Navigator> */}

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