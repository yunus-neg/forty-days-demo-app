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
import { init as firebase } from "../../firebase";

class LoginScreen extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "ProfileScreen" : "LoginScreen");
    });
  }
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("ProfileScreen");
        console.log("good");
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{
              flex: 1,
              // alignSelf: "stretch",
              width: 200,
              height: 200,
              // marginLeft: 90,
              // alignContent:"center",
              // justifyContent: "center"

            }}
            source={require("../../assets/logo.png")}
          />

          <KeyboardAvoidingView style={sty.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={sty.loginScreenContainer}>
                <View style={sty.loginFormView}>
                  <Text style={sty.logoText}> أهلا بك </Text>
                  {this.state.errorMessage && (
                    <Text style={{ color: "red" }}>
                      {this.state.errorMessage}
                    </Text>
                  )}
                  <TextInput
                    style={sty.loginFormTextInput}
                    placeholderColor="#878787"
                    autoCapitalize="none"
                    placeholder="البريد الإلكتروني"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                  <TextInput
                    secureTextEntry
                    style={sty.loginFormTextInput}
                    autoCapitalize="none"
                    placeholder="كلمة المرور"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />

                  <TouchableOpacity
                    style={sty.loginButton}
                    onPress={this.handleLogin}
                  >
                    <View style={sty.loginButton}>
                      <Text style={styles.getStartedText}>تسجيل الدخول</Text>
                    </View>
                  </TouchableOpacity>

                  <Text style={styles.text}>ليس لديك حساب؟</Text>
                </View>

                <TouchableOpacity
                  style={sty.loginButton}
                  onPress={() => this.props.navigation.navigate("SignupScreen")}
                >
                  <View style={sty.loginButton}>
                    <Text style={styles.getStartedText}>فتح حساب جديد</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
    fontSize: 15
  },
  getStartedText: {
    fontSize: 17,
    color: "white",
    lineHeight: 24,
    textAlign: "center"
  }
});
