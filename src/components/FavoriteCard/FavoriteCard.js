<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { Card, Headline, Subheading, Paragraph, Button } from "react-native-paper"

const FavoriteCard = ({ favorite, key, removeFavorite }) => {

    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        return removeFavorite(favorite, key)
    }

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
                        paddingTop: 20,
                        marginLeft: 10
                    }}
                >
                        {favorite.name}
                </Headline>

                <Paragraph
                    style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 18,
                        color: "black",
                        marginLeft: 15
                    }}
                >
                        {favorite.description}
                </Paragraph>

                <Subheading
                    style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 18,
                        fontWeight: "500",
                        color: "black",
                        marginLeft: 15
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
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowRadius: 0,
                            shadowOpacity: 0.3,
                            elevation: 2,
                        }}
                        color="#c9a202"
                        visible={visible}
                        onPress={() => setVisible(false)}
                    >   Direct Message
                    </Button>

                    <Button
                        style={{
                            fontFamily: 'Roboto-Regular',
                            fontSize: 20,
                            shadowColor: "black",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowRadius: 0,
                            shadowOpacity: 0.3,
                            elevation: 2,
                        }}
                        color="#c9a202"
                        visible={visible}
                        onPress={handleClick}
                        // onPress={() => setVisible(false)}
                    >
                        |    Remove Favorite
                    </Button>

                </Card.Actions>

            </Card.Content>
        </Card>
    )
}

export default FavoriteCard
