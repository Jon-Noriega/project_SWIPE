{/* <script src="http://localhost:8097"></script>

import React from 'react'
import { View, Text } from "react-native"
import Home from '../../screens/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PrivateRoute = ( { navigation, ...props }) => {

    return AsyncStorage.token
        ? navigation.navigate(<Home {...props}/>)
        : <Login />
}

export default PrivateRoute */}
