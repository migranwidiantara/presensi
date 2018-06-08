import React from 'react';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Icon } from 'native-base';
import ActionButton from 'react-native-action-button';


export default class Kegiatan extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false,
      kegiatan: 'Nama Kegiatan',
      active: true
    };
  }


    componentDidMount() {
      this.makeRemote();
    }

    onDetail = (item) => {
      //this.props.navigation.navigate('Detail', { dat: 'sac' });
      this.props.navigation.navigate('Presensi',
      {
        id: item
      }
    );
    };

    makeRemote = () => {
      fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/viewKegiatan.php')
      .then((result) => result.json())
      .then((res) => {
        this.setState({
          data: res,
          loading: false,
          refreshing: false
        });
      });
    }

    handleRefresh = () => {
      this.setState({
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1,
      }, () => {
        this.makeRemote();
      });
    }

    Edit = (item) => {
      this.props.navigation.navigate('UpdateAcara', item);
    }

    AlertHapus = (item) => {
      Alert.alert(
        item.nim, 'Anda yakin ingin menghapus data ini?',
        [
          { text: 'Batal',
            onPress: () =>
              console.log('Tidak'),
              style: 'cancel'
            },
          { text: 'Ya',
            onPress: () => this.HapusData(item),
            },
        ]
      );
    }

    HapusData = (item) => {
      //const { Nim } = this.state;

      fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/deleteKegiatan.php',{
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'aplication/json'
        },
          body: JSON.stringify({
            id_kegiatan: item.id_kegiatan,

        })
      }).then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
        this.handleRefresh();
    }

    render() {
        return (
          <View style={styles.container}>

            <List style={styles.scene}>

                    <FlatList

                        data={this.state.data}
                        renderItem={({ item }) => (

                          <ListItem
                            roundAvatar
                            title={item.nama_kegiatan}
                            subtitle={`${item.tanggal} ${item.waktu}`}
                            rightIcon={
                              <Icon
                                name='dots-three-vertical'
                                size={20}
                                onPress={() =>
                                  Alert.alert(
                                     item.nim, 'Edit atau Hapus Data',
                                    [
                                      { text: 'Batal',
                                        onPress: () =>
                                          console.log('Tidak'),
                                          style: 'cancel'
                                        },
                                      { text: 'Hapus',
                                        onPress: () => this.AlertHapus(item) },
                                      { text: 'Edit',
                                        onPress: () => this.Edit(item),
                                        },
                                    ]
                                  )}
                              />
                            }

                            avatar={{ uri: this.state.logo }}
                            onPress={() => this.onDetail(item)}
                          />

                        )}
                    keyExtractor={(item) => item.id_kegiatan}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    />

            </List>
            <ActionButton
              buttonColor='rgba(231,76,60,0.8)'
              renderIcon={() => <Icon name="plus-circle" style={styles.actionButtonIcon} />}
              onPress={() => this.props.navigation.navigate('InsertAcara')}
            />


            <View style={styles.boxfoot}>
              <Text style={styles.textfoot}>
              Copyright <Icon name='copyright' size={17} color='white' />
               tri_sucipto #JaenKuliahDiPTI
              </Text>
            </View>
          </View>

        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#BDBDBD',
      flex: 1,
      flexDirection: 'column'
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    box1: {
      flex: 4,
      backgroundColor: '#795548',
      justifyContent: 'center',
      alignItems: 'center'

    },
    scene: {
        flex: 1,
        paddingTop: 1,
    },
    user: {
        width: '100%',
        backgroundColor: '#333',
        marginBottom: 10,
        paddingLeft: 25,
    },
    userName: {
        fontSize: 17,
        paddingVertical: 20,
        color: '#fff'
    },
    boxfoot: {
      flex: 0.5,
      backgroundColor: '#795548',
      justifyContent: 'center',
      alignItems: 'center'

    },
});
