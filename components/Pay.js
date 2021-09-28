import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Appbar, Modal} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';

// import RNUpiPayment from 'react-native-upi-payment';
import {Card} from 'react-native-paper';

export default class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopUp: false,
      vpa: '9811929305@paytm',
      amt: '',
    };
  }

  payment() {
    RNUpiPayment.initializePayment(
      {
        vpa: this.state.vpa,
        payeeName: '',
        amount: this.state.amt,
        transactionRef: 'aasf-332-aoei-fn',
      },
      () => {
        console.log('success');
        this.setState({
          showPopUp: true,
        });
      },
      () => {
        console.log('fail');
        Alert.alert('', 'Something wents wrong.', [{text: 'Okay'}]);
      },
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.ttl}>
          <TouchableOpacity
            style={{paddingLeft: '2%'}}
            onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" color="#05375a" size={25} />
          </TouchableOpacity>
          <Appbar.Content title="Pay Fine" />
        </Appbar.Header>

        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: '10%'}}>
              <View style={styles.footer}>
                <Text style={styles.text_footer}> Pay To: </Text>
                <View style={styles.action}>
                  <TextInput
                    //   returnKeyType="next"
                    placeholder="Bitsom"
                    style={styles.textInput}
                    value={this.state.vpa}
                    onChangeText={text =>
                      this.setState({
                        vpa: text,
                      })
                    }
                  />
                </View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.text_footer}> Total Fine: </Text>
                <View style={styles.action}>
                  <TextInput
                    //   returnKeyType="next"
                    placeholder="00"
                    style={styles.textInput}
                    //   onChangeText={val => this.textInputchange(val)}
                  />
                </View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.text_footer}> Fine To Be Paid: </Text>
                <View style={styles.action}>
                  <TextInput
                    //   returnKeyType="next"
                    placeholder="00"
                    style={styles.textInput}
                    value={this.state.amt}
                    onChangeText={amt =>
                      this.setState({
                        amt: amt,
                      })
                    }
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  Linking.openURL(
                    'upi://pay?pa=9999246778@icici&pn=Vijender&tr=HW19200121011&tn=Pay%20to%20CELECT%20store&am=1&mam=null&cu=INR&url=https://celect.in/orderid=CELLP9298y8973e87389e78123ue8921',
                  )
                  // this.payment()
                }>
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
                    Click here to pay
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={{marginTop: 10, marginBottom: '5%'}}>
                <Text
                  style={{
                    color: '#A2A2A2',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Please be sure you have at least one UPI payment enabled app
                  on your device.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {this.state.showPopUp ? (
          <>
            <View style={styles.popBackground}></View>
            <View style={styles.successMa}>
              <Animatable.View
                animation={this.showPopUp ? 'fadeInUpBig' : 'fadeInUpBig'}>
                <View style={styles.popup}>
                  <TouchableOpacity
                    style={styles.crossIcon}
                    onPress={() =>
                      this.setState({
                        showPopUp: false,
                      })
                    }>
                    <AntDesign name="close" size={25} />
                  </TouchableOpacity>

                  <View style={{paddingHorizontal: 20}}>
                    <View style={styles.successIcon}>
                      <Feather name="check-circle" color="green" size={40} />
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '5%',
                      }}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: '600',
                        }}>
                        Payment Successful
                      </Text>
                    </View>

                    <View style={{elevation: 1}}>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.push('Home')}
                        style={[
                          styles.button,
                          {
                            marginTop: '10%',
                          },
                        ]}>
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
                            Continue
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Animatable.View>
            </View>
          </>
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  ttl: {
    backgroundColor: '#ffffff',
  },
  footer: {
    marginBottom: 20,
    // flex: 1,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: '700',
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
    borderBottomWidth: 1,
  },
  textInput: {
    // flex: 1,
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 0 : -15,
    // paddingLeft: 10,
    color: '#05375a',
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
    textTransform: 'uppercase',
  },

  crossIcon: {
    marginBottom: '5%',
    paddingLeft: 5,
    paddingTop: 5,
  },
  successIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  popBackground: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    elevation: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  successMa: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '25%',
    // bottom: 0,
    margin: '5%',
    // backgroundColor: '#fff',
    elevation: 5,
  },
  popup: {
    width: '100%',
    // zIndex: 1 ,
    // position:"relative",
    paddingBottom: '10%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    // flex:1
  },
});
