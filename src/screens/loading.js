import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {init as firebase} from"../../firebase";

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'ProfileScreen' : 'LoginScreen')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> انتظر من فضلك</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
