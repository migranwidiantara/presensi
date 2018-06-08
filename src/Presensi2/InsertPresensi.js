import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
  } from 'react-native';

export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nim: '',
      Id_Kegiatan: this.props.navigation.state.params,
    };
  }


  InputUsers = () => {
    const { Nim } = this.state;
    const { Id_Kegiatan } = this.state;

    fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/postPresensi.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
        body: JSON.stringify({
        nim: Nim,
        id_kegiatan: Id_Kegiatan,

      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
      this.props.navigation.goBack();
  }

  render() {
    return (

      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="NIM"
          onChangeText={TextInputValue => this.setState({
            Nim: TextInputValue,
            Id_Kegiatan: this.state.Id_Kegiatan
          })}
          placeholderTextColor="#9E9E9E"
        />
        <Text>{this.state.Id_Kegiatan}</Text>

            <TouchableOpacity activeopacity={4} style={styles.button} onPress={this.InputUsers}>
              <Text style={styles.buttonText}>{this.props.type} Tambah</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45
  },
  inputBox: {
    width: 250,
    backgroundColor: '#D7CCC8',
    borderRadius: 25,
    paddingHorizontal: 13,
    fontSize: 16,
    color: '#9E9E9E',
    marginVertical: 5,
    padding: 5
  },
  button: {
    width: 250,
    backgroundColor: '#795548',
    borderRadius: 25,
    marginVertical: 3,
    paddingVertical: 7
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  }
});
