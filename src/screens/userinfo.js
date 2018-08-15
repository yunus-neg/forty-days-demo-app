import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  button,
  ImageBackground,
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
// import img from "./assets/bg1.png";
import {init as firebase} from"../../firebase";

class UserScreen extends React.Component {
  static navigationOptions = {
    drawerlabel: "Home"
  };

  handleLogOut() {
    firebase.auth().signOut();
  }

  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={sty.loginScreenContainer}>
            <View style={sty.loginFormView}>
              <Image
                source={require("../assets/profile.png")}
                style={{
                  padding: 0,
                  marginTop: 10,
                  marginLeft: 140,
                  height: 100,
                  width: 100
                }}
              />

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderWidth: 0.5,
                  borderColor: "#fff",
                  height: "9%",
                  width: "100%",
                  marginTop: 5
                }}
                activeOpacity={0.5}
              >
                <View style={sty.SeparatorLine} />
                <Text style={{ fontSize: 20 }}>
                البريد الالكتروني {currentUser && currentUser.email}
                </Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderWidth: 0.5,
                  borderColor: "black",
                  height: "9%",
                  width: "100%"
                }}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("EditinfoScreen")}
              >
                <View style={sty.SeparatorLine} />
                <Text style={{ fontSize: 20, marginLeft: 150 }}>
                  تعديل المعلومات الشخصية
                </Text>
              </TouchableOpacity>

              <Text style={sty.regText}> المهام المكتملة </Text>

              <Text style={sty.regText}> المهام الغير مكتملة </Text>

              <TouchableOpacity
                style={sty.skills}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("SkillsScreen")}
              >
                <Image
                  source={require("../assets/skills.png")}
                  style={sty.ImageIconStyle}
                />
                <View style={sty.SeparatorLine} />
                <Text style={sty.TextStyle}> مهاراتي </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={sty.singoutButton}
                onPress={this.handleLogOut}
              >
                  <Text style={sty.signout}>تسجيل الخروج</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default UserScreen;
