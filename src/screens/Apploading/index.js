import React, {Component} from 'react';
import { StyleSheet, View,Image} from 'react-native';
import {Button,Text} from 'native-base';

class apploading extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../../Images/cat.png')} 
            style={styles.Image} resizeMode="contain"/>
      <View style={styles.Button}>
      <Button block dark
        onPress={()=> this.props.navigation.navigate('welcome')}
      >
      <Text>Begin Learning</Text>
      </Button>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Image:{
    height: 250,
    width:250,
  },
  Button:{
    width:'80%',
    marginTop: 20,
  }


});

export default apploading;