import { Dimensions, StyleSheet } from 'react-native'
import { contentMargin } from './config'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: contentMargin,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
    },
});

export default styles