<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, HelperText, Button, Headline } from "react-native-paper"

const SignInForm = ( { signUp, alerts, navigation }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signIn, setSignIn] = useState(false)
    
    const handleSignIn = () => setSignIn(!signIn)

    const showAlerts = () => alerts.map(alert => <HelperText type="error">{alert}</HelperText>)

    return (
        <View>
            <Headline>Sign In</Headline>

                <TextInput
                    label="Username"
                    value={username}
                    onChangeText={username => setUsername(username)}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
                <Button
                    mode="contained"
                    onPress={handleSignIn}
                >
                    Submit
                </Button>
        </View>
    )
}

export default SignInForm