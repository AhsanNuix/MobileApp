import { StyleSheet, Text, View , Dimensions } from 'react-native'


 const styles = StyleSheet.create({
     head:{
         fontSize:20,
         marginLeft:10,
         fontWeight:'bold',
         color:"#127cc0"

     },
     innerHead:{
        fontSize:18,
        fontWeight:'bold',
        color:"#127cc0",
        borderBottomWidth:4,
     },
     input:{
         width: Dimensions.get('window').width-20,
         marginTop:20,
         
     },
     button:{
         width: Dimensions.get('window').width-20,
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
    container: {

        alignItems: "center",
        justifyContent: "flex-start",
      },
    
      fab: {
        position: "relative",
        margin: 16,
        left: 125,
        backgroundColor: "#dbfdcf",
      },
    
      button: {
        width: "93%",
        borderRadius: 20,
        height: 60,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 40,
        backgroundColor: "white",
        flexDirection: "row",
      },
    
      text1: {
        color: "#1273DE",
        fontSize: 18,
        marginLeft: 20,
      },
    
      text2: {
        color: "#1273DE",
        fontSize: 20,
        marginTop: 10,
      },
 })

 export default styles;
