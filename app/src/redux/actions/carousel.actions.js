
import {
    CAROUSEL_FETCH_IMAGE_FAIL,
    CAROUSEL_FETCH_IMAGE_START,
    CAROUSEL_FETCH_IMAGE_SUCCESS,
    CAROUSEL_UPDATE_PAGE,
    mac
} from './types'
import { numCards } from '../../config/config'

//ACTIONS CREATOR
export const updatePageAction = mac(CAROUSEL_UPDATE_PAGE, 'payload')
const fetchStartAction = mac(CAROUSEL_FETCH_IMAGE_START)
const fetchFailAction = mac(CAROUSEL_FETCH_IMAGE_FAIL)
const fetchSuccessAction = mac(CAROUSEL_FETCH_IMAGE_SUCCESS, 'payload', 'count')
/*Equivalent:
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
                const objResult = [
                    {
                        title: "Medellin",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/Emily-Lush-Comuna-13-Medellin-26-1.jpg"
                    },
                    {
                        title: "Cartagena",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Cartagena-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Bogotá",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Bogota-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Cali",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Cali-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Guatape",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Guatape-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Villa de Leyva",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Villa-De-Leyva-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Raquira",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Raquira-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Popayán",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/08-Popayan-Catedral-Basi%CC%81lica-de-Nuestra-Sen%CC%83ora-de-la-Asuncio%CC%81n-de-Popaya%CC%81n-Colombia-1-Feliperma15-Wikicommons.jpg"
                    },
                    {
                        title: "Guadalupe",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/09-Guadalupe-The-Church-at-Guadalupe.jpg"
                    },
                    {
                        title: "San Jeronimo",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/10-san-jeronimo-colombia.jpg"
                    },
                    {
                        title: "Minca",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/11-Minca.jpg"
                    },
                    {
                        title: "Salento",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/12-Salento.jpg"
                    },
                    {
                        title: "Valle de Cocora",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/17-Cocora.jpg"
                    },
                    {
                        title: "Ciudad perdida",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/16-Lost-City.jpg"
                    },
                    {
                        title: "Leticia",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/18-leticia-parque-santander-sunset.jpg"
                    },
                    {
                        title: "San Agustin",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/San-Agustin-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Las Lajas",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/13-Las-Lajas-Ipiales-Talesfromthelens.jpg"
                    },
                    {
                        title: "San Gil",
                        image: "https://wander-lush.org/wp-content/uploads/2018/11/14-San-Gil-Mano-Chandra-Dhas-wiki-commons.jpg"
                    },
                    {
                        title: "San Andres",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/San-Andres-Island-Depositphotos-Places-in-Colombia.jpg"
                    },
                    {
                        title: "Taganga",
                        image: "https://wander-lush.org/wp-content/uploads/2021/01/Taganga-Depositphotos-Places-in-Colombia.jpg"
                    },
                ]
                const countPages = Math.ceil(objResult.length / numCards)
                dispatch(fetchSuccessAction(objResult, countPages))
            }, 1000)
        } catch (e) {
            dispatch(fetchFailAction())
        }
    }
}

