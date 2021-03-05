<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { Text } from 'react-native'
import { Modal, Portal, TextInput, HelperText, Button, Menu, Divider, Caption, Provider } from "react-native-paper"
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SimpleImagePicker } from "../../components/index"

const SignUpForm = ({ signUp, alerts, getUsers, navigation }) => {

    const [userType, setUserType] = useState("")
    const [isOpen, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [project, setProject] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState("")

    const onPressItemHandler = (value) => {
        setUserType(value);
        setOpen(false);
    }
    
    const handleSubmit = () => {

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
            .then(() => getUsers(user))
            .then(navigation.navigate("Home"))
    }

    const showAlerts = () => (
        alerts.map(alert =>
            <HelperText
                style={{fontFamily: "Roboto-Italic",
                    fontSize: 20,
                    fontWeight: "600",
                    color: "black"
                }}
                type="error">{alert}
            </HelperText>)
    )

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const theme = {
        ...DefaultTheme,
        colors: {
        ...DefaultTheme.colors,
        primary: '#0048e8',
        accent: '#e0b402',
        },
    };
    
    const containerStyle = {backgroundColor: 'whitesmoke', padding: 20, margin: 20, borderRadius: 8 };
    
    return (
            <Provider theme={theme} >
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <Menu
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    visible={isOpen}
                                    onDismiss={() => setOpen(false)}
                                    anchor={<Button onPress={() => setOpen(true)}>Click Here To Select User Type</Button>}>
                                    <Menu.Item onPress={() => onPressItemHandler("Recruiter")} title="Recruiter" />
                                    <Divider />
                                    <Menu.Item onPress={() => onPressItemHandler("Candidate")} title="Candidate" />
                                </Menu>
                                <TextInput
                                label="User Type"
                                value={userType}
                                onChangeText={userType => setUserType(userType)}
                                style={{
                                    width: 334,
                                    fontSize: 18,
                                    borderRadius: 8,
                                    marginVertical: 10
                                }}
                                />
                                <TextInput
                                    label="Name"
                                    value={name}
                                    onChangeText={name => setName(name)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    />
                                    
                                {/* <TextInput  
                                    label="Photo"
                                    value={photo}
                                    onChangeText={photo => setPhoto(photo)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    /> */}
                                <SimpleImagePicker />

                                <TextInput
                                    label="Description"
                                    value={description}
                                    onChangeText={description => setDescription(description)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    />
                                <TextInput
                                    label="Project"
                                    value={project}
                                    onChangeText={project => setProject(project)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    />
                                <TextInput
                                    label="Username"
                                    value={username}
                                    onChangeText={username => setUsername(username)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    />
                                <TextInput
                                    label="Password"
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={password => setPassword(password)}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    />
                                <Button
                                    mode="contained"
                                    onPress={handleSubmit}
                                    style={{
                                        width: 334,
                                        fontSize: 18,
                                        borderRadius: 8,
                                        marginVertical: 10
                                    }}
                                    >
                                    Create Account
                                </Button>

                                <Text
                                    style={{
                                        alignSelf: "center",
                                        marginTop: 10
                                    }}
                                >
                                    {alerts ? showAlerts() : null }
                                </Text>
                    </Modal>
                </Portal>
                <Button
                    mode="contained"
                    icon="account-plus"
                    onPress={showModal}
                    style={{
                        marginVertical: 350,
                        width: 250,
                        height: 40,
                        borderRadius: 8,
                        alignSelf: "center"
                    }}
                >
                    <Caption
                        style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 15,
                            fontWeight: "600",
                            color: "white",
                        }}
                    >
                        Create Account
                    </Caption>
                </Button>
            </Provider>
    )
}

export default SignUpForm
