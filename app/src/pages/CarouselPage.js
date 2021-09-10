import React, { useEffect } from 'react';
import { Text, View } from "react-native"
import { connect } from 'react-redux'
import { getImages } from '../redux/actions'

const CarouselPage = ({ data, loading, error, getImages }) => {
    console.log(data.length)

    function reload() {
        getImages()
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {loading && <Text>Cargando...</Text>}
            <Text onPress={reload}>Carousel {data.length}</Text>

        </View>
    )
}
const mapStateToProps = (state) => {
    const { data, error, loading } = state.carouselReducer        //reducers/index.js
    return { data, error, loading }
}

export default connect(mapStateToProps, { getImages })(CarouselPage);
