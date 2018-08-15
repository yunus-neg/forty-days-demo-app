import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  button,
  Image,
  Button,
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
// import courseStyle from "./coursestyle";
import { createStackNavigator } from "react-navigation";
import {init as firebase} from"../../firebase";

class SignupScreen extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  static navigationOptions = {
    drawerlabel: "Home"
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate("ProfileScreen"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <KeyboardAvoidingView style={sty.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={sty.loginScreenContainer}>
                <View style={sty.loginFormView}>
                  <Text style={sty.logoText}> انشاء حساب </Text>
                  {this.state.errorMessage && (
                    <Text style={{ color: "red" }}>
                      {this.state.errorMessage}
                    </Text>
                  )}

                  <TextInput
                    style={sty.loginFormTextInput}
                    placeholderColor="#878787"
                    autoCapitalize="none"
                    placeholder="البريد الالكتروني"
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
                    onPress={this.handleSignUp}
                  >
                    <View style={sty.loginButton}>
                      <Text style={styles.getStartedText}>الانضمام</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

export default SignupScreen;
const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    color: "#878787",
    lineHeight: 24,
    textAlign: "center"
  }
});
