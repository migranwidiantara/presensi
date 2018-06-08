import React, { Component } from 'react';
import { ListView, Alert, AsyncStorage, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Radio, Spinner, Header, Content, Card, Form, Item, Label, Input, Left, Body, Right, Title, Button, View, Icon, Fab, List, ListItem, Text } from 'native-base';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  }

  state = {
    username :[],
  }

   componentDidMount(){
     this._loadInitialState().done();
   }

   _loadInitialState = async () => {

     var value = await AsyncStorage.getItem('username');
     if (value !==null){
       this.state({username: value});
     }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome{this.state.username}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  }
});
