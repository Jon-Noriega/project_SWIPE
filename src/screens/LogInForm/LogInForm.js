<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View, Text, TextInput, Dimensions } from 'react-native'
import { HelperText, Caption, Button } from "react-native-paper"
import AsyncStorage from '@react-native-async-storage/async-storage'

const loginURL = "http://localhost:3000/login/"

const LogInForm = ({ user, alerts, setUser, setFavorites, setAlerts, getUsers, navigation }) => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [alertColor, setAlertColor] = useState("")

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
                    setAlertColor("red")
                } else {
                    AsyncStorage.setItem("token", response.token)
                    setUser(response.user)
                    setFavorites(response.friendships)
                    setAlertColor("black")
                    setAlerts(["Happy Swiping!"])
                    setTimeout(() => navigation.navigate("Home"), 1200)
                    console.log("TEST 5: Login", response.user.userType)
                }
            })
            .then(() => getUsers(user))
    }

    const handleSignIn = () => {
        logIn()
    }

    const showAlerts = () => (
        alerts.map(alert =>
            <HelperText
                style={{fontFamily: "Roboto-Italic",
                    fontSize: 20,
                    fontWeight: "600",
                    color: alertColor
                }}
                type="error">{alert}
            </HelperText>)
    )

    const handleCreateAccount = () => {
        navigation.navigate("Sign Up")
    }

    const { height } = Dimensions.get('window')
    
    return (

        <View
            style={{height: height}}
        >

            <Text
                style={{
                    fontFamily: "Caveat-Bold",
                    fontSize: 80,
                    fontWeight: "800",
                    color: "black",
                    alignSelf: "center",
                    marginTop: 200,
                    marginBottom:70,
                    paddingHorizontal: 20
                }} 
            >
                freeAGENT
            </Text>

            <TextInput
                value={username}
                onChangeText={username => setUsername(username)}
                placeholder="Username"
                placeholderTextColor="white"
                selectionColor="white"
                style={{
                    width: 275,
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontSize: 18,
                    color: "white",
                    backgroundColor: "#0048e8",
                    borderRadius: 8,
                    padding: 10,
                    marginVertical: 10
                }}
            />

            <TextInput
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="white"
                selectionColor="white"
                style={{
                    width: 275,
                    alignSelf: "center",
                    fontFamily: "Roboto-Regular",
                    fontSize: 18,
                    color: "white",
                    backgroundColor: "#0048e8",
                    borderRadius: 8,
                    padding: 10,
                    marginVertical: 10
                }}
            />

            <Button
                mode="contained"
                onPress={handleSignIn}
                style={{
                    color:"white",
                    backgroundColor: "#e0b402",
                    width: 275,
                    alignSelf: "center",
                    fontFamily: "Caveat-Bold",
                    fontSize: 20,
                    borderRadius: 8,
                    padding: 5,
                    marginVertical: 10
                }}
            >
                Sign In
            </Button>

            <Text
                style={{
                    alignSelf: "center",
                    marginTop: 10
                }}
            >
                {alerts ? showAlerts() : null }
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 10
                }}
            >

                <Button
                    title="Forgot Password?"
                >
                    <Caption
                        style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 12,
                            fontWeight: "600",
                            color: "#0048e8"
                        }}
                    >
                        Forgot Password?
                    </Caption>

                </Button>

                <Text
                    style={{
                        alignSelf:"center",
                        color: "#0048e8"
                    }}
                >
                    |
                </Text>

                <Button
                    onPress={handleCreateAccount}
                    title="Create Account"
                >
                    <Caption
                        style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 12,
                            fontWeight: "600",
                            color: "#0048e8"
                        }}
                    >
                        Create Account
                    </Caption>

                </Button>

            </View>

            <Text
                style={{
                    fontFamily: "Roboto-Italic",
                    fontSize: 20,
                    alignSelf: "center",
                    marginTop: 10,
                    position: 'absolute',
                    bottom: 50
                }}
            >
                hecho con mil💛
            </Text>

        </View>

    )
}

export default LogInForm