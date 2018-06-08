import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import Home1 from './Home1';
import DataMahasiswa from './DataMahasiswa';

export default class PengumumanTab extends React.Component {

  render() {
    return (
        <Nav />
    );
  }
}

const Nav = DrawerNavigator({
  MenuTab: {
    screen: StackNavigator({
      screen: TabNavigator({
        Home: {
          screen: Home1
        },
        DataMahasiswa: {
          screen: DataMahasiswa
        }
      })
    })
  },
  Home: {
    screen: TabNavigator({
      Home: {
        screen: Home1
      },
      DataMahasiswa: {
        screen: DataMahasiswa
      }
    })
  },
  DataMahasiswa: {
    screen: DataMahasiswa
  }

});
