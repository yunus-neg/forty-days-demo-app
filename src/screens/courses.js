import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  button,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import sty from "./style";
import { createStackNavigator } from "react-navigation";
class CourseScreen extends React.Component {
  static navigationOptions = {
    drawerlabel: "Home"
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={sty.Coursestyle}> الدورات التدريبية المدفوعة </Text>
          <Text style={sty.Coursestyle}> الدورات التدريبية المجانية</Text>
        </View>
      </ScrollView>
    );
  }
}

export default CourseScreen;
