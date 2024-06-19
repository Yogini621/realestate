import {
  Image,
  SafeAreaView,
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
import * as Yup from 'yup';
import {Formik} from 'formik';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  navigation: any;
}

interface UserDetails {
  password: string;
  confirmPassword: string;
}

const ForgotPassword2: React.FC<Props> = ({navigation}) => {
  const [isconfirmPasswordsecure, setIsConfirmPasswordSecure] =
    useState<boolean>(false);

  const handleConfirmPAssword = () => {
    setIsConfirmPasswordSecure(!isconfirmPasswordsecure);
  };

  const ValidationSchema = Yup.object().shape({
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
    confirmPassword: Yup.string()
      .min(8, 'Must be at least 8 characters ')

      .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Invalid Password')
      .required('Password required'),
  });

  const handleFormSubmit = (values: UserDetails) => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('../Images/Vector1.png')} />
      </View>
      <Text style={styles.welcomeText}>Forgot Password</Text>
      <Text style={styles.detailsText}>
        Enter the new password and confirm password
      </Text>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
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
            <Text style={styles.labelText}>Password</Text>
            <View style={styles.passwordView}>
              <TextInput
                placeholder="Enter New Password"
                style={styles.input1}
                secureTextEntry={!isconfirmPasswordsecure}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <TouchableOpacity
                style={styles.toogleButton}
                onPress={handleConfirmPAssword}>
                <Feather
                  name={!isconfirmPasswordsecure ? 'eye-off' : 'eye'}
                  size={16}
                  color="#9fc5e9"
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password} </Text>
            )}

            <Text style={styles.labelText}>Repeat New Password</Text>
            <View style={styles.passwordView}>
              <TextInput
                placeholder="Repeat New Password"
                style={styles.input1}
                secureTextEntry={!isconfirmPasswordsecure}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPasswordghg')}
              />
              <TouchableOpacity
                style={styles.toogleButton}
                onPress={handleConfirmPAssword}>
                <Feather
                  name={!isconfirmPasswordsecure ? 'eye-off' : 'eye'}
                  size={16}
                  color="#9fc5e9"
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password} </Text>
            )}
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signUpButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.image}>
        <Image source={require('../Images/house1.png')} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword2;

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
  forgotPasswordText: {
    fontFamily: 'PlusJakartaSans j',
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    left: responsiveWidth(10.4),
  },
  errorTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  image: {
    position: 'relative',
    marginTop: 110,
  },
});
