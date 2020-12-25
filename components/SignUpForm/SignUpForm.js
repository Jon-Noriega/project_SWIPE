import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

const SignUpForm = () => {

    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [project, setProject] = useState("")
    const [userType, setUserType] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleNameText = (text) => {
        setName(text)
        // console.log(name)
    }

    const handlePhotoText = (text) => {
        setPhoto(text)
    }

    const handleDescriptionText = (text) => {
        setDescription(text)
    }

    const handleProjectText = (text) => {
        setProject(text)
    }

    const handleUserTypeText = (text) => {
        setUserType(text)
    }

    const handleUserNameText = (text) => {
        setUserName(text)
    }

    const handlePasswordText = (text) => {
        setPassword(text)
    }
    
    const handleSubmit = () => {
    // THINK I NEED TO PASS SET THE STATE OF USERS FOR THE LATEST OBJECT //
    }

    return (
        <View>
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handleNameText}
                placeholder="name"
                value={name} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handlePhotoText}
                placeholder="photo"
                value={photo} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handleDescriptionText}
                placeholder="description"
                value={description} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handleProjectText}
                placeholder="project"
                value={project} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handleUserTypeText}
                placeholder="user type"
                value={userType} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handleUserNameText}
                placeholder="username"
                value={username} 
            />
            <TextInput
                style={{height: 40, flex: 1, borderColor: "gray", borderWidth: 1, marginHorizontal: 15, paddingHorizontal: 15}}
                onChangeText={handlePasswordText}
                placeholder="password"
                value={password} 
            />
            <Button
                style={{flex: 1}}
                onPress={handleSubmit}
                title={"Submit"}
            />
        </View>
    )
}

export default SignUpForm
