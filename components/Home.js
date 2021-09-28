import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import {Appbar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        {/* <Appbar.Header style={styles.ttl}>
          <Appbar.Content title="Home" />
        </Appbar.Header> */}

        <View style={styles.container}>
          <View style={styles.uDetail}>
            <Text style={styles.uNme}>Hello</Text>
            <Text style={styles.uNme}>Vijender Pandita</Text>
            <Text style={{marginTop: 10, color: '#8A8A8A'}}>
              Welcome to Learning Resource Center, BITSoM, Mumbai{' '}
            </Text>
          </View>

          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{marginBottom: '10%'}}>
                {/* ---------PROFILE */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('Profile')}>
                  <LinearGradient
                    colors={['#f7f6ff', '#eff3fe']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <Feather name="user" color="#191919" size={20} />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#191919'}]}>
                          Your Profile
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#5ec6e9"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/*  ---------------------------ACCOUNT------------------------------ */}
                <TouchableOpacity style={styles.button}>
                  <LinearGradient
                    colors={['#eff7ee', '#eff7ee']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <Feather name="lock" color="#77aa69" size={20} />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#77aa69'}]}>
                          Your Account
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#5a9d48"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* -----------------ABOUT--------------------------- */}

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('About')}>
                  <LinearGradient
                    colors={['#fce5e5', '#f5ddde']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <AntDesign
                          name="infocirlceo"
                          color="#e1495e"
                          size={20}
                        />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#e1495e'}]}>
                          More About The Library
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#e1495e"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* -----------------CHECKOUT------------------------------ */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('Opac')}>
                  <LinearGradient
                    colors={['#fff6e7', '#fff6e7']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <Feather
                          name="check-circle"
                          color="#da8d0b"
                          size={20}
                        />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#da8d0b'}]}>
                          Open Public Access Catalog
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#da8d0b"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* ------------------Pay-FINE------------------------ */}

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('Pay')}>
                  <LinearGradient
                    colors={['#f7fcff', '#f7fcff']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <FontAwesome name="rupee" color="#3860cc" size={20} />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#3860cc'}]}>
                          Pay Fine
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#3860cc"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* ----------E-RESOURCES------------------ */}

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.push('Eresource')}>
                  <LinearGradient
                    colors={['#f7f6ff', '#f7f6ff']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <AntDesign name="book" color="#969697" size={20} />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#969697'}]}>
                          E-Resources
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#969697"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                {/* ------------CONTACT--------------------- */}

                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      marginBottom: '40%',
                    },
                  ]}
                  onPress={() => this.props.navigation.push('Contact')}>
                  <LinearGradient
                    colors={['#eff7ee', '#eff7ee']}
                    style={styles.commonGradient}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.iconC}>
                        <AntDesign name="contacts" color="#77aa69" size={20} />
                      </View>

                      <View>
                        <Text style={[styles.textCommon, {color: '#77aa69'}]}>
                          Contact The Library
                        </Text>
                      </View>

                      <View style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#77aa69"
                          size={20}
                          style={styles.rightM}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ttl: {
    backgroundColor: '#fff',
  },
  container: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  uDetail: {
    marginTop: 25,
    marginBottom: 10,
  },
  uNme: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 13,
    // width: '100%',
  },
  commonGradient: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  textCommon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconC: {
    marginTop: 4,
    marginRight: 10,
    marginLeft: 20,
  },
  rightIcon: {
    justifyContent: 'center',
    marginTop: 4,
    // textAlign:"right",
    flex: 1,
    // alignItems: 'flex-end',
    // flexDirection:"row",
    // width:"100%"
  },
  rightM: {
    //   alignItems:"flex-end",
    textAlign: 'right',
    marginRight: 20,
    //   width:"100%"
  },
  scrollView: {
    flexGrow: 1,
    flex: 1,
  },
});
