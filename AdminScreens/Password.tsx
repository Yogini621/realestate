import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Password = () => {
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
        <TextInput placeholder="Old Password" style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="New Password" style={styles.input} />
        <TouchableOpacity>
          <Ionicons name="eye" color="#9fc5e9" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Confirm Password" style={styles.input} />
        <TouchableOpacity>
          <Ionicons name="eye" color="#9fc5e9" size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Password;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
});
