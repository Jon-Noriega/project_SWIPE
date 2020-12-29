<script src="http://localhost:8097"></script>

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './FavoriteCard.styles'

import { Card, Title, Paragraph, Button } from "react-native-paper"

const FavoriteCard = ({ favorite }) => {

    return (
    <Card>
        <Card.Content>
            <Card.Cover source={{ uri: favorite.photo }} />
            <Title>{favorite.name}</Title>
            <Paragraph>{favorite.description}</Paragraph>
            <Paragraph>Capstone: {favorite.project}</Paragraph>
                <Card.Actions>
                    <Button>      Share Profile</Button>
                    <Button>|   Direct Message</Button>
                </Card.Actions>
        </Card.Content>
    </Card>
    )
}

export default FavoriteCard
