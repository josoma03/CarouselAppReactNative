
import {
    CAROUSEL_FETCH_IMAGE_START,
    CAROUSEL_FETCH_IMAGE_SUCCESS,
    CAROUSEL_FETCH_IMAGE_FAIL,
} from '../actions/types'


const INITIAL_STATE = {
    error: '',
    loading: false,
    arrImages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CAROUSEL_FETCH_IMAGE_START:
            return { ...state, loading: true, error: '', arrImages: [] }
        case CAROUSEL_FETCH_IMAGE_SUCCESS:
            return { ...state, ...INITIAL_STATE, arrImages: action.payload }
        case CAROUSEL_FETCH_IMAGE_FAIL:
            return { ...state, error: 'Error loading images', loading: false }
        default:
            return state;
    }
}
