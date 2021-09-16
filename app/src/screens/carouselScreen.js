import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from "react-native"
import { getImages } from '../redux/actions'
import styles from '../styles/carousel.style'
import CarouselItem from '../components/carouselItem'
import CarouselPagination from '../components/carouselPagination';
import { contentMargin } from '../config/config';
import { colorBlue } from './../styles/themes'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const width = Dimensions.get('window').width

const CarouselScreen = () => {
    const scrollRef = useRef()
    const dispatch = useDispatch();
    const props = useSelector(state => state.carouselReducer);       //reducers/index.js
    //const currentPage = useSelector((state) => state.carouselReducer.currentPage)   

    useEffect(() => {
        if (props.arrImages.length == 0) {      // load the images and update state
            dispatch(getImages())
        }
    }, [])


    useEffect(() => {
        //Event when changing page, set scrollview
        if (scrollRef.current !== null) {
            scrollRef.current.scrollTo({
                x: (width - (contentMargin * 2)) * (props.currentPage),
                animated: true,
            });
        }
    }, [props.currentPage])
    console.log(props)
    return (

        <View style={styles.container}>
            <Text>Page: {props.currentPage + 1}</Text>
            <Text>Total pages: {props.countPages}</Text>
            <Text>Total cards: {props.arrImages.length}</Text>
            {
                props.loading ? <ActivityIndicator size={'large'} color={colorBlue} />
                    :
                    <View >
                        <ScrollView
                            ref={scrollRef}
                            pagingEnabled
                            horizontal
                            scrollEnabled={false}
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
export default CarouselScreen;
// const mapStateToProps = (state) => {
//     return state.carouselReducer            //reducers/index.js
// }
// export default connect(mapStateToProps, { getImages, updatePage })(CarouselScreen);
