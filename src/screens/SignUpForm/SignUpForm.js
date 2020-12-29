<script src="http://localhost:8097"></script>;

import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, HelperText, Button, Headline } from "react-native-paper"

const SignUpForm = ( { signUp, alerts }) => {

    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [project, setProject] = useState("")
    const [userType, setUserType] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()

        let user = {
            name: name,
            photo: photo,
            description: description,
            project: project,
            userType: userType,
            username: username,
            password: password
        }

        signUp(user)
    }

    const showAlerts = () => alerts.map(alert => <HelperText type="error">{alert}</HelperText>)

    return (
        <View>
            <Headline>Sign Up</Headline>

                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                />
                <TextInput  
                    label="Photo"
                    value={photo}
                    onChangeText={photo => setPhoto(photo)}
                />
                <TextInput
                    label="Description"
                    value={description}
                    onChangeText={description => setDescription(description)}
                />
                <TextInput
                    label="Project"
                    value={project}
                    onChangeText={project => setProject(project)}
                />
                <TextInput
                    label="User Type"
                    value={userType}
                    onChangeText={userType => setUserType(userType)}
                />
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
    )
}

export default SignUpForm
