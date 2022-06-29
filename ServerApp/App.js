import { StyleSheet , View} from 'react-native'
import React ,{useContext} from 'react'
import Main from './src/navigations/main/index'
import Context, { Store } from './src/contexts/context'
import PushNotifications from './src/notification'
import AuthProvider from './src/contexts/AuthProvider'
export default function App() {
  return (
    <View style={styles.container}>
    <Context>
    <AuthProvider>
    <PushNotifications />
    <Main />
    </AuthProvider>
    </Context>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})