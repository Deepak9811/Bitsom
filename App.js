import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Login from './components/Login';
// import SplashScreen from './components/SplashScreen';
import PageFirst from './components/PageFirst';
import VerifyNum from './components/VerifyNum';
import Home from './components/Home';
import Eresource from './components/Eresource';
import Opac from './components/Opac';
import About from './components/About';
import Contact from './components/Contact';
import Pay from './components/Pay';
import Profile from './components/Profile';

export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {/* <Stack.Screen name="Splash" component={SplashScreen}/> */}
            <Stack.Screen name="PageFirst" component={PageFirst} />
            <Stack.Screen name="VerifyNum" component={VerifyNum} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Eresource" component={Eresource} />
            <Stack.Screen name="Opac" component={Opac} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Pay" component={Pay} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({});
