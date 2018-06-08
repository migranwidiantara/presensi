import React from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome, Icon } from '@expo/vector-icons';
import { Header } from 'native-base';

const bg = require('./Gambar/pti.jpg');

export default class Home1 extends React.Component {
    render() {
      return (
        <ImageBackground
          source={bg}
          style={styles.containerMain}
        >

          <View style={styles.boxslider}>
            <Text style={{ fontSize: 27, color: 'black' }}>
                Pendidikan Teknik Informatika
            </Text>

          </View>
          <View style={styles.boxslider1}>
            <Text style={{ fontSize: 20, color: 'black' }}>
                VISI
            </Text>
            <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', paddingBottom: 5 }}>
                Menjadi jurusan pendidikan yang fokus dalam pengembangan IPTEK
                yang mampu menghasilkan lulusan tenaga pendidik dan tenaga
                profesional  bidang teknologi informasi dan komunikasi yang
                kompeten, inovatif, berbudaya, dan berdaya saing tinggi.
            </Text>
          </View>
            <View style={styles.boxMenu1}>
              <Text style={{ fontSize: 20, color: 'black' }}>
                  MISI
              </Text>
              <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', paddingBottom: 5 }}>
              1. Menyelenggarakan pendidikan dan pengajaran ilmu pendidikan informatika.{'\n'}
              2. Mendidik calon tenaga pendidik dan tenaga profesional bidang informatika
              yang kompeten, inovatif, berbudaya, dan bersaing tinggi.{'\n'}
              3. Menyelenggarakan penelitian inovatif pengembangan IPTEK dan pengabdian
              masyarakat di bidang ilmu pendidikan dan informatika yang dapat dimanfaatkan
              oleh masyarakat.
              </Text>
            </View>
            <View style={styles.boxMenu2}>
              <Text style={{ fontSize: 20, color: 'black' }}>
                  TUJUAN
              </Text>
              <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', paddingBottom: 5 }}>
                  Menghasilkan tenaga pendidik dan tenaga profesional yang kompeten di bidang
                  informatika, menguasai IPTEK, adaptif  dengan perkembangan jaman, serta mampu
                  bekerjasama dengan etos kerja yang baik.
              </Text>
            </View>
          <View style={styles.boxfoot}>
            <Text style={styles.textfoot}>
            Copyright <FontAwesome name='copyright' size={17} color='black' />
             tri_sucipto #JaenKuliahDiPTI
            </Text>
          </View>
        </ImageBackground>
      );
    }
  }


  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#BDBDBD',
      flex: 1,
      flexDirection: 'column',
    },

    boxslider: {
      flex: 0.6,
      backgroundColor: 'rgba(255, 255,255,0.8)',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 5,

    },
    boxslider1: {
      flex: 1,
      backgroundColor: 'rgba(255, 255,255,0.5)',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 5,

    },
    boxMenu1: {
      flex: 1.8,
      backgroundColor: 'rgba(255, 255,255,0.5)',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center'

    },
    boxMenu2: {
      flex: 1,
      backgroundColor: 'rgba(255, 255,255,0.5)',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center'

    },

    boxfoot: {
      flex: 0.5,
      backgroundColor: '#795548',
      justifyContent: 'center',
      alignItems: 'center'

    },
    inputBox: {
      width: 300,
      backgroundColor: 'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10,
      textAlign: 'center'
    },

    textfoot: {
      fontSize: 15,
      color: 'white',
      padding: 10
    }
  });
