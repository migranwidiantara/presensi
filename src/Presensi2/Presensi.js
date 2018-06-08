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
      active: true,
      tesid: '',
      Id_Kegiatan: ''
    };
  }


    componentDidMount() {
      this.setState({
        Id_Kegiatan: this.props.navigation.state.params.id_kegiatan,
        Tanggal: this.props.navigation.state.params.tanggal,
        Nama_Kegiatan: this.props.navigation.state.params.nama_kegiatan,
        Waktu: this.props.navigation.state.params.waktu,

      });
      this.makeRemote();
    }

    onDetail = (item) => {
      //this.props.navigation.navigate('Detail', { dat: 'sac' });
      this.props.navigation.navigate('Detail', item);
    };

    makeRemote = () => {
      const { params } = this.props.navigation.state;
      const Id_Kegiatan = params.id.id_kegiatan;

      fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/viewpresensi.php?id_kegiatan=' + Id_Kegiatan)
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
      this.props.navigation.navigate('UpdatePresensi', item);
    }

    tesid = () => {
      const { params } = this.props.navigation.state;
      const Id_Kegiatan = params.id.id_kegiatan;

      this.props.navigation.navigate('InsertPresensi', Id_Kegiatan);
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

      fetch('https://migranwidiantara.000webhostapp.com/Z1515051060/deletePresensi.php',{
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'aplication/json'
        },
          body: JSON.stringify({
            id_presensi: item.id_presensi,
            nim: item.nim,

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
                            title={item.nim}
                            rightIcon={
                              <Icon
                                name='ios-alarm'
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
                    keyExtractor={(item) => item.nim}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    />

            </List>


            <ActionButton
              buttonColor='rgba(231,76,60,0.8)'
              renderIcon={() => <Icon name="ios-alarm" style={styles.actionButtonIcon} />}
            >
                <ActionButton.Item
                  buttonColor='#3498db'
                  title="Scan QR"
                  onPress={() => this.props.navigation.navigate('Scanner')}
                >
                  <Icon name="barcode" style={styles.actionButtonIcon} />
                </ActionButton.Item>

                <ActionButton.Item
                  buttonColor='#3498db'
                  title="Refresh Halaman"
                  onPress={() => this.handleRefresh()}
                >
                  <Icon name="ios-alarm" style={styles.actionButtonIcon} />
                </ActionButton.Item>

                <ActionButton.Item
                  buttonColor='#3498db'
                  title="Tambah Data"
                  onPress={() => this.tesid()}
                >
                <Icon name="ios-alarm" style={styles.actionButtonIcon} />
              </ActionButton.Item>

            </ActionButton>


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
