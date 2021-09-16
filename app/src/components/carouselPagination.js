import React, { useEffect } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles/carouselPagination.style";
import { updatePage, updatePageAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';


const CarouselPaginationButton = ({ text, onPress, isEnable }) => {
    return (
        <TouchableHighlight disabled={!isEnable} style={[styles.contentButton, isEnable ? styles.contentButtonEnabled : styles.contentButtonDisabled]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
    )
}
const CarouselPagination = () => {
    const dispatch = useDispatch();
    const props = useSelector(state => state.carouselReducer);  //reducers/index.js

    const isEnableBack = props.currentPage != 0
    const isEnableNext = props.currentPage != (props.countPages - 1)


    const nextPag = () => {
        dispatch(updatePage(props.currentPage + 1))
    }
    const prevPag = () => {
        dispatch(updatePage(props.currentPage - 1))
    }

    return (
        <View style={styles.content}>
            <CarouselPaginationButton text="<" onPress={prevPag} isEnable={isEnableBack} />
            <CarouselPaginationButton text=">" onPress={nextPag} isEnable={isEnableNext} />
        </View>
    )
}


export default CarouselPagination