import React, {Component} from 'react';
import { StyleSheet, View,Image} from 'react-native';
import {Button, Text} from 'native-base'

class welcome extends Component{
  render() {
    return (
      <View style={styles.container}>

      <Image source={require('../../Images/cat_main.png')}
             style={styles.Image} resizeMode="contain"/>

      <View style={styles.Button}>
      <Button block light
        onPress={()=>{this.props.navigation.navigate('addwords')}}
      >
         <Text style={{color:'black'}}>Add New Words</Text>
      </Button>
      </View>

      <View style={styles.Button}>
      <Button block dark
        onPress={()=> {this.props.navigation.navigate('cardview')}}
      >
         <Text >Review</Text>
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
    marginBottom:30
  },
  Button:{
    width:'80%',
    marginBottom: 20,
  }

});

export default welcome;