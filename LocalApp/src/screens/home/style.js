import { StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    top:{
       width: windowWidth,
       height: 130,
       backgroundColor:"#127cc0",
       borderBottomLeftRadius:30,
       borderBottomRightRadius:30,
       
    },
    searchBar:{
        width:300,
        height: 50,
        backgroundColor:"red"

    },
    logo:{
        height: 50,
        width: 50
    },
    title:{
        color:"white",
        fontSize:30,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:5,
    },
    underTitle:{
        fontSize:10.5,
        color:"white",
        marginLeft:14,
    
    },
    logoView:{
        flexDirection:'row',
        height:40
    },
    searchBar:{
        backgroundColor:"white",
        height: 60,
        marginHorizontal:30,
        marginTop:40,
        borderRadius:50,
        alignItems:'center',
        paddingLeft:20,
        flexDirection:'row'
    },
    searchbarText:{
        color:"#127cc0",
        fontSize:16
    },
    tags:{
        flexDirection:'row',
    },
    tag_one:{
        width: windowWidth/2-20,
        height: 150,
        margin: 10,
        borderRadius:20,
        padding: 10,
    },
    tag_text:{
        fontSize:16,
        color: "white"
    },
    tag_image:{
        width:70,
        height:70,
        marginLeft:60,
    },
    textTitle:{
        margin: 10,
        color: "#127cc0",
        fontSize:18,
        fontWeight:"bold",
    },
    
});

export default styles