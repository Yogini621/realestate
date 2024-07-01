import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfileInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileDirectionView}>
        <Image source={require('../Images/user.png')} style={styles.image} />
        <View style={styles.userView}>
          <Text style={styles.userText}>Joseph</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.uploadPictureButton}>
              <Text style={styles.uploadPictureText}>Upload New Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Joseph" style={styles.input} />
        <Feather name="edit" color="#acadb9" size={20} />
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="+00 0000 0000" style={styles.input} />
        <Feather name="edit" color="#acadb9" size={20} />
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="joseph@gmail.com" style={styles.input} />
        <Feather name="edit" color="#acadb9" size={20} />
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(64),
    marginTop: responsiveHeight(1.4),
  },
  userText: {
    color: '#191c32',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans m',
  },
  uploadPictureButton: {
    backgroundColor: '#073762',
    borderRadius: 8,
    width: responsiveWidth(40),
    alignItems: 'center',
    height: responsiveHeight(4.8),
    justifyContent: 'center',
  },
  uploadPictureText: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans a',
  },
  deleteButton: {
    backgroundColor: '#9fc5e9',
    borderRadius: 8,
    paddingHorizontal: 20,
    width: responsiveWidth(22),
    alignItems: 'center',
    height: responsiveHeight(4.8),
    justifyContent: 'center',
  },
  deleteText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  inputView: {
    borderWidth: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 6,
    height: responsiveHeight(7.4),
  },
  input: {
    color: '#acadb9',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(80),
  },
  profileDirectionView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: responsiveHeight(4.8),
  },
  image: {
    height: 80,
    width: 80,
  },
  userView: {
    left: responsiveWidth(4),
  },
  updateButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6.8),
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
  updateText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
