<script src="http://localhost:8097"></script>

import React, { useState, createRef } from 'react'
import { View } from 'react-native'
import { MarketplaceCardImage, MarketplaceCardDetails, MarketplaceCardButtons, MarketplaceOverlayLabels } from '../../components/index'
import Swiper from 'react-native-deck-swiper'
import { Transitioning, Transition } from "react-native-reanimated"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './Marketplace.styles'

const favoritesURL = "http://localhost:3000/friendships/"

const Marketplace = ({ users, favorites, setFavorite }) => {
    
    const [index, setIndex] = useState(0)

    const swiperRef = createRef()
    const transitionRef = createRef()
    
    const onSwiped = () => {
        transitionRef.current.animateNextTransition()
        setIndex((index + 1) % users.length)
    }

    const onSwipedRight = () => {
        setFavorite([...favorites, users[index]])

        fetch(favoritesURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: users[0].id,
                friend_id: users[index].id
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
            style={styles.marketplaceContainer}
        >
            <View style={styles.swiperContainer}>
                <Swiper
                    ref={swiperRef}
                    cards={users}
                    cardIndex={index}
                    renderCard={() => <MarketplaceCardImage card={users[index]} />}
                    onSwiped={onSwiped}
                    onSwipedRight={onSwipedRight}
                    stackSize={3}
                    disableBottomSwipe
                    showSecondCard
                    infinite
                    backgroundColor="transparent"
                    animateOverlayLabelsOpacity
                    overlayLabels={{
                        left: {
                            title: 'PASS',
                            element: <MarketplaceOverlayLabels label="PASS" color="#E5566D" />,
                            style: {
                                wrapper: styles.overlayWrapper,
                            },
                        },
                        right: {
                            title: 'LIKE',
                            element: <MarketplaceOverlayLabels label="FAVORITE" color="#4CCC93" />,
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
                    icon={faTimes}
                    onPress={() => swiperRef.current.swipeLeft()}
                    color="white"
                    backgroundColor="#cf2917"
                    />
                {/* <MarketplaceCardButtons
                    icon={faHeart}
                    onPress={() => swiperRef.current.swipeTop(() => console.log("top"))}
                    onPress={() => linkTo("/Favorites")}
                    onPress={() => navigation.navigate("Favorites")}
                    color="white"
                    backgroundColor="#ffbf00"
                    /> */}
                <MarketplaceCardButtons
                    icon={faHeart}
                    onPress={() => swiperRef.current.swipeRight(onSwipedRight)}
                    color="white"
                    backgroundColor="#d1aa11"
                    />
            </View>
        </View>
    )
}

export default Marketplace
