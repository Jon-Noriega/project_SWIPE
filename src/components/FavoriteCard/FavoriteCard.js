<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View, Image } from "react-native"
import { Card, Headline, Title, Subheading, Paragraph, Caption, Button, Banner } from "react-native-paper"
import styles from './FavoriteCard.styles'

const FavoriteCard = ({ favorite }) => {
    const [visible, setVisible] = useState(true)

    return (
        
    <Card
        style={{backgroundColor: 'transparent'}}
    >
        <Card.Content>

            <Card.Cover
                source={{ uri: favorite.photo }}
                // resizeMode="cover"
                // resizeMethod="auto"

                // backgroundImage={{ uri: favorite.photo }}
                // backgroundSize="cover"

                // style={{
                //     backgroundImage: favorite.photo,
                //     backgroundSize: "cover"
                // }}

                style={{
                    height: 500,
                    borderRadius: 8
                    // height: Image.resolveAssetSource({ uri: favorite.photo })
                }}

                />

            <Headline
                style={{ 
                    fontFamily: "Caveat-Regular",
                    fontSize: 35,
                    fontWeight: "700",
                    color: "#0048e8",
                    paddingTop: 20
                }}>
                    {favorite.name}
            </Headline>

            <Paragraph
                style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 18,
                    color: "black"
                }}
            >
                    {favorite.description}
            </Paragraph>

            <Subheading
                style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 18,
                    fontWeight: "500",
                    color: "black"
                }}
            >
                    Capstone: {favorite.project}
            </Subheading>

                <Card.Actions

                >
                    <Button
                        style={{
                            fontFamily: 'Roboto-Regular',
                            fontSize: 18,
                            color: "black"
                        }}
                        visible={visible}
                        onPress={() => setVisible(false)}
                    >      Direct Message
                    </Button>

                    <Button
                        style={{
                            fontFamily: 'Roboto-Regular',
                            fontSize: 18,
                            color: "black"
                        }}
                        visible={visible}
                        onPress={() => setVisible(false)}
                    >
                        |   Share Profile
                    </Button>

                </Card.Actions>

        </Card.Content>
    </Card>
    )
}

export default FavoriteCard
