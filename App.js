import React from 'react';
import { StyleSheet, Text, View , Button ,  Image, TouchableOpacity } from 'react-native';
import {Keyboard, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import sty from "./src/screens/style";
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CourseScreen from './src/screens/courses';
import SignupScreen from './src/screens/signup';
import {DrawerNavigator} from 'react-navigation';
import UserScreen from './src/screens/userinfo';
import TasksScreen from'./src/screens/tasks';
import NotfScreen from './src/screens/notifications';
import SkillsScreen from './src/screens/skills';
import EditinfoScreen from './src/screens/edit';
import LoadingScreen from './src/screens/loading'



const AppNavigator = createStackNavigator({
LoginScreen:{screen:LoginScreen},
ProfileScreen:{screen:ProfileScreen},
CourseScreen:{screen:CourseScreen},
SignupScreen:{screen:SignupScreen},
TasksScreen:{screen:TasksScreen},
UserScreen:{screen:UserScreen},
SkillsScreen:{screen:SkillsScreen},
NotfScreen:{screen:NotfScreen},
EditinfoScreen:{screen:EditinfoScreen},
LoadingScreen:{screen:LoadingScreen},
},{
	initialRouteName: 'LoginScreen',
})

export default class App extends React.Component {
  render() {
    return ( <AppNavigator/>

          );
  }
}




