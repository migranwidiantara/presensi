import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
  } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nim: '',
      Nama: '',
      Semester: '',
      Kelas: '',
    };
  }

  render() {
    //const { state } = this.props.navigation;
    const { nim, nama, semester, kelas } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={nim}
          onChangeText={TextInputValue => this.setState({ Nim: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={nama}
          onChangeText={TextInputValue => this.setState({ Nama: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={semester}
          onChangeText={TextInputValue => this.setState({ Semester: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          value={kelas}
          onChangeText={TextInputValue => this.setState({ Semester: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />
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
