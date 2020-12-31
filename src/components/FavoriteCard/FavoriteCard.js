<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import { Card, Headline, Title, Subheading, Paragraph, Caption, Button, Banner } from "react-native-paper"
import styles from './FavoriteCard.styles'

const FavoriteCard = ({ favorite }) => {
    const [visible, setVisible] = useState(true)

    return (
    <Card>
        <Card.Content>
            <Card.Cover
                style={styles.image}
                source={{ uri: favorite.photo }}
                resizeMode="cover"
            />
            <Headline style={{ color: "#e0b402", fontWeight: "500", fontSize: 28 }}>{favorite.name}</Headline>
            <Paragraph>{favorite.description}</Paragraph>
            <Subheading>Capstone: {favorite.project}</Subheading>
                <Card.Actions>
                    <Button
                        visible={visible}
                        onPress={() => setVisible(false)}
                    >      Direct Message
                    </Button>
                    <Button
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
