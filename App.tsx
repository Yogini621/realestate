import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
