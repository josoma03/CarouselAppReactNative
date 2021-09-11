
import {
    CAROUSEL_FETCH_IMAGE_START,
    CAROUSEL_FETCH_IMAGE_SUCCESS,
    CAROUSEL_FETCH_IMAGE_FAIL,
    CAROUSEL_UPDATE_PAGE
} from '../actions/types'

const INITIAL_STATE = {
    error: '',
    loading: false,
    currentPage: 0,
    countPages: 0,
    arrImages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CAROUSEL_FETCH_IMAGE_START:
            return { ...state, loading: true, error: '', currentPage: 0, countPages: 0, arrImages: [] }
        case CAROUSEL_FETCH_IMAGE_SUCCESS:
            return { ...state, ...INITIAL_STATE, arrImages: action.payload, currentPage: 0, countPages: action.count }
        case CAROUSEL_FETCH_IMAGE_FAIL:
            return { ...state, ...INITIAL_STATE, error: 'Error loading images' }
        case CAROUSEL_UPDATE_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state;
    }
}
