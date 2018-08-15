import React from 'react';
import { StyleSheet, Text, View ,  ScrollView,  Image, TouchableOpacity } from 'react-native';
import {Keyboard, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import sty from "./style";
import {createStackNavigator} from 'react-navigation';

 class NotfScreen extends React.Component {
  render() {
    return (
       <ScrollView>
      <View>
   
 <Text style={sty.Coursestyle}> الاشعارات </Text>

      </View>
       </ScrollView>
    );
  }
}
export default NotfScreen;