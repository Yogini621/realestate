import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ForgotPasswordPage from './ForgotPasswordPage'
import ForgotPassword2 from './ForgotPassword2'
import SigninPage from './SigninPage'
import LandingPage from './LandingPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import PropertyDetails from './PropertyDeatils'
import MenuPage from './MenuPage'
import DiscoverMore from './DiscoverMore'
import Faqs from './Faqs'
import Rent from './Rent'
import Buy from './Buy'
import AddProperty from '../SellerScreens/AddProperty'
import Property from '../SellerScreens/Property'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Favorites from './Favorites'
import MyPurchasesPage from './MyPurchasesPage'
import NotificatonList from './NotificatonList'
import PrivacyPolicy from './PrivacyPolicy'
import Profile from './Profile'
import PropertyListings1 from './PropertyListings1'
import PropertyListings2 from './PropertyListings2'
import PropertyListings3 from './PropertyListings3'
import Sell from './Sell'
import SwipeUp from './SwipeUp'
import TenentApplicationForm from './TenentApplicationForm'
import TermsAndConditions from './TermsAndConditions'
import RentProperty from '../SellerScreens/RentProperty'
import GetHelp from '../SellerScreens/GetHelp'
import Message from '../SellerScreens/Message'
import PreviewProperty from '../SellerScreens/PreviewProperty'
import ProfileSeller from '../SellerScreens/ProfiieSeller'
import Sales from '../SellerScreens/Sales'
import SellerDashBoard from '../SellerScreens/SellerDashBoard'
import SettingsSeller from '../SellerScreens/SettingsSeller'
import TenancyApplicationDetails from '../SellerScreens/TenancyApplicationDetails'
import Tenants from '../SellerScreens/Tenants'

const Stack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()
const CustomerStatck = createNativeStackNavigator()
const SellerStack = createNativeStackNavigator()

export function AuthStackScreen(navigation: any) {
  return (
    <AuthStack.Navigator initialRouteName="LandingPage">
      <AuthStack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignupPage"
        component={SignupPage}
        options={{headerShown: false}}
        // initialParams={{navigateTo:(role:string) => {
        //   if(role === "customer"){
        //     navigation.replace('CustomerStackScreen')
        //   }
        //   else{
        //     navigation.replace('SellerStackScreen');
        //   }
        // }}}
      />
      <AuthStack.Screen
        name="SigninPage"
        component={SigninPage}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPasswordPage"
        component={ForgotPasswordPage}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword2"
        component={ForgotPassword2}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export function CustomerStatckScreen() {
  return (
    <CustomerStatck.Navigator initialRouteName="HomePage">
      <CustomerStatck.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="PropertyDetails"
        component={PropertyDetails}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="MenuPage"
        component={MenuPage}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="DiscoverMore"
        component={DiscoverMore}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Faqs"
        component={Faqs}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Rent"
        component={Rent}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Buy"
        component={Buy}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="PropertyListings1"
        component={PropertyListings1}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="PropertyListings2"
        component={PropertyListings2}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="PropertyListings3"
        component={PropertyListings3}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Sell"
        component={Sell}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="TenentApplicationForm"
        component={TenentApplicationForm}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="SwipeUp"
        component={SwipeUp}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="MyPurchasesPage"
        component={MyPurchasesPage}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      {/* <CustomerStatck.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      /> */}
      <CustomerStatck.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="NotificatonList"
        component={NotificatonList}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="AddProperty"
        component={AddProperty}
        options={{headerShown: false}}
      />
      <CustomerStatck.Screen
        name="Property"
        component={Property}
        options={{headerShown: false}}
      />
    </CustomerStatck.Navigator>
  );
}

export function SellerStackScreen() {
  return (
    <SellerStack.Navigator>
      <SellerStack.Screen
        name="RentProperty"
        component={RentProperty}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="PreviewProperty"
        component={PreviewProperty}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="SettingsSeller"
        component={SettingsSeller}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="SellerDashBoard"
        component={SellerDashBoard}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="TenancyApplicationDetails"
        component={TenancyApplicationDetails}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="Sales"
        component={Sales}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="Tenants"
        component={Tenants}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="GetHelp"
        component={GetHelp}
        options={{headerShown: false}}
      />
      <SellerStack.Screen
        name="ProfileSeller"
        component={ProfileSeller}
        options={{headerShown: false}}
      />
    </SellerStack.Navigator>
  );
}
const styles = StyleSheet.create({})