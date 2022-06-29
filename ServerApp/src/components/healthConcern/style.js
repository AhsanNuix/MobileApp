import { StyleSheet, Dimensions } from 'react-native'
const windowWidth =  Dimensions.get("window").width

const styles = StyleSheet.create({
    container:{
        width:windowWidth/2+90,
        height:160,
        margin: 10,
        borderRadius:20,
        flexDirection:'row',
    },
    text:{
        color:"white",
        margin:20,
        fontSize:16,
    },
    image:{
        alignSelf:'center',
        width: 130,
        height: 130,
        marginTop:10,
        marginRight:50,
    },
});
export default styles;