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

class ShowPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataTitle: [],
      dataBody: []
    }
  }

  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataTitle: responseJson.title,
        dataBody: responseJson.body
      })
    })
    .catch((error) => { console.error(error); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.secondContainer}>
            <View style={styles.shape} >
              <Text style={styles.caption}>
                TITLE
              </Text>
              <Text style={styles.title}>
                {this.state.dataTitle}
              </Text>
              <Text style={styles.caption}>
                BODY
              </Text>
              <Text style={styles.body}>
                {this.state.dataBody}
              </Text>
            </View>
          </View>
          <Image source={require('../img/refactory.png')} style={styles.refactory} />
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
    height: 350,
    backgroundColor: 'white',
    elevation:6,
    borderRadius:4,
  },
  refactory: {
    width: 120,
    height: 50,
    marginBottom: 30,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 20,
  },
  body: {
    fontSize: 15,
    textAlign: 'justify',
    margin: 10,
    paddingBottom: 20,
  },
});

module.exports = ShowPost;
