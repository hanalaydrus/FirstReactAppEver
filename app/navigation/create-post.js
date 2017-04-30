import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

class CreatePost extends Component {
  state = {
    curTextTitle: '<No Event>',
    curTextBody: '<No Event>',
  };

  updateTextTitle = (text) => {
    this.setState((state) => {
      return {
        curTextTitle: text,
      };
    });
  };
  updateTextBody = (text) => {
    this.setState((state) => {
      return {
        curTextBody: text,
      };
    });
  };

  onButtonPress = () => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({
        title: this.state.curTextTitle,
        body: this.state.curTextBody,
        userId: 1
      }),
      })
      Alert.alert("Success Posting","Title: "+this.state.curTextTitle+"\nBody: "+this.state.curTextBody);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.secondContainer}>
            <View style={styles.shape} >
              <Text style={styles.title}>
                TITLE
              </Text>
              <TextInput
                autoCapitalize="none"
                placeholder="Put a nice title here"
                autoCorrect={false}
                onChange={(event) => this.updateTextTitle( event.nativeEvent.text )}
                onEndEditing={(event) => this.updateTextTitle( event.nativeEvent.text )}
                onSubmitEditing={(event) => this.updateTextTitle( + event.nativeEvent.text )}
                style={styles.singleLine}
              />

              <Text style={styles.title}>
                BODY
              </Text>
              <TextInput
                autoCapitalize="none"
                placeholder="Put a hilarious content here"
                autoCorrect={false}
                onChange={(event) => this.updateTextBody(event.nativeEvent.text )}
                onEndEditing={(event) => this.updateTextBody(event.nativeEvent.text )}
                onSubmitEditing={(event) => this.updateTextBody(event.nativeEvent.text )}
                style={styles.singleLine}
              />
              <View style={styles.createPostButton}>
                <Button onPress={this.onButtonPress} title="  Post  " accessibilityLabel="See an informative alert"/>
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
  width: 335,
  height: 260,
  backgroundColor: 'white',
  elevation:4,
  borderRadius:4,
  //justifyContent: 'center',
  //alignItems: 'center',
},
refactory: {
  width: 120,
  height: 50,
  marginBottom: 30,
  alignItems: 'flex-start',
},
title: {
  fontWeight: 'bold',
  fontSize: 15,
  textAlign: 'left',
  margin: 10,
},
createPostButton: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: 10,
  marginRight: 10,
},
singleLine: {
  fontSize: 16,
  padding: 4,
  margin: 10,
},
});

module.exports = CreatePost;
