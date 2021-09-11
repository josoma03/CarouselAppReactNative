import { StyleSheet, Dimensions } from 'react-native'
import { numBlocks, contentMargin, cardMargin } from './config'
const { width: screenWidth } = Dimensions.get('window')
const widthCard = ((screenWidth - (contentMargin * 2) - (cardMargin * 2 * numBlocks)) / numBlocks)
const widthImage = widthCard - 10

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
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
        height: 40,
        backgroundColor: '#007bff',
        width: "100%",
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    }
});

export default styles