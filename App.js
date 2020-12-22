/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

<script src="http://localhost:8097"></script>
import React from "react"
import { Marketplace, Favorites } from './components'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import styles from './App.styles'

const App = () => {
  
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="freeAGENT">
          <Stack.Screen name="freeAGENT" component={Marketplace} />
          <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



// const swiperRef = createRef()
// const transitionRef = createRef()

// const [index, setIndex] = useState(0)
// const [favorites, setFavorite] = useState([])

// const onSwiped = () => {
//   transitionRef.current.animateNextTransition()
//   setIndex((index + 1) % photoCards.length)
// }

// const onSwipedRight = () => setFavorite([...favorites, photoCards[index]])

// const onSwipedTop = () => {
//   console.log("Top")
// }

// const CardDetails = ({index}) => (
//   <View style={styles.CardDetails} key={photoCards[index].id}>
//     <Text style={[styles.text, styles.name]}>{photoCards[index].name}</Text>
//     <Text style={[styles.text, styles.description]}>{photoCards[index].description}</Text>
//     <Text style={[styles.text, styles.project]}>Capstone: {photoCards[index].project}</Text>
//   </View>
// )

// const ANIMATION_DURATION = 200

// const transition = (
//   <Transition.Sequence>
//     <Transition.Out type="slide-bottom" durationMs={ANIMATION_DURATION} interpolation="easeIn"/>
//     <Transition.Together>
//       <Transition.In type="fade" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
//       <Transition.In type="slide-bottom" durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation="easeOut"/>
//     </Transition.Together>
//   </Transition.Sequence>
// )

      // <View
      // style={styles.container}
      // >
      //   <View style={styles.swiperContainer}>
      //     <Swiper
      //       containerStyle={styles.container}
      //       ref={swiperRef}
      //       cards={photoCards}
      //       cardIndex={index}
      //       renderCard={(card) => <Card card={card} />}
      //       onSwiped={onSwiped}
      //       onSwipedRight={onSwipedRight}
      //       onSwipedTop={onSwipedTop}
            // onSwipedLeft={onSwipedLeft}
        //     stackSize={4}
        //     stackScale={10}
        //     stackSeparation={14}
        //     disableBottomSwipe
        //     infinite
        //     showSecondCard
        //     backgroundColor="transparent"
        //     />
        // </View>
  
        // <View style={styles.bottomContainer}>
        //   <Transitioning.View ref={transitionRef} transition={transition}>
        //     <CardDetails index={index}/>
        //   </Transitioning.View>
        // </View>
  
        // <View style={styles.buttonsContainer}>
          {/* <IconButton
            name="close"
            onPress={() => swiperRef.current.swipeLeft()}
            color="white"
            backgroundColor="#E5566D"
            /> */}
  
          {/* USE THE ICONBUTTONS TO NAVIGATE TO SWIFLY &/OR FAVORITES */}
          {/* SWIPING RIGHT WILL HANDLE THE FAVORITING OF CANDIDATES */}
          {/* <IconButton
            name="heart"
            onPress={() => swiperRef.current.swipeTop(() => console.log("top"))}
            color="white"
            backgroundColor="#3CA3FF"
            />
          <IconButton
            name="heart" */}
            // DO I NEED TO EMBED A LINK WITHIN THE ONPRESS
      //       onPress={() => swiperRef.current.swipeRight(setFavorite([...favorites, photoCards[index]]))}
      //       color="white"
      //       backgroundColor="#4CCC93"
      //       />
      //   </View>
      // </View>