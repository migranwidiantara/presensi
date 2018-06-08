/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  View
} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../Image/home.jpg')} style={styles.backgroundImage}>
                  <View style={styles.content}>
                  <Image style={{width: 40, height: 60, marginBottom:20}}
                    source=
                    {require('../../Image/Presensi.png')}
                    />

                    <Text style={styles.logoText}>Pilih Akses</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('LoginPeserta')}>
                            <Text style={styles.buttonText}>Peserta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Admin</Text>
                    </TouchableOpacity>
                  </View>
              </ImageBackground>
              </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  backgroundImage:{
    flex:1,
    alignSelf:'stretch',
    width:null,
    justifyContent:'center'
  },
  content:{
    alignItems:'center',
  },
inputBox:{
  width:250,
  backgroundColor:'#A0FEEC',
  borderRadius:25,
  paddingHorizontal:17,
  fontSize:16,
  color:'black',
  marginVertical:8,
  padding:10,
  borderColor:'black'
},
button:{
  width:200,
  backgroundColor:'#D6FAF4',
  borderRadius:25,
  marginVertical:10,
  paddingVertical:9,
},
buttonText:{
  fontSize:18,
  fontWeight:'500',
  color:'#424242',
  textAlign:'center'
}
});
