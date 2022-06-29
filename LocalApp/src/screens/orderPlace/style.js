import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    image:{
        width: 250 , 
        height: 250,
        
    },
    innerView:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    },
    textHeader: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: "bold",
        color: "#127cc0",
      },
      text:{
          fontSize:16,
      },
      text_2:{
          textAlign:'center',
          marginHorizontal:20,
      },
      button:{
        margin:20,
        backgroundColor:"#127cc0",
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        margin: 20,
        fontSize:18,
        color:'white'
    },
})

export default styles;