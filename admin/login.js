/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Alert,
  Button,
  Text,
  View,
  Image,
  ImageBackground,
   StyleSheet,
   TextInput,
   ActivityIndicator,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
  Platform } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class login extends Component<Props> {
  constructor()
    {
        super();
        this.state = {
          username: '',
          password: '',
          ActivityIndicator_Loading: false,
        }
    }

    Login = () =>{
          this.setState({ ActivityIndicator_Loading : true }, () =>
                 {
         fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/login.php', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             username : this.state.username,
             password : this.state.password,

           })

         }).then((response) => response.json())
               .then((responseJson) => {
                 this.setState({ ActivityIndicator_Loading : false });
                 // If server response message same as Data Matched
                if(responseJson === 'Login berhasil!')
                 {
                   var username = responseJson.username;
                   AsyncStorage.setItem('username', username);
                     //Then open Profile activity and send user email to profile activity.
                     this.props.navigation.navigate('SideAdmin');
                 }

                 // if (res.success === true){
                 //   var username = res.username;
                 //
                 //   AsyncStorage.setItem('username', username);
                 //   this.props.navigation.navigate('SideAdmin');
                 // }
                 else{

                   Alert.alert(responseJson);
                 }

               }).catch((error) => {
                 console.error(error);
                 this.setState({ ActivityIndicator_Loading : false});
               });

             });
           }

  render() {
    return (
      <View style={styles.container}>

                  <View style={styles.content}>
                  <Image style={{width: 40, height: 60, marginBottom:20}}
                    source=
                    {require('./../Image/Presensi.png')}
                    />
                    <Text style={styles.logoText}>Login</Text>
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Username"
                        onChangeText = {(TextInputText) => this.setState({ username: TextInputText })}
                        placeholderTextColor="#9E9E9E"
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        onChangeText = {(TextInputText) => this.setState({ password: TextInputText })}
                        secureTextEntry={true}
                        placeholderTextColor="#9E9E9E"
                    />
                    <TouchableOpacity style={styles.button} onPress = {this.Login}>
                            <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    {
                    this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#D500F9' size='large'style={styles.ActivityIndicatorStyle} /> : null
                    }
                  </View>
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
