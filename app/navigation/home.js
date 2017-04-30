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

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.secondContainer}>
            <View style={styles.shape} >
              <Image source={require('../img/me.jpg')} style={styles.myPic}/>
              <Text style={styles.welcome}>
                Hana Alaydrus
              </Text>
              <View style={styles.createPostButton}>
                <View style={styles.eachButton}>
                  <Button onPress={this.props.onCreateButtonPress} title="  Create Post  " accessibilityLabel="See an informative alert"/>
                </View>
                <View>
                  <Button onPress={this.props.onShowButtonPress} title="  See Post  " accessibilityLabel="See an informative alert"/>
                </View>
              </View>
            </View>
          </View>
          <Image source={require('../img/refactory.png')} style={styles.refactory}/>
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
    width: 280,
    height: 320,
    backgroundColor: 'white',
    elevation:6,
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
    marginBottom: 30,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 20,
  },
  createPostButton: {
    flexDirection: 'row',
  },
  eachButton: {
    marginRight: 10,
  }
});

module.exports = Home;
