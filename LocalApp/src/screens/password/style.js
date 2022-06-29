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
        flex: 1,
        backgroundColor: "#edf4f8",
      },
      heading: {
        color: "#127cc0",
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: 10,
      },
      textView: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
      },
      otpInputView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 20,
      },
      otpInput: {
        margin: 10,
        height: 60,
        width: 50,
      },
      resendButton: {
        width: 150,
        padding: 6,
        borderRadius: 30,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#FC7F23",
        elevation: 0,
      },
      continueButton: {
        width: 350,
        padding: 6,
        borderRadius: 30,
        marginTop: 150,
      },
 })

 export default styles;
