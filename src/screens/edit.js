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

class EditinfoScreen extends React.Component {
  state = {
    firsname: null,
    lastname: null,
    cvurl: null,
    creditname: null,
    creditnumber: null
  };

  componentDidMount(){
    this.setState({
      firsname: null,
      lastname: null,
      cvurl: null,
      creditname: null,
      creditnumber: null
    });
    var user = firebase.auth().currentUser;
    if (!user) {
      alert("you need to sign in");
      return;
    }
    let uid = user["uid"];

    let database = firebase.database();
    let userdata = database.ref("users/" + uid);

    userdata.once("value").then(Gotdata => {
      let data = Gotdata.val();
      this.setState({
        firsname: data["firstname"] || null,
        lastname: data["lastname"] || null,
        cvurl: data["cvurl"] || null,
        creditname: data["creditname"] || null,
        creditnumber: data["creditnumber"] || null
      });
      console.log(this.state);
      console.log(data);
    });
  }
  update = () => {
    var user = firebase.auth().currentUser;
    if (!user) {
      alert("you need to sign in");
      return;
    }
    let uid = user["uid"];

    let database = firebase.database();
    let userdata = database.ref("users/" + uid);
    let msg = {
      firstname: this.state.firsname,
      lastname: this.state.lastname,
      cvurl: this.state.cvurl,
      creditname: this.state.creditname,
      creditnumber: this.state.creditnumber
    };
    userdata.update(msg);
    // this.refresh();
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={sty.editstyle}> تعديل المعلومات الشخصية </Text>

          <TextInput
            placeholder="الاسم الاول"
            placeholderColor="#878787"
            style={sty.loginFormTextInput}
            onChangeText={text => this.setState({ firsname: text })}
            value={this.state.firsname}
          />
          <TextInput
            placeholder="الاسم الثاني"
            placeholderColor="#878787"
            style={sty.loginFormTextInput}
            onChangeText={text => this.setState({ lastname: text })}
            value={this.state.lastname}
          />

          <TextInput
            placeholder="السيرة الذاتية"
            placeholderColor="#878787"
            style={sty.loginFormTextInput}
            onChangeText={text => this.setState({ cvurl: text })}
            value={this.state.cvurl}
          />
          <TextInput
            placeholder="اسم حامل البطاقة الائتمانية"
            placeholderColor="#878787"
            style={sty.loginFormTextInput}
            onChangeText={text => this.setState({ creditname: text })}
            value={this.state.creditname}
          />
          <TextInput
            placeholder="رقم البطاقة الائتمانية"
            placeholderColor="#878787"
            style={sty.loginFormTextInput}
            onChangeText={text => this.setState({ creditnumber: text })}
            value={this.state.creditnumber}
          />

          <TouchableOpacity style={sty.loginButton} onPress={this.update}>
            <View style={sty.loginButton}>
              <Text style={styles.getStartedText}>حفظ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default EditinfoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
    fontSize: 20,
    color: "white",
    lineHeight: 24,
    textAlign: "center"
  }
});
