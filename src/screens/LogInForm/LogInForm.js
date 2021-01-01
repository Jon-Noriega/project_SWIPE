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
                    navigation.navigate("Home")
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
            <View
            style={{ width: 300, alignSelf: "center", justifyContent: "center" }}
            >

                    <TextInput
                        // style={{ width: 300, alignSelf: "center", borderRadius: 8 }}
                        selectionColor='#0048e8'
                        label="Username"
                        value={username}
                        onChangeText={username => setUsername(username)}
                    />
                    <TextInput
                        // style={{ width: 300, alignSelf: "center" }}
                        label="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    <Button
                        // style={{ width: 300, alignSelf: "center" }}
                        mode="contained"
                        onPress={handleSubmit}
                    >
                        Sign In
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