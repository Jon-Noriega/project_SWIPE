<script src="http://localhost:8097"></script>

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import ImagePicker from 'react-native-image-picker';

const SimpleImagePicker = () => {

    const [imageSource, setImageSource] = useState(null);

    const selectImage = () => {
        let options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', { response });

            if (response.didCancel) {
                console.log('User cancelled image picker');
                Alert.alert("Please select an image")
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('Tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log({ source });
            }
        })
    }

    return (
        <View>
            <Text>
                Image Picker
            </Text>
            <TouchableOpacity
                onPress={selectImage}
            >
                <Text> Pick an image</Text>
            </TouchableOpacity>
            {/* <View>
                {imageSource === null ? (
                <Image
                    // source={require('../assets/placeholderimage.jpg')}
                    source={{ uri: imageSource }}
                    resizeMode='contain'
                />
                ) : (
                <Image
                    source={{ uri: imageSource }}
                    resizeMode='contain'
                />
                )}
            </View> */}
        </View>
    )
}

export default SimpleImagePicker
