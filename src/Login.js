import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput
  } from 'react-native';

import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFTGrxeKeeo6Z5hNX3Pa8h4I2HloFvoN0",
  authDomain: "presensi-163a1.firebaseapp.com",
  databaseURL: "https://presensi-163a1.firebaseio.com",
  projectId: "presensi-163a1",
  storageBucket: "presensi-163a1.appspot.com"
  };
  firebase.initializeApp(firebaseConfig);



  export default class Login extends React.Component{

    constructor(props){
      super(props)
      this.state = ({
        email:'',
        password:''
      })
    }

    signUp = (email, password)=>{
      try {
        if (this.state.password.length < 6) {
          alert("Password Minimal 6 Karakter")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch(error){
      console.log(error.toString())
      }

    }
    login = (email, password)=>{
      try{
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
          console.log(user)
        })
      }
      catch(error){
      console.log(error.toString())
      }
    }

    render(){
      return(
        <View style={styles.container}>
          <ImageBackground source={require('../Image/Screenshot0.png')} style={styles.backgroundImage}>
            <View style={styles.content}>
              <Text style={styles.logoText}>Welcome To Presensi App.</Text>
              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Email"
                  onChangeText = {email => this.setState ({email})}
                  placeholderTextColor="#9E9E9E"
              />

              <TextInput style={styles.inputBox}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder="Password"
                  onChangeText = {password => this.setState ({password})}
                  secureTextEntry={true}
                  placeholderTextColor="#9E9E9E"
                />

              <TouchableOpacity style={styles.button} onPress={()=> this.login(this.state.email, this.state.password)}>
                      <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=> this.signUp(this.state.email, this.state.password)}>
                      <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
      )
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
    inLogo:{
    height: 70,
    width: 70,
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
