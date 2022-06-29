import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    map:{
        flex:0.5,
    },
    head:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
        color:"#127cc0"
    },
    input:{
        backgroundColor:'#e1fcfc',
        margin:10,
    },
    icons:{
        backgroundColor:'#abdcf5',
        height:50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,

    },
    button:{
        backgroundColor:"#127cc0",
        margin: 20,
        alignItems:'center',
        borderRadius:50,
    },
    buttonText:{
        fontSize:20,
        marginVertical:10,
        color:'white',

    },
})

export default styles;