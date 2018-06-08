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
import DatePicker from 'react-native-datepicker';


export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Tanggal: '',
      Nama_Kegiatan: '',
      Waktu: ''
    };
  }

  InputUsers = () => {
    const { Nama_Kegiatan } = this.state;
    const { Tanggal } = this.state;
    const { Waktu } = this.state;

    fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/postKegiatan.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
        body: JSON.stringify({
        nama_kegiatan: Nama_Kegiatan,
        tanggal: Tanggal,
        waktu: Waktu,

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
          placeholder="Nama Kegiatan"
          onChangeText={TextInputValue => this.setState({ Nama_Kegiatan: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />

        <DatePicker
        style={{ width: 200 }}
        date={this.state.Tanggal}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ Tanggal: date }); }}
        />
        <TextInput />
        <DatePicker
        style={{ width: 200 }}
        date={this.state.Waktu}
        mode="time"
        placeholder="select Waktu"
        format="HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ Waktu: date }); }}
        />


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
