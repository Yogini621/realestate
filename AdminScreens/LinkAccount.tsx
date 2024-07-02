import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const LinkAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.linkAccountText}>Link Account</Text>
      <Text style={styles.socialText}>
        These social profiles will appear on your website
      </Text>
      <Text style={styles.socialMediaText}>Twitter</Text>
      <View style={styles.mediaLinkView}>
        <Text style={styles.linkText}>https://twitter.com/makostore</Text>
      </View>
      <Text style={styles.socialMediaText}>Facebook</Text>
      <View style={styles.mediaLinkView}>
        <Text style={styles.linkText}>https://twitter.com/makostore</Text>
      </View>
      <Text style={styles.socialMediaText}>Instagram</Text>
      <View style={styles.mediaLinkView}>
        <Text style={styles.linkText}>https://twitter.com/makostore</Text>
      </View>
      <Text style={styles.socialMediaText}>Youtube</Text>
      <View style={styles.mediaLinkView}>
        <Text style={styles.linkText}>https://twitter.com/makostore</Text>
      </View>
      <TouchableOpacity style={styles.saveChangesButton}>
        <Text style={styles.saveChangesText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linkAccountText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(4.8),
  },
  socialText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
  },
  socialMediaText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  mediaLinkView: {
    backgroundColor: '#f4faff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: responsiveHeight(2.4),
  },
  linkText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  saveChangesButton: {
    backgroundColor: '#073762',
    padding: 10,
    marginBottom: responsiveHeight(10),
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
