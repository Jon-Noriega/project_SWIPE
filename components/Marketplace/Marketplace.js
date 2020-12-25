<script src="http://localhost:8097"></script>
import React, { useState, createRef } from 'react'
import { View, Text } from 'react-native'
import { MarketplaceCard, IconButton } from '../index'
import Swiper from 'react-native-deck-swiper'
import { Transitioning, Transition } from "react-native-reanimated"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './Marketplace.styles'

const favoritesURL = "http://localhost:3000/friendships/"

const Marketplace = ({ users }) => {
    
    const [index, setIndex] = useState(0)
    const [favorites, setFavorite] = useState([])

    const swiperRef = createRef()
    const transitionRef = createRef()
    
    const onSwiped = () => {
        transitionRef.current.animateNextTransition()
        setIndex((index + 1) % users.length)
    }

    const onSwipedRight = () => {
        setFavorite([...favorites, users[index]])

        fetch(favoritesURL), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                friend_id: users[index].id
            })
        }
    }
    
    const CardDetails = ({index}) => (
        <View style={styles.CardDetails} key={users[index].id}>
            <Text style={[styles.text, styles.name]}>{users[index].name}</Text>
            <Text style={[styles.text, styles.description]}>{users[index].description}</Text>
            <Text style={[styles.text, styles.project]}>Capstone: {users[index].project}</Text>
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
    
    return (
        <View
            style={styles.container}
        >
            <View style={styles.swiperContainer}>
                <Swiper
                    containerStyle={styles.container}
                    ref={swiperRef}
                    cards={users}
                    cardIndex={index}
                    renderCard={() => <MarketplaceCard card={users[index]} />}
                    onSwiped={onSwiped}
                    onSwipedRight={onSwipedRight}
                    stackSize={3}
                    disableBottomSwipe
                    showSecondCard
                    infinite
                    backgroundColor="transparent"
                    />
            </View>

            <View style={styles.bottomContainer}>
                <Transitioning.View ref={transitionRef} transition={transition}>
                    {users.length > 0 
                        ?
                        <CardDetails index={index}/>
                        :
                        null
                    }
                </Transitioning.View>
            </View>

            <View style={styles.buttonsContainer}>
                <IconButton
                    icon={faTimes}
                    onPress={() => swiperRef.current.swipeLeft()}
                    color="white"
                    backgroundColor="#cc0000"
                    />
                {/* <IconButton
                    icon={faHeart}
                    onPress={() => swiperRef.current.swipeTop(() => console.log("top"))}
                    onPress={() => linkTo("/Favorites")}
                    onPress={() => navigation.navigate("Favorites")}
                    color="white"
                    backgroundColor="#ffbf00"
                    /> */}
                <IconButton
                    icon={faCheck}
                    onPress={() => swiperRef.current.swipeRight(onSwipedRight())}
                    color="white"
                    backgroundColor="#0040ff"
                    />
            </View>
        </View>
    )
}

export default Marketplace
