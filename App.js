import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'; 
import CustomDrawer from './Navigation/CustomeDrawer'
const Drawer = createDrawerNavigator();

const MainStack = createStackNavigator();
const OverViewStack = createStackNavigator();
import Login from './Screens/Auth/Login'
import CreateAccount from './Screens/Auth/CreateAccount'
import MemberPage from './Screens/Components/MemberPage'
import InvestmentPage from './Screens/Components/InvestmentPage'
import ViewTutorial from './Screens/Components/ViewTutorial'
import BuyPlan from './Screens/Components/BuyPlan'
import Profile from './Screens/Components/Profile'
import FAQs from './Screens/Components/FAQs'
import DebitCardForm from './Screens/Components/DebitCardForm'
import FormUpload from './Screens/Components/FormUpload'
import Disclamer from './Screens/Components/Disclamer'

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Main = () => {
  return (

      <MainStack.Navigator initialRouteName="Login" 
      screenOptions={{ headerShown: false, gestureEnabled: true, animationEnabled:true,}} >
          <MainStack.Screen name="Login" component={Login} />
          <MainStack.Screen name="CreateAccount" component={CreateAccount} />
          <MainStack.Screen name="MemberPage" component={MemberPage} />   
          <MainStack.Screen name="InvestmentPage" component={InvestmentPage} />
          <MainStack.Screen name="ViewTutorial" component={ViewTutorial} />
          <MainStack.Screen name="BuyPlan" component={BuyPlan} />
          <MainStack.Screen name="Profile" component={Profile} />     
          <MainStack.Screen name="FormUpload" component={FormUpload} />     
          <MainStack.Screen name="FAQs" component={FAQs} />     
          <MainStack.Screen name="DebitCardForm" component={DebitCardForm} />     
          <MainStack.Screen name="Disclamer" component={Disclamer} />     
      </MainStack.Navigator>
  );

}

export default function App() {
  return (
    <NavigationContainer>
    {/* <Main /> */}
    <Drawer.Navigator initialRouteName="Main"
        screenOptions={{ headerShown: false, 
          gestureEnabled: true, 
          animationEnabled:false,gestureResponseDistance: {horizontal: 20} }} 
        edgeWidth={0}
        drawerPosition="right"
        drawerContent={props => <CustomDrawer {...props} />}
        statusBarAnimation={'slide'}
        hideStatusBar={true}
          drawerStyle={{
            backgroundColor: '#fff',
            width: responsiveWidth(70),
            borderTopRightRadius: 5,
        }}>
        
        <Drawer.Screen name="Main" component={Main} 
        screenOptions={{ headerShown: false, gestureEnabled: true, animationEnabled:false }} 
        />
    </Drawer.Navigator>
</NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
