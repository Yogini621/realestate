import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import LandingPage from './Screens/LandingPage';
import SignupPage from './Screens/SignupPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninPage from './Screens/SigninPage';
import HomePage from './Screens/HomePage';
import ForgotPasswordPage from './Screens/ForgotPasswordPage';
import {Provider} from 'react-redux';
import store from './redux/store';
import ForgotPassword2 from './Screens/ForgotPassword2';
import MenuPage from './Screens/MenuPage';
import FiltersScreen from './Screens/FiltersScreen';
import Faqs from './Screens/Faqs';
import Rent from './Screens/Rent';
import Buy from './Screens/Buy';
import TenentApplicationForm from './Screens/TenentApplicationForm';
import PropertyListings1 from './Screens/PropertyListings1';
import PropertyListings2 from './Screens/PropertyListings2';
import PropertyListings3 from './Screens/PropertyListings3';
import Sell from './Screens/Sell';
import Favorites from './Screens/Favorites';
import DiscoverMore from './Screens/DiscoverMore';
import SwipeUp from './Screens/SwipeUp';
import Filterscreen from './Screens/Filterscreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignupPage"
            component={SignupPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SigninPage"
            component={SigninPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPasswordPage"
            component={ForgotPasswordPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword2"
            component={ForgotPassword2}
            options={{headerShown: false}}
          />  */}
          <Stack.Screen
            name="Filterscreen"
            component={Filterscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MenuPage"
            component={MenuPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FiltersScreen"
            component={FiltersScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DiscoverMore"
            component={DiscoverMore}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Faqs"
            component={Faqs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Rent"
            component={Rent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Buy"
            component={Buy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PropertyListings1"
            component={PropertyListings1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PropertyListings2"
            component={PropertyListings2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PropertyListings3"
            component={PropertyListings3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sell"
            component={Sell}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TenentApplicationForm"
            component={TenentApplicationForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SwipeUp"
            component={SwipeUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({});
