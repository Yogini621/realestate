import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import OptionComponent from './OptionComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropertyPropsComponent from './PropertyPropsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({navigation}) => {
  const [editModal, setEditModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [selectButton, setSelectButton] = useState(false);
  const [selectButton1, setSelectButton1] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  const toogleButton = () => {
    setSelectButton(!selectButton);
    setSelectButton1(false);
  };

  const toogleButton1 = () => {
    setSelectButton1(!selectButton1);
    setSelectButton(false);
  };

  useEffect(() => {
    handleRetrieveCredentials();
  }, []);

  const handleRetrieveCredentials = async () => {
    const userDetails = await AsyncStorage.getItem('userData');
    if (userDetails !== null) {
      const userData = JSON.parse(userDetails);
      console.log(userData.name);
      setName(userData.name);
      setContact(userData.contact);
      setEmail(userData.email);
    }
  };

  const handleEditChanges = async () => {
    const userData = {name, email, contact};
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    setEditModal(false);
  };

  const handleChangePassword = async () => {
    const userDetails = await AsyncStorage.getItem('userDta');
    if (userDetails !== null) {
      const userData = JSON.parse(userDetails);

      if (oldPassword === userData.password) {
        if (newPassword === confirmPassword) {
          userData.password = newPassword;
          await AsyncStorage.setItem('userData', JSON.stringify(userData));
          Alert.alert('Password Changed Successfully');
        } else {
          Alert.alert('NewPassword and Confirm password don not match');
        }
      } else {
        Alert.alert('Old Password is not matched');
      }
    }

    if (newPassword === confirmPassword) {
      setChangePasswordModal(false);
    } else {
      Alert.alert('New Password and confirm Password do not match');
    }
    setSelectButton(!selectButton);
    setSelectButton1(false);
  };

  const handleLogout = async () => {
    const storedUserDetails = await AsyncStorage.getItem('userData');
    if (storedUserDetails !== null) {
      let userDetails = JSON.parse(storedUserDetails);
    }
    const removeData = await AsyncStorage.removeItem('userData');
    console.log(removeData, 'removedata');
    navigation.navigate('SigninPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#073762"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <FontAwesome5 name="grip-lines" size={20} color="#073762" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.userDetailsView}>
          <View style={styles.userDetailsView1}>
            <Image source={require('../Images/Profileimage.png')} />
            <View>
              <View style={styles.profileView}>
                <FontAwesome name="user-circle" color="white" size={24} />
                <Text style={styles.userName}>{name} </Text>
              </View>
              <View style={styles.profileView}>
                <Ionicons name="call-outline" color="white" size={24} />
                <Text style={styles.userName}>Call: +91{contact}</Text>
              </View>
              <View style={styles.profileView}>
                <Fontisto name="email" color="white" size={24} />
                <Text style={styles.userName}>Mail:{email}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setEditModal(true)}>
              <Feather name="edit" color="white" size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionView}>
          <OptionComponent optionText="My requests" color="#222222" />
          <OptionComponent
            optionText="My Favorites"
            onPress={() => navigation.navigate('Favorites')}
            // color="#33333380"
          />
          <OptionComponent
            optionText="My Purchases"
            onPress={() => navigation.navigate('MyPurchasesPage')}
            // color="#33333380"
          />
          <OptionComponent
            optionText="Settings"
            onPress={() => navigation.navigate('Settings')}
            // color="#33333380"
          />
          <OptionComponent
            optionText="Contact Us"
            onPress={() => navigation.navigate('ContactUs')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Privacy Policy"
            onPress={() => navigation.navigate('PrivacyPolicy')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Terms & Conditions"
            onPress={() => navigation.navigate('TermsAndConditions')}
            color="#33333380"
          />
          <OptionComponent
            optionText="About Us"
            onPress={() => navigation.navigate('Aboutus')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Change Password"
            onPress={() => setChangePasswordModal(true)}
            color="#33333380"
          />
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => setLogoutModal(true)}>
            <Text style={styles.logOutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discoveView}>
          <View style={styles.discoverTextView}>
            <Text style={styles.discoverText}>
              Discover the best property today – spacious, modern properties
              available now!
            </Text>
          </View>
          <View style={styles.faqSectionButtonView}>
            <View style={styles.faqSectionTextView}>
              <Text style={styles.faqSectionText}>
                Having trouble in using any features. Click here for FAQ
                section.
              </Text>
            </View>
            <TouchableOpacity style={styles.faqsButton}>
              <Text style={styles.faqsText}>FAQ’s Section</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.myRequestText}>My requests </Text>
        <View style={styles.requestSentView}>
          <Text style={styles.requestSentText}>Requests sent</Text>
          <View style={styles.acceptedCountView}>
            <Text style={styles.acceptedCountText}>0</Text>
          </View>
          <Text style={styles.acceptedText}>Accepted</Text>
          <View style={styles.acceptedCountView}>
            <Text style={styles.acceptedCountText}>0</Text>
          </View>
          <Text style={styles.acceptedText}>Rejected</Text>
        </View>
        <View style={styles.inputView}>
          <AntDesign name="search1" size={20} color="#073762" />
          <TextInput
            placeholder="Search for requests"
            placeholderTextColor="#000929"
            style={styles.input}
          />
        </View>
        <View style={styles.propertyView}>
          <PropertyPropsComponent
            propertyType="Property Name"
            propertyText="Southend Park Apart ment LB Nagar..."
          />
          <PropertyPropsComponent
            propertyType="Owner Name"
            propertyText="Madina Aulia"
          />
          <PropertyPropsComponent
            propertyType="Rented Price"
            propertyText="2,095"
          />
          <PropertyPropsComponent
            propertyType="Applied Date"
            propertyText="28-08-2023"
          />
          <PropertyPropsComponent
            propertyType="Status"
            propertyText="Active"
            color="#46d75e"
          />
        </View>
        <View style={styles.ratingView}>
          <Text style={styles.experienceText}>
            How would you rate overall experience?
          </Text>
          <View style={styles.ratingIocnView}>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal visible={editModal} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.editModalView}>
            <View style={styles.crossIconView}>
              <Text style={styles.verifyText}>Profile Details</Text>

              <TouchableOpacity onPress={() => setEditModal(false)}>
                <AntDesign name="close" color="#666666" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.seperator} />
            <View style={styles.image}>
              <Image source={require('../Images/Profileimage.png')} />
              <TouchableOpacity style={styles.editIconView}>
                <MaterialIcons name="edit" color="#073762" size={14} />
              </TouchableOpacity>
            </View>

            <View style={styles.iputView}>
              <Text style={styles.labelText}>Full Name</Text>
              <TextInput
                // placeholder="Joseph K"
                style={styles.input1}
                value={name}
                placeholderTextColor="#666666"
                onChangeText={setName}
              />
            </View>
            <View style={styles.iputView}>
              <Text style={styles.labelText}>Phone Number</Text>
              <TextInput
                // placeholder="9000459209"
                placeholderTextColor="#666666"
                style={styles.input1}
                value={contact}
                onChangeText={setContact}
              />
            </View>
            <View style={styles.iputView}>
              <Text style={styles.labelText}>Email ID</Text>
              <TextInput
                // placeholder="Josephexample@gmail.com"
                style={styles.input1}
                value={email}
                placeholderTextColor="#666666"
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.activeButton}
                onPress={handleEditChanges}>
                <Text style={styles.activeButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setEditModal(false)}
                style={styles.inActiveButon}>
                <Text style={styles.inActiveButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={logoutModal} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.logoutMdal}>
            <View style={styles.crossIconView}>
              <Text style={styles.verifyText}>Logout</Text>

              <TouchableOpacity onPress={() => setLogoutModal(false)}>
                <AntDesign name="close" color="#666666" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.seperator} />
            <Text style={styles.logoutText}>
              Are you sure you want to logout?
            </Text>
            <TouchableOpacity
              style={styles.logOutButton1}
              onPress={handleLogout}>
              <Text style={styles.activeButtonText}>Yes,I want to</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inActiveLogoutBtn}
              onPress={() => setLogoutModal(false)}>
              <Text style={styles.inActiveButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={changePasswordModal}
        animationType="slide"
        transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.changePasswordModal}>
            <View style={styles.crossIconView}>
              <Text style={styles.verifyText}>Change Password</Text>

              <TouchableOpacity onPress={() => setChangePasswordModal(false)}>
                <AntDesign name="close" color="#666666" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.seperator1} />
            <View style={styles.iputView}>
              <Text style={styles.labelText}>
                Old Password <Text style={styles.star}>*</Text>
              </Text>
              <TextInput
                style={styles.input1}
                placeholder="Old Password"
                placeholderTextColor="#666666"
              />
            </View>
            <View style={styles.iputView}>
              <Text style={styles.labelText}>
                New Password <Text style={styles.star}>*</Text>
              </Text>
              <TextInput
                style={styles.input1}
                placeholder="New Password"
                placeholderTextColor="#666666"
              />
            </View>
            <View style={styles.iputView}>
              <Text style={styles.labelText}>
                Confirm Password <Text style={styles.star}>*</Text>
              </Text>
              <TextInput
                style={styles.input1}
                placeholder="Re-Enter Password"
                placeholderTextColor="#666666"
              />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={
                  selectButton ? styles.activeButton : styles.inActiveButon
                }
                onPress={handleChangePassword}>
                <Text
                  style={
                    selectButton
                      ? styles.activeButtonText
                      : styles.inActiveButtonText
                  }>
                  Save Password
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectButton1 ? styles.activeButton : styles.inActiveButon
                }
                onPress={toogleButton1}>
                <Text
                  style={
                    selectButton1
                      ? styles.activeButtonText
                      : styles.inActiveButtonText
                  }>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    elevation: 1,
    justifyContent: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  iconView: {
    width: responsiveWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userDetailsView: {
    backgroundColor: '#100a55',
    height: responsiveHeight(18),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailsView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileView: {
    flexDirection: 'row',
    left: responsiveWidth(2.6),
    marginBottom: responsiveHeight(1),
  },
  userName: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.4),
    fontSize: responsiveFontSize(1.4),
    width: responsiveWidth(52),
  },
  editIcon: {
    right: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  logOutButton: {
    backgroundColor: '#100a55',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    width: responsiveWidth(44),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3.4),
    marginBottom: responsiveHeight(4),
  },
  logOutButtonText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
  optionView: {
    backgroundColor: '#f4faff',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  discoveView: {
    backgroundColor: '#ebebeb',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.8),
    height: responsiveHeight(36),
    borderRadius: 4,
  },
  discoverText: {
    color: '#333333',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.5),
    lineHeight: 18,
  },
  discoverTextView: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.8),
  },
  faqSectionButtonView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(18),
    width: responsiveWidth(68),
    marginTop: responsiveHeight(4),
    left: responsiveWidth(6),
    borderRadius: 4,
  },
  faqSectionTextView: {
    width: responsiveWidth(50),
    left: responsiveWidth(4.2),
    marginTop: responsiveHeight(2.8),
  },
  faqSectionText: {
    fontSize: responsiveFontSize(1.4),
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
  },
  faqsButton: {
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(2.8),
    padding: 10,
    width: responsiveWidth(28),
    height: responsiveHeight(5),
    left: responsiveWidth(4.2),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqsText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.2),
  },
  myRequestText: {
    color: '#333333',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2.4),
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'PlusJakartaSans a',
  },
  requestSentText: {
    color: '#333333',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  requestSentView: {
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  acceptedCountView: {
    backgroundColor: '#100a55',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptedCountText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.4),
  },
  acceptedText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.5),
    right: responsiveWidth(1),
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: 8,
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f7f7fd',
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  propertyView: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    elevation: 3,
    height: responsiveHeight(44),
    marginBottom: responsiveWidth(26),
    borderRadius: 6,
  },
  propertiesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  placeView: {
    width: responsiveWidth(36),
  },
  ratingView: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveHeight(4),
    borderRadius: 16,
  },
  experienceText: {
    color: '#000000',
    textAlign: 'center',
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  ratingIocnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(58),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  editModalView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(68.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  crossIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
  },
  verifyText: {
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.4),
    color: '#073762',
  },
  seperator: {
    backgroundColor: '#e1e1e3',
    height: responsiveHeight(0.1),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(4),
  },
  iputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    margin: 8,
    alignItems: 'center',
  },
  labelText: {
    color: '#333333',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    width: responsiveWidth(30),
  },
  input1: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(50),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    padding: 10,
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    color: '#333333',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  activeButton: {
    backgroundColor: '#073762',
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(36.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveButon: {
    borderRadius: 8,
    height: responsiveHeight(7.2),
    width: responsiveWidth(38.4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#9fc5e9',
  },
  activeButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  inActiveButtonText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  editIconView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(3),
    width: responsiveWidth(4.8),
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  logoutMdal: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  logoutText: {
    color: '#333333',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    marginBottom: responsiveHeight(3.6),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(6),
  },
  logOutButton1: {
    backgroundColor: '#073762',
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
  },
  inActiveLogoutBtn: {
    borderRadius: 8,
    height: responsiveHeight(7.2),
    width: responsiveWidth(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(1),
  },
  changePasswordModal: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(50),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  seperator1: {
    backgroundColor: '#e1e1e3',
    height: responsiveHeight(0.1),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2),
  },
  star: {
    color: 'red',
  },
});
