import React, { Component } from 'react';
import { ListView } from 'react-native';
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
    return fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/viewProfil.php?nim='+this.state.TextInput_NIM)
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
            <Button transparent>
              <Icon name='md-barcode' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List
          removeClippedSubviews={false}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <ListItem>
              <Left style={{ flex: 1 }}><Icon name="md-calendar" /></Left>
              <Body style={{ flex: 11 }}><Text>Nasi{rowData.nim}</Text></Body>
            </ListItem>}
          />
          <Text>
          love{this.state.dataSource.nim}
          </Text>
        </Content>
      </Container>
    );
  }
}
