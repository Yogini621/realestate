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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
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
  const [step1Data, setStep1Data] = useState<Step1Data>({
    name: '',
    dateOfBirth: '',
    email: '',
    contact: '',
    income: '',
    occupants: '',
    moveInDate: '',
  });

  const [step2Data, setStep2Data] = useState<Step2Data>({
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });
  const [step3Data, setStep3Data] = useState<Step3Data>({vehicleName: ''});
  const [step4Data, setStep4Data] = useState<Step4Data>({aadhar: ''});
  const [vehicleDescriptionView,setVehicleDescriptionView] = useState(false)


  const ValidationSchema = Yup.object().shape({
  });
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
        <ProgressSteps>
          <ProgressStep label="Personal Info">
            <Text style={styles.fillText}>Fill The Application</Text>
            <View style={styles.informationView}>
              <Text style={styles.informationText}>
                Please filling in your personal, address, vehicle and Aadhar
                information
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Formik
                initialValues={step1Data}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                  setStep1Data(values);
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View>
                    <View>
                      <Text style={styles.personalDetailsText}>
                        Personal Details
                      </Text>

                      <Text style={styles.labelText}>Full name</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="Enter full name"
                        placeholderTextColor="#9b9b9b"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                      />

                      {touched.name && errors.name && (
                        <Text>{errors.name}</Text>
                      )}

                      <Text style={styles.labelText}>Date of Birth</Text>

                      <View style={styles.inputView}>
                        <TextInput
                          style={styles.input1}
                          placeholder="DD/MM/YYYY"
                          placeholderTextColor="#9b9b9b"
                          onChangeText={handleChange('dateOfBirth')}
                          onBlur={handleBlur('dateOfBirth')}
                          value={values.dateOfBirth}
                        />

                        <Ionicons
                          name="calendar-outline"
                          size={20}
                          color="#9b9b9b"
                          style={styles.icon}
                        />
                      </View>

                      {touched.dateOfBirth && errors.dateOfBirth && (
                        <Text>{errors.dateOfBirth}</Text>
                      )}

                      <Text style={styles.labelText}>Email</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="hi@example.com"
                        placeholderTextColor="#9b9b9b"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />

                      {touched.email && errors.email && (
                        <Text>{errors.email}</Text>
                      )}

                      <Text style={styles.labelText}>Phone Number</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="+91 XXXX XXX XXX "
                        placeholderTextColor="#9b9b9b"
                        onChangeText={handleChange('contact')}
                        onBlur={handleBlur('contact')}
                        value={values.contact}
                      />

                      {touched.contact && errors.contact && (
                        <Text>{errors.contact}</Text>
                      )}

                      <Text style={styles.labelText}>
                        Gross Annual Employment Income
                      </Text>

                      <TextInput
                        style={styles.input}
                        placeholder="e.g.50000"
                        placeholderTextColor="#9b9b9b"
                        onChangeText={handleChange('income')}
                        onBlur={handleBlur('income')}
                        value={values.income}
                      />

                      {touched.income && errors.income && (
                        <Text>{errors.income}</Text>
                      )}

                      <Text style={styles.labelText}>Occupants</Text>

                      <TextInput
                        style={styles.input}
                        placeholder="Enter Occupants"
                        placeholderTextColor="#9b9b9b"
                        onChangeText={handleChange('occupants')}
                        onBlur={handleBlur('occupants')}
                        value={values.occupants}
                      />

                      {touched.occupants && errors.occupants && (
                        <Text>{errors.occupants}</Text>
                      )}

                      <Text style={styles.labelText}>Move in Date</Text>

                      <View style={styles.inputView}>
                        <TextInput
                          style={styles.input1}
                          placeholder="DD/MM/YYYY"
                          placeholderTextColor="#9b9b9b"
                          onChangeText={handleChange('moveInDate')}
                          onBlur={handleBlur('moveInDate')}
                          value={values.moveInDate}
                        />

                        <Ionicons
                          name="calendar-outline"
                          size={20}
                          color="#9b9b9b"
                          style={styles.icon}
                        />
                      </View>

                      {touched.moveInDate && errors.moveInDate && (
                        <Text>{errors.moveInDate}</Text>
                      )}
                    </View>
                  </View>
                )}
              </Formik>
            </View>
            <View style={styles.line} />
          </ProgressStep>
          <ProgressStep label="Address Info">
            <Text style={styles.fillText}>Fill The Application</Text>
            <View style={styles.informationView}>
              <Text style={styles.informationText}>
                Please filling in your personal, address, vehicle and Aadhar
                information
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Formik
                initialValues={step2Data}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                  setStep2Data(values);
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View>
                    <Text style={styles.personalDetailsText}>Address</Text>
                    <Text style={styles.labelText}> Enter Address</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="e.g.142 Risse Street"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                    />

                    {touched.address && errors.address && (
                      <Text>{errors.address}</Text>
                    )}

                    <Text style={styles.labelText}>City</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Enter city"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values.city}
                    />

                    {touched.city && errors.city && <Text>{errors.city}</Text>}

                    <Text style={styles.labelText}>State</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Select state"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      value={values.state}
                    />

                    {touched.state && errors.state && (
                      <Text>{errors.state}</Text>
                    )}

                    <Text style={styles.labelText}>Pincode</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Enter pin Code"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('pincode')}
                      onBlur={handleBlur('pincode')}
                      value={values.pincode}
                    />

                    {touched.pincode && errors.pincode && (
                      <Text>{errors.pincode}</Text>
                    )}

                    <Text style={styles.labelText}>Country</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Select country"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('country')}
                      onBlur={handleBlur('country')}
                      value={values.country}
                    />

                    {touched.country && errors.country && (
                      <Text>{errors.country}</Text>
                    )}
                  </View>
                )}
              </Formik>
            </View>
            <View style={styles.line} />
          </ProgressStep>
          <ProgressStep label="Vehicle Info">
            <Text style={styles.fillText}>Fill The Application</Text>
            <View style={styles.informationView}>
              <Text style={styles.informationText}>
                Please filling in your personal, address, vehicle and Aadhar
                information
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Formik
                initialValues={step3Data}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                  setStep3Data(values);
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View>
                    <View style={styles.adharNoView}>
                      <Text style={styles.personalDetailsText}>Vehicles</Text>
                      <TouchableOpacity
                        onPress={() => setVehicleDescriptionView(true)}>
                        <AntDesign
                          name="exclamationcircle"
                          color="#9fc5e9"
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {vehicleDescriptionView && (
                      <View style={styles.vehicleDescriptionView}>
                        <Text style={styles.vehicleDescriptionText}>
                          If you own any vehicles that will be on the property,
                          please enter them here.
                        </Text>
                      </View>
                    )}
                    <Text style={styles.labelText}>Vehicle Names</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="e.g.Benz Car,Kawasi Bike"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('vehicleName')}
                      onBlur={handleBlur('vehicleName')}
                      value={values.vehicleName}
                    />

                    {touched.vehicleName && errors.vehicleName && (
                      <Text>{errors.vehicleName}</Text>
                    )}
                  </View>
                )}
              </Formik>
            </View>
            <View style={styles.line} />
          </ProgressStep>
          <ProgressStep label="Documents">
            <Text style={styles.fillText}>Fill The Application</Text>
            <View style={styles.informationView}>
              <Text style={styles.informationText}>
                Please filling in your personal, address, vehicle and Aadhar
                information
              </Text>
            </View>
            <View style={styles.detailsView}>
              <Formik
                initialValues={step4Data}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                  setStep4Data(values);
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View>
                    <View style={styles.adharNoView}>
                      <Text style={styles.personalDetailsText}>Aadhar No</Text>
                      <TouchableOpacity
                        onPress={() => setVehicleDescriptionView(true)}>
                        <AntDesign
                          name="exclamationcircle"
                          color="#9fc5e9"
                          size={18}
                          style = {{left:responsiveWidth(2)}}
                        />
                      </TouchableOpacity>
                    </View>
                    {vehicleDescriptionView && (
                      <View style={styles.vehicleDescriptionView}>
                        <Text style={styles.vehicleDescriptionText}>
                          Aadhaar numbers can be used to verify the identity of
                          the parties involved in the property transaction, such
                          as the buyer, seller, or witnesses.
                        </Text>
                      </View>
                    )}
                    <Text style={styles.labelText}>Aadhar</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="e.g.630 851 3255"
                      placeholderTextColor="#9b9b9b"
                      onChangeText={handleChange('aadhar')}
                      onBlur={handleBlur('aadhar')}
                      value={values.aadhar}
                    />
                    {touched.aadhar && errors.aadhar && (
                      <Text>{errors.aadhar}</Text>
                    )}
                  </View>
                )}
              </Formik>
            </View>
            <View style={styles.line} />
          </ProgressStep>
        </ProgressSteps>

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
export default TenantApplicationForm
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
  stepText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveScreenFontSize(1.6),
    alignSelf: 'flex-end',
    right: responsiveWidth(5.8),
    marginTop: responsiveHeight(4),
  },
  stepView: {
    backgroundColor: '#e8f2fa',
    height: responsiveHeight(13),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
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
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2.8),
  },
  informationText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: responsiveHeight(3.4),
  },
  personalDetailsText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    marginBottom: responsiveHeight(1),
  },
  detailsView: {
    // height: responsiveHeight(104),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    flex: 1,
    padding: 20,
  },
  labelText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(2.2),
  },
  input: {
    width: responsiveWidth(84),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
    height: responsiveHeight(6.6),
    padding: 10,
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  line: {
    height: responsiveHeight(0.3),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveHeight(2),
  },
  continueButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(6.2),
    borderRadius: 6,
    marginTop: responsiveHeight(2.8),
  },
  continueButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  privacyView: {
    // marginTop: responsiveHeight(6.8),
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
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(84),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
    height: responsiveHeight(6.6),
  },
  input1: {
    width: responsiveWidth(64),
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    padding: 10,
    // backgroundColor: 'green',
  },
  icon: {
    right: responsiveWidth(4),
  },
  squareView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    right: responsiveWidth(3),
    marginBottom: responsiveWidth(8),
  },
  lineView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    justifyContent: 'space-between',
    width: responsiveWidth(30),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
  minus: {
    color: '#073762',
    fontSize: responsiveFontSize(4),
  },
  lineView1: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    justifyContent: 'space-between',
    width: responsiveWidth(6.8),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
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
    // left: responsiveWidth(3.2),
    marginTop: responsiveHeight(1.4),
    alignSelf: 'center',
  },
  adharNoView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(26),
    justifyContent: 'space-between',
  },
  vehicleDescriptionView: {
    backgroundColor: '#100a55',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 10,
    width:responsiveWidth(62),
    // position:'absolute',
    // left:0
    bottom:responsiveHeight(15),
    left:responsiveWidth(24),
    position:'absolute',
    padding:12
    // height:responsiveHeight(14)
  },
  vehicleDescriptionText:{
    color:'white',
    fontSize:responsiveFontSize(1.7),
    lineHeight:21
  }
});