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

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SelectList} from 'react-native-dropdown-select-list';

interface Props {
  navigation: any;
  route: any;
}
interface Step1Data {
  name: string;
  dateOfBirth: string;
  email: string;
  contact: string;
  income: string;
  occupants: string;
  moveInDate: string;
}
interface Step2Data {
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}
interface Step3Data {
  vehicleName: string;
}
interface Step4Data {
  aadhar: string;
}

const TenantApplicationForm: React.FC<Props> = ({navigation, route}) => {
  const {item} = route.params;
  const [step4Data, setStep4Data] = useState<Step4Data>({aadhar: ''});
  const [step1Visible, setStep1Visible] = useState(false);
  const [step2Visible, setStep2Visible] = useState(true);
  const [step3Visible, setStep3Visible] = useState(false);
  const [step4Visible, setStep4Visible] = useState(false);
  const [vehicleDescriptionView, setVehicleDescriptionView] = useState(false);
  const [selected, setSelected] = useState('');

  const data = [
    {key: 'Canada', value: 'Canada'},
    {key: 'England', value: 'England'},
    {key: 'Pakistan', value: 'Pakistan'},
    {key: 'India', value: 'India'},
    {key: 'NewZealand', value: 'NewZealand'},
  ];

  const ValidationSchema = Yup.object().shape({});
  const handleFormSubmit = (
    values: Step1Data & Step2Data & Step3Data & Step4Data,
  ) => {
    console.log(values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificationList')}>
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
        <View style={styles.backToView}>
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={24} color="#073762" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backText}>Back to 2Bedrooms 2Baths</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.tenantApplicationText}>
          Tenant Application Form
        </Text>
        <View style={styles.applicationView}>
          <Text style={styles.applicationText}>
            This application will not be processed unless it is filled out
            completely
          </Text>
        </View>
        <View style={styles.propertyView}>
          <View style={styles.propertyDirectionView}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.descriptionView}>
              <Text style={styles.rentText}>
                ${item.rent} <Text style={styles.monthText}>/month</Text>
              </Text>
              <Text style={styles.roomsText}>{item.rooms}</Text>
              <Text style={styles.locationText}>{item.location} </Text>
              <View style={styles.seperator} />
              <View style={styles.iconsView}>
                <View style={styles.carIconView}>
                  <AntDesign name="car" color="#073762" size={13} />
                  <Text style={styles.numberText}>3 Beds</Text>
                </View>
                <View style={styles.carIconView}>
                  <FontAwesome name="bathtub" color="#073762" size={13} />
                  <Text style={styles.numberText}>2 Bathrooms</Text>
                </View>
                <View style={styles.carIconView}>
                  <FontAwesome name="bathtub" color="#073762" size={13} />
                  <Text style={styles.numberText}>6x7.5 m²</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.stepText}>STEP 2 OF 4</Text>
        {step2Visible && (
          <View>
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
                      Flat Apartment Sale/Rent
                    </Text>
                    <TouchableOpacity>
                      <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.fillText}>Fill The Application</Text>
            <View style={styles.informationView}>
              <Text style={styles.informationText}>
                Please filling in your personal, address, vehicle and Aadhar
                information
              </Text>
            </View>
            <View style={styles.informationView}>
              <Text style={styles.locatedText1}>Personal Details</Text>
              <Text style={styles.labelText}>Full name</Text>
              <TextInput
                placeholder="Enter full name"
                style={styles.input}
                placeholderTextColor="#00092980"
              />
              <Text style={styles.labelText}>Date of Birth</Text>
              <TextInput
                placeholder="DD/MM/YYYY"
                style={styles.input}
                placeholderTextColor="#00092980"
              />
              <Text style={styles.labelText}>Email</Text>
              <TextInput
                placeholder="hi@example.com"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>Phone Number</Text>
              <TextInput
                placeholder="+91 XXXX XXX XXX"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>
                Gross Annual Employment Income
              </Text>
              <TextInput
                placeholder="e.g.50000"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>Occupants</Text>
              <TextInput
                placeholder="Enter Occupants"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <Text style={styles.labelText}>Move in Date</Text>
              <TextInput
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#00092980"
                style={styles.input}
              />
              <View style={styles.spaceView} />
            </View>
            <View style={styles.line} />
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.privacyView}>
          <Image source={require('../Images/Vector1.png')} />
          <View style={styles.dot} />
          <Text style={styles.termsText}>Terms</Text>
          <View style={styles.dot} />
          <Text style={styles.termsText}>Privacy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TenantApplicationForm;
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
  backToView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(68.8),
    alignItems: 'center',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2.8),
  },
  backText: {
    color: '#073762',
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'PlusJakartaSans a',
  },
  tenantApplicationText: {
    color: '#000000',
    fontSize: responsiveScreenFontSize(3.8),
    fontFamily: 'PlusJakartaSans a',
    textAlign: 'center',
    marginTop: responsiveHeight(3),
  },
  applicationView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  applicationText: {
    color: '#9b9b9b',
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans j',
  },
  propertyView: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4.8),
    borderColor: '#9fc5e9',
  },
  image: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  descriptionView: {
    borderWidth: 1,
    width: responsiveWidth(50),
    borderRadius: 10,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    height: responsiveWidth(36.6),
    borderColor: '#9fc5e9',
  },
  propertyDirectionView: {
    flexDirection: 'row',
  },
  rentText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  monthText: {
    color: '#00092980',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  rentPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomsText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.2),
    left: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  locationText: {
    color: '#666666',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.1),
    left: responsiveWidth(4),
    marginTop: responsiveHeight(1.4),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(42),
    backgroundColor: '#e0def7',
    alignSelf: 'center',
    marginTop: responsiveHeight(1.8),
  },
  carIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(1),
    fontSize: responsiveFontSize(1),
    color: '#394150',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(42),
    marginTop: responsiveHeight(1.4),
    alignSelf: 'center',
  },
  privacyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: responsiveWidth(6.8),
    width: responsiveWidth(72),
    alignItems: 'center',
    marginBottom: responsiveHeight(4.8),
  },
  dot: {
    height: 2,
    width: 2,
    borderRadius: 1,
    backgroundColor: '#9b9b9b',
  },
  termsText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
  fillText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(6),
    marginTop: responsiveHeight(4),
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
    borderWidth: 1,
    borderColor: '#9fc5e9',
  },
  informationText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: responsiveHeight(3.4),
  },
  stepText: {
    color: '#a4aeb4',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(4.8),
    alignSelf: 'flex-end',
    right: responsiveWidth(4),
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
  locatedText1: {
    left: responsiveWidth(4),
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(2),
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
  line: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  spaceView: {
    margin: 10,
  },
  continueButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(6),
  },
  continueText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
});
