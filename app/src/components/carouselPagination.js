import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles/carouselPagination.style";
import { updatePage } from '../redux/actions'


const CarouselPaginationButton = ({ text, onPress, isEnable }) => {
    console.log(text, isEnable)
    return (
        <TouchableHighlight disabled={!isEnable} style={[styles.contentButton, isEnable ? styles.contentButtonEnabled : styles.contentButtonDisabled]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
    )
}
const CarouselPagination = props => {
    const nextPag = () => {
        props.updatePage(props.currentPage + 1)
    }
    const prevPag = () => {
        props.updatePage(props.currentPage - 1)
    }
    const isEnableBack = props.currentPage != 0
    const isEnableNext = props.currentPage != (props.countPages - 1)
    return (
        <View style={styles.content}>
            <CarouselPaginationButton text="<" onPress={prevPag} isEnable={isEnableBack} />
            <CarouselPaginationButton text=">" onPress={nextPag} isEnable={isEnableNext} />
        </View>
    )
}
const mapStateToProps = (state) => {
    return state.carouselReducer            //reducers/index.js
}

export default connect(mapStateToProps, { updatePage })(CarouselPagination);