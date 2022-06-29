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
    maincontainer: {
        flex: 1,
        backgroundColor: "#edf4f8",
      },
    
      container1: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#d6edff",
        marginTop: 10,
        elevation: 0,
      },
    
      container2: {
        flex: 12,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        borderRadius: 30,
        width: "90%",
      },
    
      button: {
        width: "85%",
        height: "7%",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#127cc0",
        flexDirection: "row",
      },
    
      text1: {
        color: "white",
        fontSize: 18,
      },
    
      text2: {
        color: "#127cc0",
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: "center",
        fontWeight: "bold",
      },
      divider: {
        height: 3,
        backgroundColor: "white",
      },
 })

 export default styles;
