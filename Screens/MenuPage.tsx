import 'react-native-gesture-handler';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Rent from './Rent';
import Buy from './Buy';
import Sell from './Sell';
import Faqs from './Faqs';
import Profile from './Profile';
import {Divider, RadioButton} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MatetialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
}

const MenuPage: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    handleRetrieveCredentials()
  },[])

  const handleRetrieveCredentials = async () => {
    const userDetails = await AsyncStorage.getItem('userData');
    if (userDetails !== null) {
      const userData = JSON.parse(userDetails);
      console.log(userData.name)
      setName(userData.name)
      setContact(userData.contact)
      setEmail(userData.email)
    }
  };

  return (
    <Drawer.Navigator
      defaultStatus="open"
      initialRouteName="HomePage"
      drawerContent={focused => (
        <View style={styles.drawerContent}>
          <View style={styles.header}>
            <View style={styles.userDirectionView}>
              <Image source={require('../Images/Profileimage.png')} />
              <View style={styles.detailsView}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userContact}>{contact}</Text>
                <TouchableOpacity style={styles.editButton}>
                  <MaterialIcons name="edit" color="white" size={16} />
                  <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Divider style={styles.seperator} />
          <View style={styles.userView}>
            <Text style={styles.selectUserText}>Select User </Text>
            <View style={styles.radioButtonDirectionView}>
              <View style={styles.radioButtonView}>
                <RadioButton value="" color="#073762" />
                <Text style={styles.customerText}>Customer</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton value="" color="#073762" />
                <Text style={styles.customerText}>Seller</Text>
              </View>
            </View>
          </View>
          <Divider style={styles.seperator} />
          <TouchableOpacity
            style={styles.screenComponentButton}
            onPress={() => navigation.navigate('Rent')}>
            <MatetialCommunityIcons
              name="hand-extended"
              color="white"
              size={30}
              style={styles.icn2}
            />
            <MatetialCommunityIcons
              name="key-chain-variant"
              color="white"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.rentText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenComponentButton1}
            onPress={() => navigation.navigate('Buy')}>
            <MatetialCommunityIcons
              name="hand-extended"
              color="#073762"
              size={30}
              style={styles.icn2}
            />
            <MatetialCommunityIcons
              name="key-chain-variant"
              color="#1ea1d6"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.rentText1}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenComponentButton1}
            onPress={() => navigation.navigate('Sell')}>
            <MatetialCommunityIcons
              name="hand-extended"
              color="#073762"
              size={30}
              style={styles.icn2}
            />
            <MatetialCommunityIcons
              name="home-variant"
              color="#1ea1d6"
              size={20}
              style={styles.icon}
            />
            <Text style={styles.rentText1}>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenComponentButton1}
            onPress={() => navigation.navigate('Faqs')}>
            <MaterialCommunityIcons
              name="message"
              color="#073762"
              size={30}
              style={styles.icn2}
            />
            <Text style={styles.faqTxt}>FAQ</Text>
            <Text style={styles.rentText1}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenComponentButton1}
            onPress={() => navigation.navigate('Profile')}>
            <MaterialCommunityIcons
              name="clock-time-eight"
              color="#073762"
              size={30}
              style={styles.icn2}
            />
            <Text style={[styles.rentText1, {color: '#073762'}]}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}>
      <Drawer.Screen
        name="Rent"
        component={Rent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Buy"
        component={Buy}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Sell"
        component={Sell}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Faqs"
        component={Faqs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  drawerContent: {},
  header: {
    height: 130,
    width: '100%',
    justifyContent: 'center',
    marginTop: responsiveHeight(2.8),
  },
  userDirectionView: {
    flexDirection: 'row',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  userName: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  userContact: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1.4),
  },
  editButton: {
    backgroundColor: '#073762',
    flexDirection: 'row',
    borderRadius: 4,
    height: responsiveHeight(4.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1.6),
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    marginHorizontal: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans j',
  },
  detailsView: {
    left: responsiveWidth(2.8),
  },
  seperator: {
    height: responsiveHeight(0.2),
    backgroundColor: '#9fc5e9',
    width: responsiveWidth(62),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  userView: {},
  selectUserText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(7.8),
  },
  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  customerText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  radioButtonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(56),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  screenComponentButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 6,
    marginTop: responsiveHeight(2),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: responsiveWidth(7.6),
    top: responsiveHeight(0.8),
  },
  icn2: {
    marginTop: responsiveHeight(1.4),
  },
  rentText: {
    color: 'white',
    left: responsiveWidth(3.8),
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
  },
  screenComponentButton1: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 6,
    marginTop: responsiveHeight(2),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rentText1: {
    color: '#9fc5e9',
    left: responsiveWidth(3.8),
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
  },
  faqTxt: {
    color: 'white',
    position: 'absolute',
    fontSize: responsiveFontSize(1.2),
    left: responsiveWidth(6),
    fontFamily: 'PlusJakartaSans a',
  },
});
