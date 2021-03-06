import { StyleSheet, Dimensions } from 'react-native'
import { numCards, contentMargin, cardMargin } from '../config/config'
import { colorGray, colorBlue } from '../styles/themes'
const { width: screenWidth } = Dimensions.get('window')
const widthCard = ((screenWidth - (contentMargin * 2) - (cardMargin * 2 * numCards)) / numCards)
const widthImage = widthCard - 10

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: colorGray,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthCard,
        height: 200,
        marginHorizontal: cardMargin,
        paddingVertical: 10,
    },
    imageCard: {
        width: widthImage,
        height: widthImage,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 13,
        height: 30,
        paddingTop: 5,
        backgroundColor: colorBlue,
        width: "100%",
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    }
});

export default styles