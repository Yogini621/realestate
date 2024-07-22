import {
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
import {Switch} from 'react-native-paper';

const MyAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.myAccountView}>
        <Text style={styles.myAccountText}>My Account</Text>
        <Text style={styles.labelText}>Email</Text>
        <View style={styles.inputView}>
          <TextInput placeholder="Email" style={styles.input} />
          <TouchableOpacity>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <View style={styles.verificationView}>
          <Text style={styles.enableText}>Enable 2-steps verification</Text>
          <Switch />
        </View>
        <View style={styles.verificationView1}>
          <Text style={styles.verificationText}>
            Make your account extra secure. Along with your password, you’ll
            need to enter a code that we text to your phone each time you sign
            in.
          </Text>
        </View>
        <TouchableOpacity style={styles.saveChangesButton}>
          <Text style={styles.saveChangesText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  myAccountView: {
    width: responsiveWidth(90),
    borderWidth: 2,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(2.8),
  },
  myAccountText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.4),
    left: responsiveWidth(2),
  },
  labelText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(2),
    left: responsiveWidth(2),
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  verifyText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  seperator: {
    marginTop: responsiveHeight(3.4),
    height: responsiveHeight(0.2),
    backgroundColor: '#9fc5e9',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  enableText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  verificationView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    justifyContent: 'space-between',
  },
  verificationText: {
    color: '#00092999',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  verificationView1: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  saveChangesButton: {
    backgroundColor: '#073762',
    padding: 10,
    marginBottom: responsiveHeight(6),
    borderRadius: 10,
    width: responsiveWidth(36),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(6),
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveChangesText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
});
