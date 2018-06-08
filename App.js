import React from 'react';
import { View, StyleSheet } from 'react-native';
import Nav from './src/Presensi2/Navigasi';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
          <Nav />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  }
  }
);
