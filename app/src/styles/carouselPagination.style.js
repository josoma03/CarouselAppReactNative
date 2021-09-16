import { StyleSheet } from 'react-native'
import { colorGray, colorBlue } from '../styles/themes'

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    contentButtonEnabled: {
        backgroundColor: colorBlue,
    },
    contentButtonDisabled: {
        backgroundColor: colorGray,
    },
    contentButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    content: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10
    }
});

export default styles