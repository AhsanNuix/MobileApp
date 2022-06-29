import { StyleSheet } from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    
    headerTitle:{
        padding:10,
        backgroundColor:"#95dcfc",
        
        
    },
    titleText:{
        flex: 1,
        paddingLeft:20,
        fontSize:20,
        fontWeight:'bold',
        color:"#127cc0",
    },
    subDepartment:{
        marginHorizontal:10,
        marginTop:10,
    },
    subParentText:{
        fontSize:16,
    },
    selectedSubDepartment:{
        borderBottomWidth:4,
        borderBottomColor:"#127cc0"
    },
    categories:{
        margin:10,
        backgroundColor:'#95dcfc',
        padding:10,
        borderRadius:50,
    },
    categoriesText:{
        color:"#127cc0",
        fontSize:16,
    },
    selectedCategory:{
        backgroundColor:'#127cc0',
    },
    selectedCategoryText:{
        color:'white'
    }
    
    
});

export default styles;