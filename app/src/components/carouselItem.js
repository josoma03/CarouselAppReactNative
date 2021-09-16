import React, { useState } from 'react'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import styles from './../styles/carouselItem.style'
import { colorBlue } from './../styles/themes'

export default CarouselItem = ({ item, index }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (
        <View style={styles.card} key={index}>
            <Image
                onLoad={() => setIsImageLoaded(true)}
                source={{ uri: item.image }}
                style={styles.imageCard} />
            {!isImageLoaded && <ActivityIndicator color={colorBlue} />}
            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
        </View>
    )
}