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
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import * as Yup from 'yup';

interface Props {
  navigation: any;
}

interface Details {
  name: string;
  dateOfBirth: string;
  email: string;
  contact: string;
  income: string;
  occupation: string;
  moveDate: string;
}

const TenentApplicationForm: React.FC<Props> = ({navigation}) => {
  const ValidationSchema = Yup.object().shape({});

  const handleFormSubmit = (values: Details) => {};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <FontAwesome5 name="grip-lines" size={20} />
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
        <Text style={styles.stepText}>STEP 1 OF 4</Text>
        <View style={styles.stepView}>
          <View style={styles.squareView}>
            <TouchableOpacity>
              <Feather name="square" size={28} color="#073762" />
            </TouchableOpacity>
            <View style={styles.lineView}>
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
            </View>
            <TouchableOpacity>
              <Feather name="square" size={28} color="#073762" />
            </TouchableOpacity>
            <View style={styles.lineView1}>
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
            </View>
            <TouchableOpacity>
              <Feather name="square" size={28} color="#073762" />
            </TouchableOpacity>
            <View style={styles.lineView1}>
              <FontAwesome name="minus" size={13} color="#073762" />
              <FontAwesome name="minus" size={13} color="#073762" />
            </View>
            <TouchableOpacity>
              <Feather name="square" size={28} color="#073762" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.fillText}>Fill The Application</Text>
        <View style={styles.informationView}>
          <Text style={styles.informationText}>
            Please filling in your personal, address, vehicle and Aadhar
            information
          </Text>
        </View>

        <Formik
          initialValues={{
            name: '',
            email: '',
            contact: '',
            occupation: '',
            dateOfBirth: '',
            income: '',
            moveDate: '',
          }}
          enableReinitialize={true}
          validationSchema={ValidationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values: Details) => {
            handleFormSubmit(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View>
              <View style={styles.detailsView}>
                <Text style={styles.personalDetailsText}>Personal Details</Text>
                <Text style={styles.labelText}>Full name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter full name"
                  placeholderTextColor="#9b9b9b"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {touched.name && errors.name && <Text>{errors.name}</Text>}
                <Text style={styles.labelText}>Date of Birth</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input1}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="#9b9b9b"
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={handleBlur('dateOfBirth')}
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
                />
                {touched.email && errors.email && <Text>{errors.email}</Text>}
                <Text style={styles.labelText}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+91 XXXX XXX XXX "
                  placeholderTextColor="#9b9b9b"
                  onChangeText={handleChange('contact')}
                  onBlur={handleBlur('contact')}
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
                />
                {touched.income && errors.income && (
                  <Text>{errors.income}</Text>
                )}
                <Text style={styles.labelText}>Occupants</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Occupants"
                  placeholderTextColor="#9b9b9b"
                  onChangeText={handleChange('occupation')}
                  onBlur={handleBlur('occupation')}
                />
                {touched.occupation && errors.occupation && (
                  <Text>{errors.occupation}</Text>
                )}
                <Text style={styles.labelText}>Move in Date</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input1}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="#9b9b9b"
                    onChangeText={handleChange('moveDate')}
                    onBlur={handleBlur('moveDate')}
                  />
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#9b9b9b"
                    style={styles.icon}
                  />
                </View>
                {touched.moveDate && errors.moveDate && (
                  <Text>{errors.moveDate}</Text>
                )}
              </View>
              <View style={styles.line} />
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
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

export default TenentApplicationForm;

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
    width: responsiveWidth(72),
    alignItems: 'center',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  backText: {
    color: '#073762',
    fontSize: responsiveFontSize(2.4),
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
    backgroundColor: '#f4faff',
    height: responsiveHeight(13),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: responsiveHeight(2),
  },
  informationText: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: responsiveHeight(3),
  },
  personalDetailsText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(3.6),
    marginBottom: responsiveHeight(2),
  },
  detailsView: {
    height: responsiveHeight(104),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  labelText: {
    color: '#000000',
    left: responsiveWidth(4),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.9),
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
    marginTop: responsiveHeight(6.8),
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
    marginTop: responsiveHeight(1),
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    padding: 10,
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
});
