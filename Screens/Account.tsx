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
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RadioButton} from 'react-native-paper';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingsView}>
        <Text style={styles.settingsText}>Settings</Text>
        <Text style={styles.emailLabel}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000929"
            style={styles.input}
          />
          <Text style={styles.updateText}>Update</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.deleteAccoutView}>
          <View>
            <Text style={styles.deleteAccountText}>Delete Account</Text>
            <Text style={styles.deleteAccountText1}>
              Delete your account and
            </Text>
            <Text style={styles.deleteAccountText1}>all the data</Text>
          </View>
          <TouchableOpacity style={styles.deleteAccountButton}>
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <View>
          <Text style={styles.accountText}>Account Type</Text>
          <Text style={styles.updateAccountTypeText}>
            You can update your account type
          </Text>

          <View style={styles.radioButtonView}>
            <RadioButton value="" color="#073762" />
            <View style={styles.customerModeView}>
              <Text style={styles.customerMode}>Customer Mode</Text>
              <Text style={styles.customerModeText}>
                Start as a 'Customer' for easy browsing. Explore listings
                tailored to you.
              </Text>
            </View>
          </View>
          <View style={styles.radioButtonView}>
            <RadioButton value="" color="#073762" />
            <View style={styles.customerModeView}>
              <Text style={styles.customerMode}>Seller Mode</Text>
              <Text style={styles.customerModeText}>
                Choose 'Seller' to reach more buyers. Sell your property
                efficiently with us.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  settingsView: {
    height: responsiveScreenHeight(73),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(4),
    borderRadius: 6,
    backgroundColor: '#f4faff',
    marginBottom:responsiveHeight(4)
  },
  settingsText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.4),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(4),
  },
  emailLabel: {
    color: '#000000',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(4.6),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  updateText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(89),
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(2.8),
  },
  deleteAccountText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(4),
  },
  deleteAccountButton: {
    borderWidth: 2,
    borderColor: '#fce3e3',
    padding: 10,
    width: responsiveWidth(34.8),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6),
  },
  deleteButtonText: {
    color: '#f06565',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  deleteAccoutView: {
    flexDirection: 'row',
    width: responsiveWidth(86),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteAccountText1: {
    color: '#00092999',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(4),
  },
  accountText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.8),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(4),
  },
  updateAccountTypeText: {
    color: '#000929cc',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4),
    lineHeight: 28,
  },
  radioButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: responsiveWidth(4),
    width: responsiveWidth(70),
    marginTop: responsiveHeight(2.4),
  },
  customerModeView: {
    width: responsiveWidth(60),
  },
  customerMode: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
  customerModeText: {
    color: '#000929c7',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
});
