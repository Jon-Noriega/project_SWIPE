<script src="http://localhost:8097"></script>

import React, { useState, createRef } from 'react'
import { View } from 'react-native'
import { MarketplaceCardImage, MarketplaceCardDetails, MarketplaceCardButtons, MarketplaceOverlayLabels } from '../../components/index'
import Swiper from 'react-native-deck-swiper'
import { Transitioning, Transition } from "react-native-reanimated"
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './Marketplace.styles'

const favoritesURL = "http://localhost:3000/friendships/"

const Marketplace = ({ user, users, favorites, setFavorite }) => {
    
    const [index, setIndex] = useState(0)

    const swiperRef = createRef()
    const transitionRef = createRef()
    
    const onSwiped = () => {
        transitionRef.current.animateNextTransition()
        setIndex((index + 1) % users.length)
    }

    const onSwipedRight = () => {
        setFavorite([...favorites, users[index]])

        AsyncStorage.getItem("token")
            .then(token => {
                fetch(favoritesURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        friend_id: users[index].id
                    })
                })
            })
    }
    
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
                    ref={swiperRef}
                    animateCardOpacity
                    cards={users}
                    renderCard={() => <MarketplaceCardImage card={users[index]} />}
                    // renderCard={card => <MarketplaceCardImage card={card} />}
                    cardIndex={index}
                    backgroundColor="whitesmoke"
                    // showSecondCard
                    // stackSize={2}
                    infinite
                    onSwiped={onSwiped}
                    onSwipedRight={onSwipedRight}
                    disableBottomSwipe
                    animateOverlayLabelsOpacity
                    overlayLabels={{
                        left: {
                            title: 'PASS',
                            element: <MarketplaceOverlayLabels label="PASS" color="Black" />,
                            style: {
                                wrapper: styles.overlayWrapper,
                            },
                        },
                        right: {
                            title: 'LIKE',
                            element: <MarketplaceOverlayLabels label="FAVORITE" color="#e0b402" />,
                            style: {
                                wrapper: {
                                    ...styles.overlayWrapper,
                                    alignItems: 'flex-start',
                                    marginLeft: 30,
                                },
                            },
                        },
                    }}
                    />
            </View>

            <View style={styles.cardDetailsContainer}>
                <Transitioning.View ref={transitionRef} transition={transition}>
                    {users.length > 0 
                        ?
                        <MarketplaceCardDetails users={users} index={index} />
                        :
                        null
                    }
                </Transitioning.View>
            </View>

            <View style={styles.buttonsContainer}>
                <MarketplaceCardButtons
                    name="emoticon-confused-outline"
                    onPress={() => swiperRef.current.swipeLeft()}
                    color="white"
                    backgroundColor="#212121"
                    />
                <MarketplaceCardButtons
                    name="heart-plus-outline"
                    onPress={() => swiperRef.current.swipeRight(onSwipedRight)}
                    color="white"
                    backgroundColor="#e0b402"
                    />
            </View>

        </View>
    )
}

export default Marketplace
