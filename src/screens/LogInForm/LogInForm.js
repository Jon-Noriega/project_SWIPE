<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, HelperText, Button, Headline, Caption } from "react-native-paper"
import AsyncStorage from '@react-native-async-storage/async-storage'

const loginURL = "http://localhost:3000/login/"

const LogInForm = ({ alerts, setUser, setFavorite, setAlerts, getUsers, navigation }) => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const logIn = () => {    
        return fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(response => {
                if(response.errors){
                    setAlerts(response.errors)
                } else {
                    AsyncStorage.setItem("token", response.token)
                    setUser(response.user),
                    setFavorite(response.friends),
                    setAlerts(["Successful login!"]),
                    navigation.navigate("FREEAGENT")
                }
            })
            .then(() => getUsers())
    }

    const handleSubmit = () => {
        logIn()
    }
    
    const showAlerts = () => alerts.map(alert => <HelperText type="error">{alert}</HelperText>)

    const handleCreateAccount = () => {
        navigation.navigate("Sign Up")
    }

    return (
        <>
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
                        onPress={handleSubmit}
                    >
                        Submit
                    </Button>

                    {alerts ? showAlerts() : null }
            </View>
            <View>
                <Button
                    onPress={handleCreateAccount}
                >
                    <Caption>Create Account</Caption>
                </Button>
            </View>
        </>
    )
}

export default LogInForm