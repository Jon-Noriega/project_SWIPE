<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View, Image } from "react-native"
import { Card, Headline, Title, Subheading, Paragraph, Caption, Button, Banner } from "react-native-paper"
import styles from './FavoriteCard.styles'

const FavoriteCard = ({ favorite }) => {
    const [visible, setVisible] = useState(true)

    return (
        
    <Card
        style={{backgroundColor: 'whitesmoke'}}
    >
        <Card.Content>

            <Card.Cover
                source={{ uri: favorite.photo }}
                resizeMode="cover"

                style={{
                    height: 500,
                    borderRadius: 8
                }}
                />

            <Headline
                style={{ 
                    fontFamily: "Caveat-Regular",
                    fontSize: 40,
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
                            fontSize: 20,
                            color: "black",
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowRadius: 0,
                            shadowOpacity: 0.3,
                            elevation: 2,
                        }}
                        visible={visible}
                        onPress={() => setVisible(false)}
                    >      Direct Message
                    </Button>

                    <Button
                        style={{
                            fontFamily: 'Roboto-Regular',
                            fontSize: 20,
                            color: "black",
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowRadius: 0,
                            shadowOpacity: 0.3,
                            elevation: 2,
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
