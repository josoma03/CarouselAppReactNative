import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import { connect } from 'react-redux'
import { getImages } from '../redux/actions'
import styles from '../styles/carousel.style'
import CarouselItem from '../components/carouselItem'


const CarouselPage = ({ arrImages, loading, error, getImages }) => {
    useEffect(() => {
        getImages()
    }, [])

    return (

        <View style={styles.container}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} >
                {
                    loading ? <ActivityIndicator size={'large'} color="#007bff" />
                        :
                        <>
                            {arrImages.length == 0
                                ? <Text>No images</Text>
                                : arrImages.map((item, index) => {
                                    return <CarouselItem
                                        key={index}
                                        index={index}
                                        item={item}
                                    />
                                })}
                        </>
                }
            </ScrollView>
        </View>
    )
}
const mapStateToProps = (state) => {
    const { arrImages, error, loading } = state.carouselReducer        //reducers/index.js
    return { arrImages, error, loading }
}

export default connect(mapStateToProps, { getImages })(CarouselPage);
