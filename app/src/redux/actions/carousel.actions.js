
import {
    CAROUSEL_LOGIN_UPDATE,
    mac
} from './types'
import { Actions } from 'react-native-router-flux';

const fetchFailAction = mac(CAROUSEL_LOGIN_UPDATE)
const fetchStartAction = mac(CAROUSEL_LOGIN_UPDATE)
const fetchSuccessAction = mac(CAROUSEL_LOGIN_UPDATE, 'payload')

export const getImages = () => {
    return (dispatch) => {
        dispatch(fetchStartAction())
        setTimeout(() => {
            let objResult = [
                {
                    title: "Puzzle",
                    image: "https://thepuzzle.digital/wp-content/uploads/2020/12/logo-puzzle.svg"
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
            dispatch(fetchSuccessAction(objResult))
        }, 1500)
    }
}

