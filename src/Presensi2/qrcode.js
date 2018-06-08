import React, { Component } from 'react';
import { ListView, WebView } from 'react-native';
import { Container, Header, Title, Content, ListItem, List, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  constructor(props) {
     super(props)
     this.state = {
       TextInput_NIM: '',
     }
   }

   componentDidMount(){
    this.setState({
      TextInput_NIM : this.props.navigation.state.params.NIM,
    })
   }


  render() {
    return (
      <WebView
        source={{ uri: 'https://migranwidiantara.000webhostapp.com/phpqrcode/index.php?nim='+ this.state.TextInput_NIM }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
