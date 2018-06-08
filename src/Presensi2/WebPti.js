import React from 'react';
import {
  WebView
  } from 'react-native';

export default class Insert extends React.Component {

  render() {
      return (
      <WebView
        source={{ uri: 'http://pti.undiksha.ac.id/id/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
