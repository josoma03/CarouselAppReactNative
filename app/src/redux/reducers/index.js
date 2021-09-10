import { combineReducers } from 'redux'
import CarouselReducer from './carousel.reducer'

export default combineReducers(
    {
        carouselReducer: CarouselReducer
    }
)