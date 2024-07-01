import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Old Password" style={styles.input1} />
      <View style={styles.inputView}>
        <TextInput placeholder="New Password" style={styles.input} />
        <Ionicons name="eye" color="#9fc5e9" size={20} />
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Confirm Password" style={styles.input} />
        <Ionicons name="eye" color="#9fc5e9" size={20} />
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(80),
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
  input1: {
    borderWidth: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 6,
    height: responsiveHeight(7.4),
    color: '#acadb9',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    marginTop:responsiveHeight(8)
  },
});