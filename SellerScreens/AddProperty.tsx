import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  navigation:any;
}

const AddProperty:React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
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
        <View style={styles.stepView}>
          <Text style={styles.lookIntoText}>Listing Information</Text>
          <Text style={styles.stepText}>STEP 2 OF 4</Text>
        </View>
        <View style={styles.getHelpTextView}>
          <Text style={styles.lostText}>Lost or have trouble?</Text>
          <TouchableOpacity style={styles.getHelpView}>
            <Text style={styles.getHelpText}>{'    '}Get help</Text>
            <MaterialIcons name="arrow-right-alt" size={26} color="#073762" />
          </TouchableOpacity>
        </View>
        <View style={styles.locationView}>
          <TouchableOpacity style={styles.backButton}>
            <Fontisto name="arrow-left-l" size={16} color="#073762" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.propertyLocatedText}>
            Where is your property located
          </Text>
          <Text style={styles.basicDetailsText}>Add Basic details</Text>
          <TouchableOpacity style = {styles.locationButton}>
            <MaterialIcons name="my-location" color="#073762" size={24} />
            <Text style = {styles.locationText}>Pick My Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stepView}>
          <Text style={styles.lookIntoText}>Listing Information</Text>
        </View>
        <View style={styles.listingInformationView}>
          <TouchableOpacity style={styles.backButton}>
            <Fontisto name="arrow-left-l" size={16} color="#073762" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.listingInformationText}>Listing Information</Text>
          <KeyboardAwareScrollView>
            <Text style={styles.labelText}>City*</Text>
            <TextInput
              placeholder="Select your city"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <Text style={styles.labelText}>Apartment / Society</Text>
            <TextInput
              placeholder="Enter your apartment/society"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <Text style={styles.labelText}>Locality</Text>
            <TextInput
              placeholder="Enter your locality"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <Text style={styles.labelText}>State</Text>
            <TextInput
              placeholder="Enter State"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <Text style={styles.labelText}>Country</Text>
            <TextInput
              placeholder="Enter Country"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <Text style={styles.labelText}>Pincode</Text>
            <TextInput
              placeholder="Enter Pincode"
              placeholderTextColor="#00092980"
              style={styles.input}
            />
            <View style={styles.residentialAndCommercialButtonView}>
              <TouchableOpacity style={styles.saveAsDraftButton}>
                <Text style={styles.saveAsDraftsText}>Save as drafts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextStepButton}
                onPress={() => navigation.navigate('AddProperty')}>
                <Text style={styles.nextStepText}>Next step</Text>
                <MaterialIcons name="arrow-right-alt" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.footerView}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
          <Text style={styles.privacyText}>Copyright 2023</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddProperty

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
  stepView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    alignItems: 'center',
  },
  lookIntoText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2.4),
  },
  stepText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2.8),
  },
  backText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  listingInformationView: {
    height: responsiveHeight(108),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    elevation: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: responsiveHeight(4),
  },
  listingInformationText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.2),
    left: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
  },
  labelText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(1),
  },
  input: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 8,
    marginTop: responsiveHeight(1.6),
    paddingHorizontal: 20,
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    //     marginBottom:responsiveHeight(1)
  },
  nextStepButton: {
    flexDirection: 'row',
    backgroundColor: '#073762',
    height: responsiveHeight(6.8),
    width: responsiveWidth(40),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextStepText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  saveAsDraftButton: {
    backgroundColor: '#0737621a',
    height: responsiveHeight(6.8),
    width: responsiveWidth(40),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveAsDraftsText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
  residentialAndCommercialButtonView: {
    marginTop: responsiveHeight(4.8),
    flexDirection: 'row',
    width: responsiveWidth(84),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  privacyText: {
    color: '#718096',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
  },
  getHelpTextView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    right: responsiveWidth(4.8),
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
  getHelpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lostText: {
    color: '#a8a8a8',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 24,
  },
  getHelpText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  locationView: {
    padding: 10,
    elevation: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  propertyLocatedText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4),
  },
  basicDetailsText: {
    color: '#a4aeb4',
    left: responsiveWidth(4),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(1),
  },
  locationButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    width: responsiveWidth(76),
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    height: responsiveHeight(7.4),
    marginTop: responsiveHeight(3.2),
    marginBottom: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationText: {
    color: '#000929',
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
});