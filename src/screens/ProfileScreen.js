import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
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
import {init as firebase} from"../../firebase";
class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerlabel: "Home"
  };
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <ScrollView>
        <View>
          <TouchableOpacity
            style={sty.FacebookStyle3}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("UserScreen")}
          >
            <Image
              source={require("../assets/profile.png")}
              style={sty.ImageIconStyle}
            />
            <View style={sty.SeparatorLine} />
            <Text style={sty.TextStyle}> الملف الشخصي </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={sty.FacebookStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("NotfScreen")}
          >
            <Image
              source={require("../assets/notif.png")}
              style={sty.ImageIconStyle}
            />
            <View style={sty.SeparatorLine} />
            <Text style={sty.TextStyle}> الاشعارات </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={sty.FacebookStyle1}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("TasksScreen")}
          >
            <Image
              source={require("../assets/task.png")}
              style={sty.ImageIconStyle}
            />
            <View style={sty.SeparatorLine} />
            <Text style={sty.TextStyle}> المهام </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={sty.FacebookStyle2}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("CourseScreen")}
          >
            <Image
              source={require("../assets/course.png")}
              style={sty.ImageIconStyle}
            />
            <View style={sty.SeparatorLine} />
            <Text style={sty.TextStyle}> الدورات التدريبية </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
