
import {
    CAROUSEL_FETCH_IMAGE_FAIL,
    CAROUSEL_FETCH_IMAGE_START,
    CAROUSEL_FETCH_IMAGE_SUCCESS,
    CAROUSEL_UPDATE_PAGE,
    mac
} from './types'
import { numCards } from '../../config/config'

//ACTIONS CREATOR
const updatePageAction = mac(CAROUSEL_UPDATE_PAGE, 'payload')
const fetchStartAction = mac(CAROUSEL_FETCH_IMAGE_START)
const fetchFailAction = mac(CAROUSEL_FETCH_IMAGE_FAIL)
const fetchSuccessAction = mac(CAROUSEL_FETCH_IMAGE_SUCCESS, 'payload', 'count')
/*Equivalente:
const fetchSuccessAction = payload => ({
    type: CAROUSEL_FETCH_IMAGE_SUCCESS,
    payload,
})*/

export const updatePage = (page) => {
    return (dispatch) => {
        dispatch(updatePageAction(page))
    }
}
export const getImages = () => {
    return (dispatch) => {
        dispatch(fetchStartAction())
        try {
            setTimeout(() => {
                let objResult = [
                    {
                        title: "Puzzle",
                        image: "https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/6853294/e0d59971.png"
                    },
                    {
                        title: "Plan Auto - Phone",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/mobile-planauto.png"
                    },
                    {
                        title: "Plan Auto - About",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/planauto-image2.png"
                    },
                    {
                        title: "Plan Auto - Facts",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/macbook-planauto.png"
                    },
                    {
                        title: "INgagedIN - Phone",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/ingagedin-mobile.png"
                    },
                    {
                        title: "INgagedIN - The Challenge",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/img-ingagein.png"
                    },
                    {
                        title: "Gesinco - Pone",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/phone-gesinco.png"
                    },
                    {
                        title: "Gesinco - The Challenge",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/macbook-gesinco.png"
                    },
                    {
                        title: "Gesinco - Facts (SSO)",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/macbook-gesinco-3-1.png"
                    },
                    {
                        title: "Gesinco - Tech challenge",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/macbook-gesinco-2-2.png"
                    },
                    {
                        title: "Cosmo - Phone",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/image-cosmo-1-1136x2048.png"
                    },
                    {
                        title: "Cosmo - The Challenge",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/What-is-React-Native_-15.png"
                    },
                    {
                        title: "Tenpo - Phone",
                        image: "https://thepuzzle.digital/wp-content/uploads/2021/01/tenpo-mobile.png"
                    },
                    {
                        title: "Tenpo - About",
                        image: "https://thepuzzle.digital/wp-content/uploads/2020/12/tenpo-app-tarjeta-mastercard.png"
                    },
                ]
                let countPages = Math.ceil(objResult.length / numCards)
                dispatch(fetchSuccessAction(objResult, countPages))
            }, 1000)
        } catch (e) {
            dispatch(fetchFailAction())
        }
    }
}

