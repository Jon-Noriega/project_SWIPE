<script src="http://localhost:8097"></script>

import React, { useState } from 'react'
import styles from './FavoriteCard.styles'

import { Card, Headline, Title, Subheading, Paragraph, Caption, Button, Banner } from "react-native-paper"

const FavoriteCard = ({ favorite }) => {
    const [visible, setVisible] = useState(true)

    return (
    <Card>
        <Card.Content>
            <Card.Cover source={{ uri: favorite.photo }} />
            <Headline>{favorite.name}</Headline>
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
