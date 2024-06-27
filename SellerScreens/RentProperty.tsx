import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  navigation: any;
}

const RentProperty: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listingInformationView}>
          <Text style={styles.listingText}>Listing Information</Text>
          <Text style={styles.stepText}>STEP 2 OF 4</Text>
        </View>
        <View style={styles.stepView}>
          <View style={styles.progressFormDirection}>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView1}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView1}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
          </View>
          <View style={styles.progressStepsTextView}>
            <View>
              <Text style={styles.basicDetailsText}>BasicDetails</Text>
              <View style={styles.flatAndditTextView}>
                <Text style={styles.flatText}>Flat Apartment Sale/Rent </Text>
                <TouchableOpacity>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.getHelpTextView}>
          <Text style={styles.lostText}>Lost or have trouble?</Text>
          <TouchableOpacity style={styles.getHelpView}>
            <Text style={styles.getHelpText}>{'     '}Get help</Text>
            <MaterialIcons name="arrow-right-alt" size={26} color="#073762" />
          </TouchableOpacity>
        </View>
        <View style={styles.locationView}>
          <TouchableOpacity style={styles.backButton}>
            <Fontisto name="arrow-left-l" size={16} color="#073762" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.locatedText}>Where is your property located</Text>
          <Text style={styles.addBasicDetailsText}>Add Basic details</Text>
          <TouchableOpacity style={styles.locationButton}>
            <MaterialIcons name="my-location" color="#073762" size={28} />
            <Text style={styles.pickMyLocationText}>Pick My Location</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.listingText1}>Listing Information</Text>
        <View style={styles.stepView}>
          <View style={styles.progressFormDirection}>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView1}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView1}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
            <View style={styles.minusView}>
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
              <Foundation name="minus" color="#073762" size={12} />
            </View>
            <Feather name="square" color="#073762" size={28} />
          </View>
          <View style={styles.progressStepsTextView}>
            <View>
              <Text style={styles.basicDetailsText}>BasicDetails</Text>
              <View style={styles.flatAndditTextView}>
                <Text style={styles.flatText}>Flat Apartment Sale/Rent </Text>
                <TouchableOpacity>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.informationView}>
          <TouchableOpacity style={styles.backButton}>
            <Fontisto name="arrow-left-l" size={16} color="#073762" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.locatedText1}>Listing Information</Text>
          <Text style={styles.labelText}>City*</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Select your city"
              placeholderTextColor="#00092980"
              style={styles.input1}
            />
            <TouchableOpacity>
              <Entypo name="chevron-small-down" color="black" size={16} />
            </TouchableOpacity>
          </View>
          <Text style={styles.labelText}>Apartment / Society </Text>
          <TextInput
            placeholder="Enter your apartment/society"
            style={styles.input}
            placeholderTextColor="#00092980"
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentProperty;

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
  listingText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.4),
    // left: responsiveWidth(4.8),
  },
  listingInformationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2.8),
  },
  stepText: {
    color: '#a4aeb4',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
  },
  stepView: {
    backgroundColor: '#f4faff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    height: responsiveHeight(12),
    borderRadius: 8,
  },
  progressFormDirection: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  minusView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    justifyContent: 'space-between',
    width: responsiveWidth(28),
  },
  minusView1: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    justifyContent: 'space-between',
    width: responsiveWidth(6),
  },
  basicDetailsText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans a',
  },
  progressStepsTextView: {
    flexDirection: 'row',
    left: responsiveWidth(6),
  },
  flatText: {
    color: '#a8a8a8',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'PlusJakartaSans a',
  },
  flatAndditTextView: {
    flexDirection: 'row',
  },
  editText: {
    color: '#2289ff',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'PlusJakartaSans a',
  },
  getHelpText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  getHelpTextView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    right: responsiveWidth(4.8),
    alignItems: 'center',
    marginTop: responsiveHeight(2.8),
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
  locationView: {
    backgroundColor: '#ffffff',
    elevation: 1,
    padding: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: responsiveHeight(2),
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
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  locatedText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4),
  },
  addBasicDetailsText: {
    color: '#a4aeb4',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(1),
    left: responsiveWidth(4),
  },
  locationButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
  },
  pickMyLocationText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2),
  },
  listingText1: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.4),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  informationView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginTop: responsiveHeight(2),
    elevation: 1,
    marginBottom: responsiveHeight(2),
  },
  labelText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  inputView: {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input1: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(66),
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
  },
  locatedText1: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4),
    marginBottom: responsiveHeight(1),
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
});
