import React from 'react';
import {AppRegistry} from 'react-native';
import firebase from "firebase";
import {StyleSheet, Text, View} from 'react-native';

import AppNavigation from "./components/AppNavigation";

export default class App extends React.Component{
  componentWillMount() {
    firebase.initializeApp( {
      apiKey: "AIzaSyB28nxTcEpXiahOjZAxMqAgUGaVDYC5o0I",
      authDomain: "uasexpo1.firebaseapp.com",
      databaseURL: "https://uasexpo1.firebaseio.com",
      projectId: "uasexpo1",
      storageBucket: "uasexpo1.appspot.com",
      messagingSenderId: "555681859224",
      appId: "1:555681859224:web:6f6cef4d4b9fab1d"
    });
  }
  render() {
    return(
      <AppNavigation/>
    );
  }
}

AppRegistry.registerComponent('SekutCo', () => SekutCo);