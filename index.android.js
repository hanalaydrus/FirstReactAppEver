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
  Image
} from 'react-native';

export default class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.secondContainer}>
            <View style={styles.shape} >
              <Image source={require('./me.jpg')} style={styles.myPic}/>
              <Text style={styles.welcome}>
                Hana Alaydrus
              </Text>
              <Image source={require('./refactory.png')} style={styles.refactory}/>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shape : {
    width: 250,
    height: 350,
    backgroundColor: 'white',
    elevation:10,
    borderRadius:4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myPic: {
    width: 150,
    height: 150,
  },
  refactory: {
    width: 120,
    height: 50,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 20,
  },

});

AppRegistry.registerComponent('FirstApp', () => FirstApp);
