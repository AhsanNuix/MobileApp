import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#127cc0",
  },
  text: {},
  cardHead: {
    backgroundColor: "#abdcf5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 180,
    width: 40,
  },
  cardIcon: {
    backgroundColor: "#ff524f",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:180
  },
  plus:{
      backgroundColor:'#abdcf5',
      alignItems:"center",
      justifyContent:"center",
      borderRadius:180,
      flex:0.16
  },
  innerView:{
      flexDirection:"row",
      borderBottomWidth:1,
      borderBottomColor:'#abdcf5',
      marginVertical:10,
      

  },
  image:{
      width:50,
      height:50,
      marginBottom:20,
  },
  innerText:{
      color:'#127cc0',
      fontSize:16,
      fontWeight:"bold",
  },
  switch:{
      marginLeft:30,
      height:40
  },
  servaid:{
      color:'gray'
  },
  buttonHeader:{
   
    backgroundColor:"#abdcf5",
alignItems:"center",
    height:60,
    flexDirection:"row"
},
button:{
    margin:10,
    backgroundColor:"#127cc0",
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    
},
buttonText:{
    margin: 20,
    fontSize:18,
    color:'white',
    
},
input:{
  flex:1,
  marginRight:10
},
});

export default styles;
