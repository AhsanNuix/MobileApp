import { StyleSheet, Text, View ,Dimensions} from 'react-native'


const styles = StyleSheet.create({
    innerView:{
        backgroundColor:'white',
        width: 350,
        height: 100,
        flexDirection:'row',
    },
    image:{
        width:100, 
        height:100,
        
    },
    title:{
        fontSize:16,
        marginHorizontal:5,
        width:200,
    },
    price:{
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        color: '#127cc0',
        marginTop:30,
        marginLeft:10,
    },
    qty:{
        marginTop:25,
        
    },
})

export default styles