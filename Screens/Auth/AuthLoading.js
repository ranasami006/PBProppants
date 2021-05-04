
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class AuthLoading extends Component {
  
  static navigationOptions = {
    header: false,
  }
  componentDidMount = async () => {
    let token=await AsyncStorage.getItem('token')
      if(token){
        this.props.navigation.navigate('MemberPage');
      }
      else{
      this.props.navigation.navigate('Login');
      }
   
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          {/* <Image source={require('../../assets/1.jpg')} style={{ height: '100%', width: '100%' }} /> */}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});





