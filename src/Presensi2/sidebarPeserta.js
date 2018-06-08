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

    return fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/viewProfil.php?nim=1515051001')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
   }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={() =>this.props.navigation.navigate('QrCode')} >
              <Icon name='md-barcode' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>
          love\
          </Text>
        </Content>
      </Container>
    );
  }
}
