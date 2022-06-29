import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        borderRadius:15,
        overflow:'hidden'
    },
    
});

export default styles;