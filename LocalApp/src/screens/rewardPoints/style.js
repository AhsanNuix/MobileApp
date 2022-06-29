import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    pointCard:{
        flex:0.7,
        margin:10,
        borderRadius:20,
    },
    view1:{
        backgroundColor:'#abdcf5',
        width:130,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:20,
        borderTopLeftRadius:20,
    },
    text:{
        fontWeight:'bold',
        color:'#127cc0',
    },
    view2:{
        flex:0.35,
        borderBottomWidth:0.8,
        borderBottomColor:'#127cc0',
        padding:20,

    },
    image:{
        width:100,
        height:100,
    },
    pointText:{
        color:'gold',
        fontSize:40,
        fontWeight:'bold',

    },
    expireText:{
        color:'red',
        alignSelf:'center',
        
    },
    view3:{
        padding:15,
        flex:0.6
    },
    moneyText:{
        marginVertical:10,
        fontSize:25,
        color:'#127cc0',
        fontWeight:'bold',

    },
    card2:{
        margin:10,
        borderRadius:20,
        padding: 10,
    },
    innerView:{
        width:370,
    },
    pointCash:{
        fontSize:20,
        color:'gold',
        fontWeight:'bold',

    },
    progress:{
        width:270,
        height:10,
        borderRadius:20,
        marginVertical:10,
    },
    lock:{
        width:130,
        backgroundColor:'#ededeb',
        alignItems:'flex-end',
        height:40,
        justifyContent:'center',
        borderTopRightRadius:20,
    },
    lockText:{
        marginRight:20,
        color:'gray',
        fontSize:16,
        fontWeight:'bold',
        
    },
})

export default styles;