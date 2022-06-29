import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        width: windowWidth-20,
        height: windowHeight-150,
        margin: 10,
        alignItems: "center",
        justifyContent:'center',
        padding: 5,
        paddingTop:150,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 20,
      },
      header:{
        height:50,
        paddingLeft: 20,
        justifyContent:'center',
        backgroundColor:"#abdcf5",
    },
    text:{
        fontSize:20,
        color:"#127cc0",
        fontWeight:'bold',
    },
    image:{
        width: 250 , 
        height: 250,
        marginLeft:20,
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
    cartCard:{
        margin:20,
        padding:10,
        borderRadius:20,
    }
})

export default styles