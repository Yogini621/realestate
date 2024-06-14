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
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SgnupVerificationModal from './SgnupVerificationModal';

interface UserDetails {
  name: string;
  email: string;
  password: string;
  contact: string;
}

interface Props {
  navigation: any;
}
const SignupPage: React.FC<Props> = ({navigation}) => {
  const [isconfirmPasswordsecure, setIsConfirmPasswordSecure] =
    useState<boolean>(false);
  const [otp,setOtp] = useState('')

  const handleConfirmPAssword = () => {
    setIsConfirmPasswordSecure(!isconfirmPasswordsecure);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be contain 3 letters')
      .matches(/^[A-Za-z]+$/, 'First Name must contain only alphabets')
      .required('First Name is required'),
    contact: Yup.string()
      .required('Phone no is required')
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'inavalid phone number'),
    email: Yup.string()
      .email('Invalid email address format')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email',
      )
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters ')

      .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Invalid Password')
      .required('Password required'),
  });

   const ValidateOtp = (enteredOtp:string) => {
    if(otp === enteredOtp){
      navigation.navigate("HomePage")
    }
   };

  const handleFormSubmit = (values: UserDetails) => {
    console.log('values', values);
    const userData = {
      email: values.email,
      password: values.password,
      name: values.name,
      contact: values.contact,
    };
    const user = AsyncStorage.setItem('userData', JSON.stringify(values));
  const otp = Math.floor(Math.random() * 999999 + 100000).toString();
  console.log(otp);
  setOtp(otp);
  setModalVisible(true);  
1098};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View style={styles.imageView}>
            <Image source={require('../Images/Vector1.png')} />
          </View>
          <Text style={styles.welcomeText}>Welcome to E-Property</Text>
          <Text style={styles.detailsText}>
            Welcome! Please enter your details.
          </Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              contact: '',
            }}
            enableReinitialize={true}
            validationSchema={ValidationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values: UserDetails) => {
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
                <Text style={styles.labelText}>Name</Text>
                <TextInput
                  placeholder="Full name"
                  style={styles.input}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholderTextColor="#9b9b9b"
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name} </Text>
                )}
                <Text style={styles.labelText}>Phone</Text>
                <TextInput
                  placeholder="phone"
                  style={styles.input}
                  value={values.contact}
                  onChangeText={handleChange('contact')}
                  onBlur={handleBlur('contact')}
                  placeholderTextColor="#9b9b9b"
                />
                {touched.name && errors.contact && (
                  <Text style={styles.errorText}>{errors.contact} </Text>
                )}
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholderTextColor="#9b9b9b"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email} </Text>
                )}
                <Text style={styles.labelText}>Password</Text>
                <View style={styles.passwordView}>
                  <TextInput
                    placeholder="Enter password"
                    style={styles.input1}
                    secureTextEntry={!isconfirmPasswordsecure}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholderTextColor="#9b9b9b"
                  />
                  <TouchableOpacity
                    style={styles.toogleButton}
                    onPress={handleConfirmPAssword}>
                    <Feather
                      name={!isconfirmPasswordsecure ? 'eye-off' : 'eye'}
                      size={18}
                      color="#9fc5e9"
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password} </Text>
                )}
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>
                {modalVisible && (
                  <SgnupVerificationModal
                    modalVisible={true}
                    email={values.email}
                    closemodal={() => setModalVisible(false)}
                    otp={otp}
                    otpValdation={ValidateOtp}
                  />
                )}
              </View>
            )}
          </Formik>
          <View style={styles.alreadyHaveAccount}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SigninPage')}>
              <Text style={styles.loginText}> Login</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../Images/house1.png')} />
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  welcomeText: {
    color: '#000929',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(8),
    marginTop: responsiveHeight(1),
  },
  detailsText: {
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
    left: responsiveWidth(8),
    marginBottom: responsiveHeight(2),
  },
  labelText: {
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
    color: '#000929',
    left: responsiveWidth(8),
    marginTop: responsiveHeight(1),
  },
  input: {
    height: responsiveHeight(6),
    backgroundColor: '#f4faff',
    borderWidth: 1,
    width: responsiveWidth(80),
    borderRadius: 8,
    alignSelf: 'center',
    borderColor: '#9fc5e9',
    padding: 10,
    marginTop: responsiveHeight(1),
    fontFamily: 'PlusJakartaSans j',
    color: '#9b9b9b',
  },
  signupButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(80),
    height: responsiveHeight(4.8),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(6),
  },
  signUpButtonText: {
    fontFamily: 'PlusJakartaSans j',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
  },
  alreadyHaveAccount: {
    flexDirection: 'row',
    left: responsiveWidth(10.4),
    marginTop: responsiveHeight(2),
  },
  alreadyText: {
    fontFamily: 'PlusJakartaSans j',
    color: '#6c727f',
    fontSize: responsiveFontSize(1.6),
  },
  loginText: {
    fontFamily: 'PlusJakartaSans j',
    color: '#000929',
    fontSize: responsiveFontSize(1.6),
  },
  passwordView: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    width: responsiveWidth(80),
    backgroundColor: '#f4faff',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
  },
  toogleButton: {
    padding: 8,
    left: 20,
  },
  input1: {
    height: responsiveHeight(6),
    width: '80%',
    backgroundColor: '#f4faff',
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans j',
  },
  errorText: {
    fontFamily: 'PlusJakartaSans j',
    color: '#6c727f',
    fontSize: responsiveFontSize(1.6),
    left: responsiveWidth(10.4),
  },
  container1: {
    backgroundColor: 'gray',
  },
});
