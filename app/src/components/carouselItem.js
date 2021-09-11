import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './../styles/carouselItem.style'

export default CarouselItem = ({ item, index }) => {
    return (
        <View style={styles.card} key={index}>
            <Image source={{ uri: item.image }} style={styles.imageCard} />

            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
        </View>
    )
}