import React from 'react';
import {
  Alert
  } from 'react-native';

export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nomor: '',
      Nim: '',
    };
  }

  render() {
    const { nomor, nim } = this.props.navigation.state.params;
    return (
      this.setState({
        Nomor: nomor,
        Nim: nim
      }),

      fetch('http://api.ifreethink.net/z1515051060/deletePresensi.php',{
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'aplication/json'
        },
          body: JSON.stringify({
            nomor: this.state.Nomor,
            nim: this.state.Nim,

        })
      }).then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        })
    );
  }
}
