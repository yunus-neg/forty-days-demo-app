import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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

class SkillsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={sty.Coursestyle}> مهاراتي </Text>
        </View>
      </ScrollView>
    );
  }
}
export default SkillsScreen;
