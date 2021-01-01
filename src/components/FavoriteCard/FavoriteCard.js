<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { View } from "react-native"
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
                // backgroundImage={{ uri: favorite.photo }}
                resizeMode="cover"
                // style={{ backgroundImage: favorite.photo }}
                />

            <Headline
                style={{ 
                    fontFamily: "Caveat-Bold",
                    fontSize: 35,
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
