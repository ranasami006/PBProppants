import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogOut } from '../Backend/apiFile';
export default class CustomDrawer extends Component {
  state = {
    email: '',
  };

  async componentDidMount() {

  }

  async logUserOut(){
    let data = await LogOut()
    if (data.response) {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user_id')
        this.props.navigation.navigate("Login")
    }
    else {
       
        ToastAndroid.show(data.message, ToastAndroid.LONG);
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" />
        <ScrollView showsHorizontalScrollIndicator={false}>
       

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Profile")
              }}
              style={[styles.tab,{marginTop:responsiveHeight(5)}]}>
                <Text style={styles.text1}>
                  Profile
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("InvestmentPage")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Invest More
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("FAQs")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                FAQs
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("MemberPage")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Transaction History
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DebitCardForm")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Debit Card Application/Status
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("FormUpload")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Download Withdrawal form
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("BuyPlan")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Pricing Plans
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Disclamer")
              }}
              style={styles.tab}>
                <Text style={styles.text1}>
                Disclaimer
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.logUserOut()
               
              }}
              style={[styles.tab,{marginTop:responsiveHeight(6)}]}>
                <Text style={styles.text1}>
                Logout
              </Text>
              </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000",
  },
  profileView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    //justifyContent: "center",
    marginTop: responsiveWidth(5),
    //borderColor: 'grey',
    backgroundColor: '#25435f',
    height: responsiveHeight(15),
    borderBottomLeftRadius: responsiveWidth(2),
    borderBottomRightRadius: responsiveWidth(2),
  },
  image: {
    height: responsiveHeight(4.6),
    width: responsiveHeight(22),
   top: 5
  },

  imageDrawer: {
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    marginHorizontal:responsiveWidth(7),
  },
  bottomContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: responsiveWidth(2),
    marginLeft: responsiveWidth(5),
  },
  text: {
    fontSize: responsiveFontSize(1.3),
    //fontFamily: 'bold',
    marginLeft: responsiveWidth(4),
  },
  text1: {
    fontSize: 18,
    color: '#fff',
    textAlign:'left',
    alignSelf:'flex-start',
  },
  tab: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    //marginTop: responsiveWidth(5),
    borderBottomWidth:0.5,
    borderColor:'#D1D1D1',
    padding:responsiveHeight(2),
  },
  icon: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: responsiveHeight(6),
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:
  {
    fontSize: responsiveFontSize(1.8),
    color: 'grey',
    fontWeight: 'bold'
  },
  button1:
  {
    height: responsiveHeight(7),
    width: responsiveWidth(43),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
    backgroundColor: '#4f95e0'

  },
  iconBack: {
    padding: 13,
},
});
