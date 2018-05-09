import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import styles from './LoginStyle';

export default class LoginScreen extends Component {

  // Change to constructor function
  state = {
    username: "",
    password: "",
  };



  // What was the difference between ' = val =>' and '() {'
  usernameChangedHandler = val => {
    this.setState({
      username: val
    })
    if (this.state.username.length >= 10) {
      alert('Max 10 characters')
    }
  }

  passwordChangedHandler = val => {
    this.setState({
      password: val
    })
    if (this.state.password.length >= 10)
      alert('Max 10 characters')

  };

  _buttondisabled() {
    return this.state.username === "" || this.state.password === ""
  }

  _handleButton() {
    if (this.state.username === "Test" && this.state.password === "Test") {
      alert('Awesome!!!')
      // Navigator.push(FeedScreen) - create second page and navigate top i
    } else {
      alert('Username or password icorrect')
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./sky.jpg')}
          style={{ width: '100%', height: '100%', flex: 1, tintColor:'#5f9ea0', }} >

          <View style={styles.title} >
            <Text style={styles.titleText}>
              Title ??
            </Text>
          </View>
          <View style={styles.input}>
        

            <TextInput
              style={styles.username}
              value={this.state.username}
              onChangeText={this.usernameChangedHandler}
              placeholder='Username'
            />
            <TextInput
              style={styles.password}
              value={this.state.password}
              placeholder='Password'
              onChangeText={this.passwordChangedHandler}
            />
         
          </View>
          <Button
            disabled={this._buttondisabled()}
            onPress={() => this._handleButton()}
            title="Login"
            color="red"
            accessibilityLabel="Login to Fuse"
          />
        </ImageBackground>
      </View>
    );
  }

}
