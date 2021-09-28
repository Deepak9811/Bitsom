import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Appbar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      membershipNO: '',
      userData: [],
      profile: [],
      emailUser: [],
      loader: true,
    };
  }

  componentDidMount() {
    this.userDetails();
  }

  userDetails() {
    fetch(
      `http://192.168.1.200:8081/cgi-bin/koha/svc/report?name=CELECT-PATINFO-EMAIL&sql_params=diwesh.diwakar@celect.in&userid=CELECT-REPORT&password=CELECT-REPORT`,
      {
        method: 'GET',
        headers: {
          Accepts: 'application/json',
          'content-type': 'application/json',
        },
      },
    )
      .then(result => {
        result.json().then(resp => {
          this.setState({
            userData: resp[0],
            loader: false,
          });
        });
      })
      .catch(error => {
        this.setState({
          loader: false,
        });
        Alert.alert('Error', error, [{text: 'Okay'}]);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Appbar.Header style={styles.ttl}>
          <TouchableOpacity
            style={{paddingLeft: '2%'}}
            onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" color="#05375a" size={25} />
          </TouchableOpacity>
          <Appbar.Content title="Profile" />
        </Appbar.Header>

        {!this.state.loader ? (
          <View style={{flex: 1}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={{flex: 1}}>
                {/* ==============IMAGE==================== */}
                <View style={{width: '100%'}}>
                  <Image
                    source={require('./image/cat.jpg')}
                    style={{height: 300, width: '100%'}}
                  />
                </View>

                {/* ===============INFO======================= */}
                <View style={{margin: '5%'}}>
                  <View style={{marginBottom: '4%'}}>
                    <Text style={styles.text_footer}>Username:</Text>

                    <View style={styles.editInfo}>
                      <View>
                        <Text style={styles.fillDetails}>
                          {this.state.userData[3] +
                            ' ' +
                            this.state.userData[2]}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#5ec6e9"
                          size={20}
                          style={styles.rightM}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginBottom: '4%'}}>
                    <Text style={styles.text_footer}>Email Id:</Text>

                    <View style={styles.editInfo}>
                      <View>
                        <Text style={styles.fillDetails}>
                          {this.state.userData[4]}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#5ec6e9"
                          size={20}
                          style={styles.rightM}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginBottom: '4%'}}>
                    <Text style={styles.text_footer}>Membership No:</Text>

                    <View style={styles.editInfo}>
                      <View>
                        <Text style={styles.fillDetails}>
                          {this.state.userData[0]}
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.rightIcon}>
                        <Feather
                          name="chevron-right"
                          color="#5ec6e9"
                          size={20}
                          style={styles.rightM}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* ============================================== */}
              </View>
            </ScrollView>
          </View>
        ) : (
          <View style={styles.activityIndicatorStyle}>
            <ActivityIndicator color="#57A3FF" size="large" />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  ttl: {
    backgroundColor: '#ffffff',
  },
  text_footer: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: '2%',
  },
  fillDetails: {
    flexDirection: 'row',
    fontSize: 16,
    color: '#0B0B0B',
    marginBottom: '3%',
  },
  rightIcon: {
    marginTop: 4,
    flex: 1,
    width: '100%',
  },
  rightM: {
    textAlign: 'right',
    marginRight: 20,
  },
  editInfo: {
    flexDirection: 'row',
    borderBottomColor: '#f68823',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // elevation: 3,
  },
});
