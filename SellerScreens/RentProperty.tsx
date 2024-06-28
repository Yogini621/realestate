import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import OptionSelect from './OptionSelect';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {Dropdown} from 'react-native-element-dropdown';

interface Props {
  navigation: any;
}

const RentProperty: React.FC<Props> = ({navigation}) => {
  const [step1Visible, setStep1Visible] = useState(false);
  const [step2Visible, setStep2Visible] = useState(true);
  const [step3Visible, setStep3Visible] = useState(false);
  const [step4Visible, setStep4Visible] = useState(false);
  const [step, setStep] = useState(0);
  const [image, setImgage] = useState<string[]>([]);

  const openStep3 = () => {
    setStep2Visible(false);
    setStep3Visible(true);
  };

  const openStep4 = () => {
    setStep3Visible(false);
    setStep4Visible(true);
  };

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const SelectImage = () => {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 5,
    };
    launchImageLibrary(options, (response: ImagePicker.ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('user canceled the image pIcker');
      } else if (response.errorCode) {
        console.log('ImagePicker error', response.errorCode);
        console.log('imagePicker Error');
      } else {
        let ImageUri = response.assets?.[0]?.uri;

        if (ImageUri) setImgage([...image, ImageUri]);
      }
    });
  };

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
        {step2Visible && (
          <View>
            <View style={styles.locationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.locatedText}>
                Where is your property located
              </Text>
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
                    <Text style={styles.flatText}>
                      Flat Apartment Sale/Rent{' '}
                    </Text>
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
                  onPress={openStep3}>
                  <Text style={styles.nextStepText}>Next step</Text>
                  <MaterialIcons
                    name="arrow-right-alt"
                    size={26}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {step3Visible && (
          <View>
            <View style={styles.informationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.locatedText1}>Listing Information</Text>
              <Text style={styles.labelText}>Property Type*</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Type"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Bedrooms</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="How many beds"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Baths</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="How many baths "
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Square Feet</Text>
              <TextInput
                placeholder="Sq ft"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>Select Amenitites</Text>
              <View style={styles.amenititesView}>
                <View style={styles.amenititesDirectionView}>
                  <OptionSelect
                    optionText="A/C"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Deck"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Pet Friendly"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Pool"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Free Parking Sports"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Yard"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Free Wi-Fi"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Gym"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Hardwood Floor"
                    onPress={() => console.log('hello')}
                  />
                  <OptionSelect
                    optionText="Jacuzzi"
                    onPress={() => console.log('hello')}
                  />
                </View>
              </View>
              <Text style={styles.labelText}>Description</Text>
              <TextInput
                placeholder="Tell us about your home here"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>Lease Duration</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select duration"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Heating</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select heating"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Cooling</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Cooling"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Repair Quality</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Repair Quality"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Parking Area</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Parking Area Yes or No "
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Laundry</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Laundry"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Rent</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Enter your rented price"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                />
                <TouchableOpacity>
                  <Entypo name="chevron-small-down" color="black" size={16} />
                </TouchableOpacity>
              </View>
              <View style={styles.residentialAndCommercialButtonView}>
                <TouchableOpacity style={styles.saveAsDraftButton}>
                  <Text style={styles.saveAsDraftsText}>Save as drafts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextStepButton}
                  onPress={openStep4}>
                  <Text style={styles.nextStepText}>Next step</Text>
                  <MaterialIcons
                    name="arrow-right-alt"
                    size={26}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {step4Visible && (
          <View>
            <View style={styles.locationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <View style={styles.uploadImageView}>
                <Text style={styles.uploadPhotosText}>upload Photos</Text>
                <TouchableOpacity onPress={SelectImage}>
                  <Image
                    source={require('../Images/Uploadphoto.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.residentialAndCommercialButtonView}>
                <TouchableOpacity style={styles.saveAsDraftButton}>
                  <Text style={styles.saveAsDraftsText}>Save as drafts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextStepButton}
                  onPress={() => navigation.navigate('PreviewProperty')}>
                  <Text style={styles.nextStepText}>Next step</Text>
                  <MaterialIcons
                    name="arrow-right-alt"
                    size={26}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={styles.footerView}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
          <Text style={styles.privacyText}>Copyright 2023</Text>
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
    marginBottom: responsiveHeight(1.4),
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
  amenititesView: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 8,
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.4),
  },
  amenititesDirectionView: {
    flexDirection: 'row',
    margin: 5,
    flexWrap: 'wrap',
  },
  uploadImageView: {
    height: responsiveHeight(44),
    width: responsiveWidth(80),
    alignSelf: 'center',
    backgroundColor: '#136dc71a',
    borderRadius: 8,
    marginTop: responsiveHeight(2),
  },
  uploadPhotosText: {
    color: '#052443',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(6),
    textDecorationLine: 'underline',
    textDecorationColor: '',
  },
  image: {
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
});
