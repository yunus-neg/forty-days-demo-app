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
import { AppRegistry, FlatList } from "react-native";
import { createStackNavigator } from "react-navigation";
class TasksScreen extends React.Component {
  static navigationOptions = {
    drawerlabel: "Home"
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={sty.Coursestyle}> المهام </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TasksScreen;
