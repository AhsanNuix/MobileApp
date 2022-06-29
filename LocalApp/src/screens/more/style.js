import { StyleSheet , Dimensions} from 'react-native'
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const widthWindow = Dimensions.get("window").width;
const heightWindow = Dimensions.get("window").height;

const styles = StyleSheet.create({
    header:{
        height:50,
        paddingLeft: 20,
        justifyContent:'center',
        backgroundColor:"#abdcf5",
        
    },
    tagger:{
        backgroundColor:'gold',
        width:100,
        alignItems:'center',
        marginLeft:20,
        borderRadius:50,
        padding:5,
        flexDirection:'row',
        height:50,
        
    },
    gift:{
        fontSize:16,
        color: 'black',
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        color:"#127cc0",
        fontWeight:'bold',
        
    },
    button:{
        width: widthWindow-40,
        backgroundColor:"#127cc0",
        margin: 10,
        alignItems:'center',
        borderRadius:50,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        margin: 10,
        color:'white',
    },
    card:{
        width:widthWindow-30,
        height:250,
        margin: 15,
        borderRadius:20,
    },
    innerView:{
        flex: 1,
        borderBottomWidth:0.8,
        flexDirection:'row',
        borderBottomColor:"#127cc0",
        alignItems:'center',
        paddingLeft:20,
    },
    icon:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#abdcf5",
        borderRadius:180,
        
    },
    innerText:{
        fontSize:18,
        color: 'black',
        paddingHorizontal:10,
        flex: 1,
        fontWeight:'bold',
   },
   copyRight:{
       alignSelf:'center',
       fontWeight:'bold',
       color:'gray'
   }
});

export default styles