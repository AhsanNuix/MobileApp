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
        flex: 1,
        padding: 20,
        backgroundColor: "#edf4f8",
      },
      surface: {
        flex: 1,
        marginTop: 150,
        marginBottom: 80,
        borderRadius: 30,
        paddingHorizontal: 10,
      },
      avatarContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      avatar: {
        position: "absolute",
        backgroundColor: "#bdb7b7",
      },
      avatarIcon: {
        position: "absolute",
        marginLeft: 200,
        marginTop: 20,
      },
      inputsContainer: {
        marginTop: 100,
        justifyContent: "center",
      },
      radioContainer: {
        flexDirection: "row",
        marginVertical: 10,
      },
      radio: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 20,
      },
      buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
      },
      button: {
        width: "100%",
        padding: 6,
        borderRadius: 30,
        marginVertical: 10,
      },
 })

 export default styles;
