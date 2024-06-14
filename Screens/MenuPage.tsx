import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Rent from './Rent';
import Buy from './Buy';
import Sell from './Sell';
import Faqs from './Faqs';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const MenuPage = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Rent" component={Rent} />
      <Drawer.Screen name="Buy" component={Buy} />
      <Drawer.Screen name="Sell" component={Sell} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default MenuPage;

const styles = StyleSheet.create({});
