import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from "react-native"
import { connect } from 'react-redux'
import { getImages, updatePage } from '../redux/actions'
import styles from '../styles/carousel.style'
import CarouselItem from '../components/carouselItem'
import CarouselPagination from '../components/carouselPagination';


const CarouselScreen = props => {
    const scrollRef = useRef()

    useEffect(() => {
        props.getImages()
    }, [])



    const onScroll = event => {
        let newPage = Math.ceil(parseFloat(event.nativeEvent.contentOffset.x / Dimensions.get('window').width));
        if (props.currentPage != newPage) {
            props.updatePage(newPage)
        }
    }

    return (

        <View style={styles.container}>
            <Text>Page: {props.currentPage}</Text>
            <Text>Count pages: {props.countPages}</Text>
            <Text>Count images: {props.arrImages.length}</Text>
            {
                props.loading ? <ActivityIndicator size={'large'} color="#007bff" />
                    :
                    <View >
                        <ScrollView
                            ref={scrollRef}
                            pagingEnabled
                            horizontal
                            onScroll={onScroll}
                            scrollEventThrottle={0}
                            showsHorizontalScrollIndicator={false} >
                            {
                                props.arrImages.length == 0
                                    ? <Text>No images</Text>
                                    : props.arrImages.map((item, index) => {
                                        return <CarouselItem
                                            key={index}
                                            index={index}
                                            item={item}
                                        />
                                    })
                            }
                        </ScrollView>
                        <CarouselPagination />
                    </View>
            }
        </View >
    )
}
const mapStateToProps = (state) => {
    return state.carouselReducer            //reducers/index.js
}

export default connect(mapStateToProps, { getImages, updatePage })(CarouselScreen);
