import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('PageFirst');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeIn" style={styles.imageCenter}>
          <Image source={require('./image/bitsom.png')} />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%', backgroundColor: '#fff'},
  imageCenter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
