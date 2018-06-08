import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
  } from 'react-native';

export default class UpdateKegiatan extends React.Component {
  constructor() {
    super();
    this.state = {
      kegiatan: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Nama Kegiatan"
          onChangeText={TextInputValue => this.setState({ kegiatan: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />

            <TouchableOpacity
              activeopacity={4}
              style={styles.button}
              onPress={() => Alert.alert(
                'Status',
                'Nama Kegiatan Berhasil di Ubah',
                [
                  { text: 'OK',
                  onPress: () => this.props.navigation.navigate('Kegiatan') }
                ],
                { cancelable: false }
              )}
            >
              <Text style={styles.buttonText}> Ubah</Text>
            </TouchableOpacity>

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
    backgroundColor: '#EEEEEE',
    borderRadius: 25,
    paddingHorizontal: 13,
    fontSize: 16,
    color: '#9E9E9E',
    marginVertical: 5,
    padding: 5
  },
  button: {
    width: 250,
    backgroundColor: '#BDBDBD',
    borderRadius: 25,
    marginVertical: 3,
    paddingVertical: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#424242',
    textAlign: 'center'
  }
});
