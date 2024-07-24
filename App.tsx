import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Screens/HomePage';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import LandingPage from './Screens/LandingPage';
import SignupPage from './Screens/SignupPage';
import SigninPage from './Screens/SigninPage';
import ForgotPasswordPage from './Screens/ForgotPasswordPage';
import ForgotPassword2 from './Screens/ForgotPassword2';
import MenuPage from './Screens/MenuPage';
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
import Profile from './Screens/Profile';
import MyPurchasesPage from './Screens/MyPurchasesPage';
import Settings from './Screens/Settings';
import ContactUs from './Screens/ContactUs';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import TermsAndConditions from './Screens/TermsAndConditions';
import AboutUs from './Screens/AboutUs';
import PropertyDetails from './Screens/PropertyDeatils';
import NotificatonList from './Screens/NotificatonList';
import SellerDashBoard from './SellerScreens/SellerDashBoard';
import Property from './SellerScreens/Property';
import RentProperty from './SellerScreens/RentProperty';
import PreviewProperty from './SellerScreens/PreviewProperty';
import Sales from './SellerScreens/Sales';
import TenancyApplicationDetails from './SellerScreens/TenancyApplicationDetails';
import Message from './SellerScreens/Message';
import MessageDetails from './SellerScreens/MessageDetails';
import ProfileSeller from './SellerScreens/ProfiieSeller';
import GetHelp from './SellerScreens/GetHelp';
import SettingsSeller from './SellerScreens/SettingsSeller';
import Messages from './AdminScreens/Messages';
import Tenants from './SellerScreens/Tenants';
import {RootState} from './redux/reducers';
import MenuPageSeller from './SellerScreens/MenuPageSeller';
import SellerSell from './SellerScreens/SellerSell';

const Stack = createNativeStackNavigator();

function CustomerStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PropertyDetails"
        component={PropertyDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
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
      <Stack.Screen name="Buy" component={Buy} options={{headerShown: false}} />
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyPurchasesPage"
        component={MyPurchasesPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificatonList"
        component={NotificatonList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Property"
        component={Property}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SellerStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SellerDashBoard"
        component={SellerDashBoard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuPageSeller"
        component={MenuPageSeller}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreviewProperty"
        component={PreviewProperty}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsSeller"
        component={SettingsSeller}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MessageDetails"
        component={MessageDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TenancyApplicationDetails"
        component={TenancyApplicationDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sales"
        component={Sales}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tenants"
        component={Tenants}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetHelp"
        component={GetHelp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSeller"
        component={ProfileSeller}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SellerSell"
        component={SellerSell}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RentProperty"
        component={RentProperty}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const logedIn = useSelector((state: RootState) => state.isLogedIn.isLogedIn);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {logedIn ? (
            <>
              <Stack.Screen
                name="CustomerStackScreen"
                component={CustomerStackScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SellerStackScreen"
                component={SellerStackScreen}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;



// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { userNameValidation } from './Validations'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//       <TouchableOpacity onPress={() => userNameValidation("Lucky")}>
//         <Text>Valiadte</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
// export default App
// const styles = StyleSheet.create({})