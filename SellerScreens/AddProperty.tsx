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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Formik} from 'formik';
import Entypo from 'react-native-vector-icons/Entypo';
import OptionSelect from './OptionSelect';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

interface Props {
  navigation: any;
}

interface Step1Data {
  city: string;
  Apartment: string;
  locality: string;
  state: string;
  country: string;
  pincode: string;
}
interface Step2Data {
  city: string;
  Apartment: string;
}

interface Step3Data {
  propertyType: string;
  Bedrooms: string;
  Baths: string;
  squareFeet: string;
  noOfFloors: string;
  Amenitites: [];
  description: string;
  parkingArea: string;
  laundry: string;
  BuyingPrice: string;
  status: string;
}

interface Step4Data {
  uploadImage: any;
}

const AddProperty: React.FC<Props> = ({navigation}) => {
  const [step1Data, setStep1Data] = useState<Step1Data>({
    city: '',
    Apartment: '',
    locality: '',
    state: '',
    country: '',
    pincode: '',
  });
  const [step2Data, setStep2Data] = useState<Step2Data>({
    city: '',
    Apartment: '',
  });
  const [step3Data, setStep3Data] = useState<Step3Data>({
    propertyType: '',
    Bedrooms: '',
    Baths: '',
    squareFeet: '',
    noOfFloors: '',
    Amenitites: [],
    description: '',
    parkingArea: '',
    laundry: '',
    BuyingPrice: '',
    status: '',
  });
  const [step4Data, setStep4Data] = useState({
    uploadImage: '',
  });

  const [image, setImgage] = useState<string[]>([]);

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
          <Text style={styles.stepText}>STEP 1 OF 4</Text>
        </View>
        <ProgressSteps progressBarColor="#052443">
          {/* <View style={styles.getHelpTextView}>
            <Text style={styles.lostText}>Lost or have trouble?</Text>
            <TouchableOpacity style={styles.getHelpView}>
              <Text style={styles.getHelpText}>{'    '}Get help</Text>
              <MaterialIcons name="arrow-right-alt" size={26} color="#073762" />
            </TouchableOpacity>
          </View> */}
          <ProgressStep label="Basic Details">
            <View style={styles.locationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.propertyLocatedText}>
                Where is your property located
              </Text>
              <Text style={styles.basicDetailsText}>Add Basic details</Text>
              <TouchableOpacity style={styles.locationButton}>
                <MaterialIcons name="my-location" color="#073762" size={24} />
                <Text style={styles.locationText}>Pick My Location</Text>
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
              <Text style={styles.listingInformationText}>
                Listing Information
              </Text>
              <KeyboardAwareScrollView>
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
                    <MaterialIcons
                      name="arrow-right-alt"
                      size={26}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </ProgressStep>
          <ProgressStep label="Property Details">
            <View>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.listingInformationText}>
                Listing Information
              </Text>
              <Text style={styles.labelText1}>Property Type*</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select type"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
                <Entypo name="chevron-small-down" color="gray" size={20} />
              </View>
              <Text style={styles.labelText1}>Bedrooms</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="How many beds"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
                <Entypo name="chevron-small-down" color="gray" size={20} />
              </View>
              <Text style={styles.labelText1}>Baths</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="How many baths"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
                <Entypo name="chevron-small-down" color="gray" size={20} />
              </View>
              <Text style={styles.labelText1}>Square Feet</Text>
              <TextInput
                placeholder="Sq ft"
                placeholderTextColor="gray"
                style={styles.input}
              />
              <Text style={styles.labelText1}>
                Total No of Floors and your floor details
              </Text>
              <TextInput
                placeholder="Enter Floors"
                placeholderTextColor="gray"
                style={styles.input}
              />
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Property on floor"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
                <Entypo name="chevron-small-down" color="gray" size={20} />
              </View>
              <Text style={styles.labelText1}>Select Amenitites</Text>
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
              <Text style={styles.labelText1}>Description</Text>
              <TextInput
                style={styles.input}
                placeholder="Tell us about your home here"
              />
              <Text style={styles.labelText1}>Parking Area</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Select Parking Area Yes or No"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
                <Entypo name="chevron-small-down" color="gray" size={20} />
              </View>
              <Text style={styles.labelText1}>Buying Price</Text>
              <View style={styles.inputView}>
                <Entypo name="chevron-small-down" color="gray" size={20} />
                <View style={styles.verticalLine} />
                <TextInput
                  placeholder="Enter your Buying Price"
                  placeholderTextColor="gray"
                  style={styles.input1}
                />
              </View>
              <Text style={styles.labelText1}>Available Status</Text>
              <View style={styles.statusDirectionView}>
                <TouchableOpacity style={styles.statusButton}>
                  <Text style={styles.statusButtonText}>Ready to move</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statusButton}>
                  <Text style={styles.statusButtonText}>
                    Under Construction
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Photo & Video Upload">
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
            </View>
          </ProgressStep>
        </ProgressSteps>
        <View style={styles.footerView}>
          <Text style={styles.privacyText}>Privacy Policy</Text>
          <Text style={styles.privacyText}>Copyright 2023</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProperty;

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
    left: responsiveWidth(4),
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
    // marginTop: responsiveHeight(10),
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
  labelText1: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(10),
    marginTop: responsiveHeight(1),
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
  verticalLine: {
    height: responsiveHeight(6.8),
    backgroundColor: '#9fc5e9',
    width: responsiveWidth(0.3),
  },
  statusButton: {
    borderWidth: 1.6,
    borderColor: '#9fc5e9',
    padding: 10,
    borderRadius: 8,
    // width: responsiveWidth(39.6),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  statusDirectionView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusButtonText: {
    color: '#00092980',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
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
