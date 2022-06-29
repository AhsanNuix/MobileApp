import { StyleSheet , Dimensions} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const widthWindow = Dimensions.get("window").width;
const styles = StyleSheet.create({
   card:{
       paddingVertical:20,
   },
   buttonHeader:{
       borderBottomWidth:1,
       borderBottomColor:"#abdcf5",
       backgroundColor:"#abdcf5",
       alignItems:'flex-start',
       height:60,
       justifyContent:'center'
   },
   image:{
       height:200,
       width: 200,
       alignSelf:'center'
   },
   Button:{
       width: widthWindow-30,
       flexDirection:'row',
       marginLeft:5,
       justifyContent:'space-between'
   },
   zoom:{
       justifyContent:'center',
       alignItems:'center',
       
   },
   share:{
       justifyContent:'space-around',
       backgroundColor:"#abdcf5",
       width:40,
       height:40,
       alignItems:'center',
       borderRadius:360,
   },
   title:{
       marginLeft:10,
       fontSize:20,
       fontWeight:'bold',
       color:'#127cc0',
       marginBottom:5,
   },
   company:{
       fontSize:18,
       color: 'black',
       marginLeft:10,
       marginBottom:5,
       textAlign:'left',
       
   },
   innerContainerOne:{
       backgroundColor:"#abdcf5",
       paddingVertical:10,
       marginVertical:4,
       
   },
   effectView:{
    flexDirection:'row', 
    justifyContent:'space-between',
    padding: 20,
    borderBottomWidth:4,
    borderBottomColor:"white",
    backgroundColor:"#abdcf5",
   },
   effectButton:{
       fontSize:18,
       color:"#127cc0",
      
   },
   cartView:{
       width: widthWindow-2,
       padding: 20,
       backgroundColor:"white",
       alignItems:'center',
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
   },
   cartButton:{
       backgroundColor:'#127cc0',
       width:350,
       height: 50,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:50,
   },
   ButtonText:{
       color: 'white',
       fontSize:18,
       fontWeight:'bold',
   },
   bottomSheetHeader:{
       backgroundColor:"#abdcf5",
       alignItems:'center',
       flexDirection:'row',
       justifyContent:'center',
   },
   bottomSheetHeaderText:{
       color:"#127cc0",
       fontSize:20,
       fontWeight:'bold',
       padding: 20,
       alignSelf:'center',
       
   },
   points:{
       width: 85,
       height:35,
    marginTop:20,
    marginLeft:10,
    flexDirection:"row",
    backgroundColor:'#f5d882',
    borderRadius:50,
    alignItems:'center',
  },
  star:{
    width:40,
    height:40,
    
  },
  starText:{
    fontWeight:"bold",
    fontSize:16,

  },
   
});
export default styles;