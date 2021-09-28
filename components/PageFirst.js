import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  BackHandler,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class PageFirst extends Component {
  //   static navigationOptions = {
  //     title: 'PageFirst',
  //     headerLeft: null,
  //   };

  //   componentDidMount() {
  //     BackHandler.addEventListener('hardwareBackPress', function () {
  //       return true;
  //     });
  //   }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.imageCen}>
          <Image source={require('./image/bitsom.png')} />

          <Text style={{fontSize: 17, color: '#003f5c', marginTop: '5%'}}>
            Greeting from Learning Resource Center
          </Text>
        </View>

        {/* <View style={styles.address}>
        <Text style={{fontSize: 17, color: '#003f5c'}}>
          Greeting from Learning Resource Center
        </Text>
      </View> */}

        <View
          style={{
            //   paddingHorizontal: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: '#6b6b6b'}}>
            Let’s personalise this space by click on Proceed
          </Text>
        </View>

        <View style={styles.info}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient
              colors={['#f68823', '#b03024']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Proceed
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.create}>
          <Text style={{color: '#f68823'}}>Continue as Guest</Text>
          <Text > Create Account</Text>
        </TouchableOpacity> */}
        </View>

        <View
          style={{
            //  flex:1,
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://libcon.in/')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Powered by</Text>
            <Text style={{color: '#f68823'}}> LIBCON</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%', backgroundColor: '#fff'},
  imageCen: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    // backgroundColor: 'red',
    // backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  create: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
