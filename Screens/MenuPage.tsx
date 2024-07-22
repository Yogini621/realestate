import 'react-native-gesture-handler';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './Profile';
import {Divider} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rent from './Rent';
import Buy from './Buy';
import Faqs from './Faqs';
import Sell from './Sell';

const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
}

const MenuPage: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [selectId, setSelectId] = useState(1);

  const CustomerComponentData = [
    {
      id: 1,
      option: 'Rent',
      icon: require('../Images/Layer.png'),
      navigatePage: 'Rent',
    },
    {
      id: 2,
      option: 'Buy',
      icon: require('../Images/Photo.png'),
      navigatePage: 'Buy',
    },
    {
      id: 3,
      option: 'Sell',
      icon: require('../Images/BuyHome.png'),
      navigatePage: 'Sell',
    },
    {
      id: 4,
      option: 'FAQ`s',
      icon: require('../Images/FAQ.png'),
      navigatePage: 'Faqs',
    },
    {
      id: 5,
      option: 'Profile',
      icon: require('../Images/Initial.png'),
      navigatePage: 'Profile',
    },
  ];

  useEffect(() => {
    handleRetrieveCredentials();
  }, []);

  const handleRetrieveCredentials = async () => {
    const userDetails = await AsyncStorage.getItem('userData');
    if (userDetails !== null) {
      const userData = JSON.parse(userDetails);
      setName(userData.name);
      setContact(userData.contact);
      setEmail(userData.email);
    }
  };

  const handleOnPress = (id: number, navigatePage: any) => {
    setSelectId(id);
    navigation.navigate(navigatePage);
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
                <Text style={styles.userContact}>+91 {contact}</Text>
                <TouchableOpacity style={styles.editButton}>
                  <MaterialIcons name="edit" color="white" size={16} />
                  <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Divider style={styles.seperator} />
          <View style={styles.userView}>
            <View>
              {CustomerComponentData.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={
                    selectId === item.id
                      ? styles.activeComponentButton
                      : styles.componentButton
                  }
                  onPress={() => handleOnPress(item.id, item.navigatePage)}>
                  <Image source={item.icon} />
                  <Text
                    style={
                      selectId === item.id
                        ? styles.activeComponentText
                        : styles.componentText
                    }>
                    {item.option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
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
  componentButton: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 10,
    marginTop: responsiveHeight(1.8),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  componentText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2.8),
  },
  activeComponentButton: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 10,
    marginTop: responsiveHeight(1.8),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#073762',
  },
  activeComponentText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2.8),
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#ffffff',
    elevation: 1,
    padding: 10,
    width: responsiveWidth(90),
    borderRadius: 10,
    height: responsiveHeight(30),
  },
  userModeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    alignItems: 'center',
  },
  userModeText: {
    color: '#f14231',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3.2),
  },
  seperator1: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(80),
    backgroundColor: '#e1e1e3',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  switchTextView: {
    width: responsiveWidth(48),
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    marginTop: responsiveHeight(1),
    justifyContent: 'center',
  },
  switchText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#073762',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    width: responsiveWidth(34),
  },
  yesText: {
    color: '#ffffff',
    fontFamily: 'PlusJakartaSans a',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(78),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2.8),
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    width: responsiveWidth(34),
  },
  cancelText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
  },
});
