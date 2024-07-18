import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
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
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Amenitites from './Amenitites';
import MapView, {LatLng} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {SelectList} from 'react-native-dropdown-select-list';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  navigation: any;
}

const RentProperty: React.FC<Props> = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [step1Visible, setStep1Visible] = useState(false);
  const [step2Visible, setStep2Visible] = useState(true);
  const [step3Visible, setStep3Visible] = useState(false);
  const [step4Visible, setStep4Visible] = useState(false);
  const [step, setStep] = useState(0);
  const [image, setImgage] = useState<string[]>([]);
  const [selected, setSelected] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [city,setCity] = useState('')
  const [apartment,setApartment] = useState('')
  const [locality,setLocality] = useState('')
  const [state,setState] = useState('')
  const [country,setCountry] = useState('')
  const [pincode,setPincode] = useState('')
  const [property,setProperty] = useState('')
  const [bedrooms,setBedrooms] = useState('')
  const [bathRooms,setBathRooms] = useState('')
  const [squarefeet,setSquareFeet] = useState('')
  const [description,setDescription] = useState('')
  const [leaseDuration,setLeaseDuration] = useState('')
  const [heating,setHeating] = useState('')
  const [colling,setCooling] = useState('')
  const [repairQuality,setRepairQuality] = useState('')
  const [parkingArea,setParkingArea] = useState('')
  const [laundry,setLaundry] = useState('')
  const [rent,setRent] = useState('')

  const openStep3 = () => {
    setStep2Visible(false);
    setStep3Visible(true);
  };

  const openStep4 = () => {
    setStep3Visible(false);
    setStep4Visible(true);
  };

  const City = [
    {key: 'Hyderabad', value: 'Hyderabad'},
    {key: 'Guntur', value: 'Guntur'},
    {key: 'Kurnool', value: 'Kurnool'},
    {key: 'Nellore', value: 'Nellore'},
    {key: 'Vizag', value: 'Vizag'},
  ];

  const coolingType = [
    {key: 'Air Conditioner', value: 'Air Conditioner'},
    {key: 'Fan', value: 'Fan'},
    {key: 'Cooler', value: 'Cooler'},
  ];

  const heatingType = [
    {key: 'Forced Air', value: 'Forced Air'},
    {key: 'geyser', value: 'geyser'},
  ];

  const ParkingArea = [
    {key: 'Yes', value: 'Yes'},
    {key: 'No', value: 'No'},
  ];

  const RepairQuality = [
    {key: 'Yes', value: 'Yes'},
    {key: 'No', value: 'No'},
  ];

  const BedRooms = [
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
  ];

  const BathRooms = [
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
  ];

  const LeaseDuration = [
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
  ];

  const PropertyType = [
    {key: 'Home', value: 'Home'},
    {key: 'Villa', value: 'Villa'},
  ];

  const Laundry = [
    {key: 'Yes', value: 'Yes'},
    {key: 'No', value: 'No'},
  ];

    const validateStep1 = () => {
      if (city === '') {
        Alert.alert('Enter City');
      } else if (apartment === '') {
        Alert.alert('Enter Apartment');
      } else if (locality === '') {
        Alert.alert('Enter locality');
      } else if (state === '') {
        Alert.alert('Select State');
      } else if (country === '') {
        Alert.alert('Select Country');
      } else if (pincode === '') {
        Alert.alert('Enter Pincode');
      }else {
         setStep2Visible(false);
         setStep3Visible(true);
      }
    };

    const validateStep2 = () => {
      if (property === '') {
        Alert.alert('Select Property');
      } else if (bedrooms === '') {
        Alert.alert('Select How Many Bedrooms ');
      }
      else if (bathRooms === '') {
        Alert.alert('Select How Many Bathrooms ');
      }
      else if (squarefeet === '') {
        Alert.alert('Enter Square Feet');
      }
       else if (description === '') {
        Alert.alert('Enter Description');
      }
      else if(leaseDuration === ""){
        Alert.alert("Select Lease Duration")
      }
      else if(heating === ""){
        Alert.alert("Select Heat Type")
      }
      else if(colling === ""){
        Alert.alert("Select Cooling Type")
      }
      else if(repairQuality === ""){
        Alert.alert("Select Repair Quality")
      }
      else if(parkingArea === ""){
        Alert.alert("Select Parking Area")
      }
      else if(laundry === ""){
        Alert.alert("Select Laundry")
      }
      else if(rent === ""){
        Alert.alert("Enter rent")
      }
      else {
        setStep3Visible(false);
        setStep4Visible(true);
      }
    };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          getCurrentLocation();
        } else {
          setLocationError('Location permission denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
        setLocationError('Error requesting location permission');
      }
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        setLocationError(null);
      },
      error => {
        console.error('Error getting current location:', error);
        setLocationError('Error getting current location');
      },
    );
  };

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
            <TouchableOpacity
              onPress={() => navigation.navigate('MenuPageSeller')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
          </View>
        </View>
        {step2Visible && (
          <View>
            <View style={styles.listingInformationView}>
              <Text style={styles.listingText}>Listing Information</Text>
              <Text style={styles.stepText}>STEP 2 OF 4</Text>
            </View>

            <View style={styles.stepView}>
              <View style={styles.progressFormDirection}>
                <AntDesign name="checksquare" color="#073762" size={28} />
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
                <Octicons
                  name="square-fill"
                  color="#073762"
                  size={20}
                  style={styles.smallSquareView}
                />
                <Feather name="square" color="#073762" size={28} />
                <View style={styles.minusView1}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <Feather name="square" color="#073762" size={28} />
              </View>
              <View style={styles.progressStepsTextView}>
                <View>
                  <Text style={styles.basicDetailsText}>Basic Details</Text>
                  <View style={styles.flatAndditTextView}>
                    <Text style={styles.flatText}>
                      Flat Apartment Sale/Rent
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Sell')}>
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
                <MaterialIcons
                  name="arrow-right-alt"
                  size={26}
                  color="#073762"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.locationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.locatedText}>
                Where is your property located
              </Text>
              <Text style={styles.addBasicDetailsText}>Add Basic details</Text>
              <TouchableOpacity
                style={styles.locationButton}
                onPress={requestLocationPermission}>
                <MaterialIcons name="my-location" color="#073762" size={28} />
                <Text style={styles.pickMyLocationText}>Pick My Location</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.listingText1}>Listing Information</Text>
            <View style={styles.stepView}>
              <View style={styles.progressFormDirection}>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView1}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <Feather name="square" color="#073762" size={28} />
                <View style={styles.minusView1}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Octicons
                    name="square-fill"
                    color="#073762"
                    size={16}
                    style={styles.smallSquareView1}
                  />
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
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <View style={styles.propertyDetailsview}>
                    <Text style={styles.propertyDetailsText}>
                      Property Details
                    </Text>
                    <Text style={styles.step3Text}>Step3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.getHelpTextView}>
              <Text style={styles.lostText}>Lost or have trouble?</Text>
              <TouchableOpacity style={styles.getHelpView}>
                <Text style={styles.getHelpText}>{'     '}Get help</Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={26}
                  color="#073762"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.informationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.locatedText1}>Listing Information</Text>
              <Text style={styles.labelText}>City*</Text>
              <SelectList
                setSelected={setCity}
                data={City}
                boxStyles={styles.input}
                placeholder="Select your city"
                fontFamily="PlusJakartaSans j"
                save="value"
              />
              <Text style={styles.labelText}>Apartment / Society</Text>
              <TextInput
                placeholder="Enter your apartment/society"
                style={styles.input}
                placeholderTextColor="#00092980"
                onChangeText={setApartment}
                value={apartment}
              />
              <Text style={styles.labelText}>Locality</Text>
              <TextInput
                placeholder="Enter your locality"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setLocality}
                value={locality}
              />
              <Text style={styles.labelText}>State</Text>
              <TextInput
                placeholder="Enter State"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setState}
                value={state}
              />
              <Text style={styles.labelText}>Country</Text>
              <TextInput
                placeholder="Enter Country"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setCountry}
                value={country}
              />
              <Text style={styles.labelText}>Pincode</Text>
              <TextInput
                placeholder="Enter Pincode"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setPincode}
                value={pincode}
              />
              <View style={styles.residentialAndCommercialButtonView}>
                <TouchableOpacity style={styles.saveAsDraftButton}>
                  <Text style={styles.saveAsDraftsText}>Save as drafts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextStepButton}
                  onPress={validateStep1}>
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
            <View style={styles.listingInformationView}>
              <Text style={styles.listingText}>Listing Information</Text>
              <Text style={styles.stepText}>STEP 2 OF 4</Text>
            </View>
            <View style={styles.stepView}>
              <View style={styles.progressFormDirection}>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView2}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView1}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <Feather name="square" color="#073762" size={28} />
                <View style={styles.minusView3}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Octicons
                    name="square-fill"
                    color="#073762"
                    size={20}
                    style={styles.smallSquareView2}
                  />
                </View>
                <Feather name="square" color="#073762" size={28} />
              </View>
              <View style={styles.progressStepsTextView}>
                <View style={styles.editButtonView}>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText1}>Edit</Text>
                  </TouchableOpacity>
                  <View style={styles.propertyDetailsview1}>
                    <Text style={styles.propertyDetailsText}>
                      Property Details
                    </Text>
                    <Text style={styles.step3Text}>Step3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.getHelpTextView}>
              <Text style={styles.lostText}>Lost or have trouble?</Text>
              <TouchableOpacity style={styles.getHelpView}>
                <Text style={styles.getHelpText}>{'     '}Get help</Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={26}
                  color="#073762"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.informationView}>
              <TouchableOpacity style={styles.backButton}>
                <Fontisto name="arrow-left-l" size={16} color="#073762" />
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
              <Text style={styles.locatedText1}>Listing Information</Text>
              <Text style={styles.labelText}>Property Type*</Text>
              <SelectList
                setSelected={setProperty}
                data={PropertyType}
                boxStyles={styles.input}
                placeholder="Select type"
              />
              <Text style={styles.labelText}>Bedrooms</Text>
              <SelectList
                setSelected={setBedrooms}
                data={BedRooms}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="How Many beds"
                save="value"
              />
              <Text style={styles.labelText}>Baths</Text>
              <SelectList
                setSelected={setBathRooms}
                data={BathRooms}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="How Many baths"
                save="value"
              />
              <Text style={styles.labelText}>Square Feet</Text>
              <TextInput
                placeholder="Sq ft"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setSquareFeet}
                value={squarefeet}
              />
              <Text style={styles.labelText}>Select Amenitites</Text>
              <View style={styles.amenititesView}>
                <View style={styles.amenititesDirectionView}>
                  <Amenitites />
                </View>
                <TouchableOpacity style={styles.addAmenityButton}>
                  <Entypo name="plus" color="#073762" size={18} />
                  <Text style={styles.amenityText}>Add amenity</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.labelText}>Description</Text>
              <TextInput
                placeholder="Tell us about your home here"
                placeholderTextColor="#00092980"
                style={styles.input}
                onChangeText={setDescription}
                value={description}
              />
              <Text style={styles.labelText}>Lease Duration</Text>
              <SelectList
                setSelected={setLeaseDuration}
                data={LeaseDuration}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select duration"
                save="value"
              />
              <Text style={styles.labelText}>Heating</Text>
              <SelectList
                setSelected={setHeating}
                data={heatingType}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select heating"
                save="value"
              />
              <Text style={styles.labelText}>Cooling</Text>
              <SelectList
                setSelected={setCooling}
                data={coolingType}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select Cooling"
                save="value"
              />
              <Text style={styles.labelText}>Repair Quality</Text>
              <SelectList
                setSelected={setRepairQuality}
                data={RepairQuality}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select Repair Quality"
                save="value"
              />
              <Text style={styles.labelText}>Parking Area</Text>
              <SelectList
                setSelected={setParkingArea}
                data={ParkingArea}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select parking Area Yes or No"
                save="value"
              />
              <Text style={styles.labelText}>Laundry</Text>
              <SelectList
                setSelected={setLaundry}
                data={Laundry}
                boxStyles={styles.input}
                fontFamily="PlusJakartaSans j"
                placeholder="Select Laundry"
                save="value"
              />
              <Text style={styles.labelText}>Rent</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Enter your rented price"
                  placeholderTextColor="#00092980"
                  style={styles.input1}
                  onChangeText={setRent}
                  value={rent}
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
                  onPress={validateStep2}>
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
            <View style={styles.listingInformationView}>
              <Text style={styles.listingText}>Listing Information</Text>
              <Text style={styles.stepText}>STEP 2 OF 4</Text>
            </View>
            <View style={styles.stepView}>
              <View style={styles.progressFormDirection}>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView2}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView1}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <AntDesign name="checksquare" color="#073762" size={28} />
                <View style={styles.minusView3}>
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                  <Foundation name="minus" color="#073762" size={12} />
                </View>
                <Feather name="square" color="#073762" size={28} />
                <Octicons
                  name="square-fill"
                  color="#073762"
                  size={20}
                  style={styles.smallSquareView3}
                />
              </View>
              <View style={styles.progressStepsTextView}>
                <View style={styles.editButtonView}>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText1}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
                    <Text style={styles.editText1}>Edit</Text>
                  </TouchableOpacity>
                  <View style={styles.propertyDetailsview1}>
                    <Text style={styles.propertyDetailsText}>
                      Photo & Video Upload
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.getHelpTextView}>
              <Text style={styles.lostText}>Lost or have trouble?</Text>
              <TouchableOpacity style={styles.getHelpView}>
                <Text style={styles.getHelpText}>{'     '}Get help</Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={26}
                  color="#073762"
                />
              </TouchableOpacity>
            </View>
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
  minusView2: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    justifyContent: 'space-between',
    width: responsiveWidth(6),
  },
  minusView3: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    justifyContent: 'space-between',
    width: responsiveWidth(28),
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
    fontFamily: 'PlusJakartaSans m',
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
    fontSize: responsiveFontSize(2),
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
    margin: 3,
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
  addAmenityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    left: responsiveWidth(2.8),
    marginTop: responsiveHeight(1),
  },
  amenityText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.5),
    left: responsiveWidth(1.8),
  },
  smallSquareView: {
    position: 'absolute',
    marginLeft: responsiveWidth(40.5),
    marginTop: responsiveHeight(0.5),
  },
  smallSquareView1: {
    position: 'absolute',
    marginLeft: responsiveWidth(-6),
    marginTop: responsiveHeight(0.8),
  },
  propertyDetailsview: {
    // position:'absolute',
    marginLeft: responsiveWidth(26),
  },
  propertyDetailsText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.4),
  },
  step3Text: {
    color: '#a8a8a8',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1),
  },
  smallSquareView2: {
    position: 'absolute',
    marginLeft: responsiveWidth(-6.4),
    marginTop: responsiveHeight(0.8),
  },
  editButtonView: {
    flexDirection: 'row',
  },
  propertyDetailsview1: {
    marginLeft: responsiveWidth(10),
  },
  editText1: {
    color: '#2289ff',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'PlusJakartaSans a',
    marginLeft: responsiveWidth(12),
  },
  smallSquareView3: {
    position: 'absolute',
    marginLeft: responsiveWidth(72.8),
    marginTop: responsiveHeight(0.5),
  },
});
