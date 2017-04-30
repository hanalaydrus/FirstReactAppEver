/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './app/navigation/home';
import CreatePost from './app/navigation/create-post';
import ShowPost from './app/navigation/show-post';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    const onCreateButtonPressProps = () => {
      navigate('CreatePost')
    };
    const onShowButtonPressProps = () => {
      navigate('ShowPost')
    };
    return <Home onCreateButtonPress={onCreateButtonPressProps} onShowButtonPress={onShowButtonPressProps}/>;
  }
}

class CreatePostScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Post',
  };
  render() {
    return <CreatePost />
  }
}

class ShowPostScreen extends React.Component {
  static navigationOptions = {
    title: 'Show Post',
  };
  render() {
    return <ShowPost />
  }
}

const FirstApp = StackNavigator({
  Home: { screen: HomeScreen },
  CreatePost: { screen: CreatePostScreen },
  ShowPost: { screen: ShowPostScreen },
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
