import { View, Text} from 'react-native'
import React ,{useRef , useEffect} from 'react'
import Header from "../../components/header/index";
import styles from './style';
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
export default function SearchScreen() {
  const [text, setText] = React.useState("");
  const textInputRef = React.useRef();
  useEffect(() => {
    if (textInputRef.current) {
      setTimeout(() => textInputRef.current.focus(), 200);
    }
  }, []);
  return (
    <View style={{flex:1}}>
      <Header />
      <View style={styles.header}>
       <Text style={styles.text}>
         Search
       </Text>
     </View>
     <TextInput 
     ref={textInputRef}
     style={styles.input}
     theme={{roundness: 50}}
       mode='outlined'
       label='what are you looking for?'
       activeOutlineColor='#127cc0'
       right={<TextInput.Icon name='magnify' color='#127cc0'/>}
     />
    </View>
  )
}