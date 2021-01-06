<h1>freeAGENT</h1>
freeAGENT was designed to get friends together in short order. We are an event-based instant messaging app. Event messages come equipped with built-in countdown timers. If you really want to join in on the event then you have to act fast before the event disappears.
:blue_heart:

<h2>Inspiration</h2>

<p>
My inspiration for this project comes entirely from my passion to foster connection and empower people.
</p>

<h2>Technologies</h2>

<ul>
 <li>React: version 16.13.1</li>
 <li>React Native: version 0.63.4</li>
 <li>React Native Deck Swiper: version 2.0.5</li>
 <li>React Native Navigation: version 5.8.10</li>
 <li>React Native AsyncStorage: version 1.13.2</li>
 <li>React Native Reanimated: version 1.13.2</li>
 <li>React Native View Overflow: version 0.0.5</li>
 <li>React Native Vector Icons: version 7.1.0</li>
 <li>React Native Paper: version 4.5.0</li>
 <li>Material-UI: version 4.11.2</li>
 <li>JavaScript: version 1.1.</li>
 <li>Rails: version 6.0.3</li>
 <li>Bcrypt: version 3.1.7</li>
 <li>Xcode: version 12.2</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "project_SWIPE" GitHub repository. Open this repository in your code editor.<br><br>

From the root of your project folder, start the app build and run the application with the following commands:<br>
<li><code>npx react-native start</code></li>
<li><code>npx react-native run-ios</code></li>
<li><code>rails s</code></li><br>

Refer to the below if you need to install any libraries or autolink dependencies.<br>

Initiate a new React Native CLI project with the following command:<br>
<li><code>npx react-native init freeAGENT</code></li><br>

Install the following libraries:<br>
<li><code>npm i react-native-deck-swiper</code></li>
<li><code>npm i react-native-view-overflow</code></li>
<li><code>npm i react-native-vector-icons</code></li>
<li><code>npm i react-native-reanimated</code></li>
<li><code>npm i @react-navigation/native</code></li>
<li><code>npm i @react-native-async-storage/async-storage</code></li>
<li><code>npm i react-native-paper</code></li>
<li><code>npm i @material-ui/core</code></li><br>

Autolink dependencies with the following command:<br>
<li><code>cd ios && pod install</code></li><br>

You are now ready to start using the first iteration of freeAGENT.<br>

<h2>Instructions</h2>
<ol>
 <li>Sign into the app with your username and password.</li>
 <li>Don't have an account? Click on the "Create Account" button and submit your profile information.</li>
 <li>You will be redirected to the Homepage upon successful sign in / account creation.</li>
 <li>You are now authorized and free to explore our talent community.</li>
 <li>Add candidates to your list of Favorites by either swiping right on their profile card or clicking on the Favorite button.</li>
 <li>You may also choose to pass on a particular candidate by either swiping left on their profile card or clicking on the Pass button.</li>
 <li>Review your list of favorite candidates by swiping left on the homepage screen or selecting the "Favorites" tab.</li>
</ol>

<h2>Code Examples</h2>

<h4>Swiper Component: Props</h4>

```
<Swiper
    ref={swiperRef}
    animateCardOpacity
    cards={users}
    renderCard={card => <MarketplaceCardImage card={card} />}
    cardIndex={index}
    backgroundColor="whitesmoke"
    showSecondCard
    stackSize={2}
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
```

<h4>Swiper Component: onSwiped Method</h4>

```
const onSwiped = () => {
    transitionRef.current.animateNextTransition()
    setIndex((index + 1) % users.length)
}
```

<h4>Self-Referential Model: Persisting Friendships onSwipedRight</h4>

```
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
```

<h2>App Demo</h2>
<a href="https://www.loom.com/share/7b00d48371ed42f1b62987de33b3f34b?sharedAppSource=personal_library">:movie_camera:</a>

<h2>Status</h2>

We're looking forward to rolling-out the following feature:
<li>Integration of a Messaging platform.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/jonathannoriega/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Jon Noriega" style="width:10px;height:10px;"></a>Jon Noriega :ocean:<br>
