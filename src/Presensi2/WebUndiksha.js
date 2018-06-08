import React from 'react';
import {
  WebView
  } from 'react-native';

export default class Insert extends React.Component {

  render() {
      return (
      <WebView
        source={{ uri: 'https://migranwidiantara.000webhostapp.com/phpqrcode/index.php?nim=1515051001' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
