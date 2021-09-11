import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    contentButtonEnabled: {
        backgroundColor: '#007bff',
    },
    contentButtonDisabled: {
        backgroundColor: '#C0C0C0',
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