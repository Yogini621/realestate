import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Formik} from 'formik';
import * as Yup from 'yup';

interface Props {
  modalVisible: boolean;
  email: string;
  closemodal: () => void;
  otp: string;
  otpValdation: (otp: string) => void;
}

const SignupVerificationModal = (props: Props) => {
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);
  const input5Ref = useRef<TextInput>(null);
  const input6Ref = useRef<TextInput>(null);

  const ValidationSchema = Yup.object().shape({
    otp: Yup.string()
      .min(6, 'OTP must contain 6 characters')
      .required('OTP is required'),
  });

  return (
    <View style={styles.abcd}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.modalView}>
          <View style={styles.crossIconView}>
            <Text style={styles.verifyText}>Verify Your Email</Text>

            <TouchableOpacity onPress={props.closemodal}>
              <Entypo name="cross" color="black" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.line} />
          <View style={styles.emailTextView}>
            <Text style={styles.sendText}>
              We have sent a code to your mail
            </Text>

            <View style={styles.emailView}>
              <Text style={styles.emailText}>{props.email} </Text>

              <TouchableOpacity>
                <Text style={styles.changeEmailText}>Change email</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={[
              styles.emailText,
              {textAlign: 'center', marginTop: responsiveHeight(2)},
            ]}>
            Enter code received on your registered email
          </Text>

          <Formik
            initialValues={{otp: ''}}
            validationSchema={ValidationSchema}
            onSubmit={values => {
              props.otpValdation(values.otp);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              errors,
              values,
            }) => (
              <>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => {
                      handleChange('otp')(text);
                      if (text !== '') input2Ref.current?.focus();
                    }}
                    onBlur={handleBlur('otp')}
                    value={values.otp[0] || ''}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder=""
                    ref={input2Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => {
                      handleChange('otp')(values.otp.slice(0, 1) + text);
                      if (text !== '') input3Ref.current?.focus();
                    }}
                    onBlur={handleBlur('otp')}
                    value={values.otp[1] || ''}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    ref={input3Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => {
                      handleChange('otp')(values.otp.slice(0, 2) + text);
                      if (text !== '') input4Ref.current?.focus();
                    }}
                    onBlur={handleBlur('otp')}
                    value={values.otp[2] || ''}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    ref={input4Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => {
                      handleChange('otp')(values.otp.slice(0, 3) + text);
                      if (text !== '') input5Ref.current?.focus();
                    }}
                    onBlur={handleBlur('otp')}
                    value={values.otp[3] || ''}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    ref={input5Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text => {
                      handleChange('otp')(values.otp.slice(0, 4) + text);
                      if (text !== '') input6Ref.current?.focus();
                    }}
                    onBlur={handleBlur('otp')}
                    value={values.otp[4] || ''}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    ref={input6Ref}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={text =>
                      handleChange('otp')(values.otp.slice(0, 5) + text)
                    }
                    onBlur={handleBlur('otp')}
                    value={values.otp[5] || ''}
                  />
                </View>
                {errors.otp && touched.otp ? (
                  <Text style={styles.errorText}>{errors.otp}</Text>
                ) : null}
                <View style={styles.emailView1}>
                  <Text style={styles.sendText}>
                    Don't receive the verification code?
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.changeEmailText}>Resend code</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.otp}>{props.otp} </Text>
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};
export default SignupVerificationModal;
const styles = StyleSheet.create({
  abcd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6c727f',
  },
  crossIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  line: {
    height: responsiveHeight(0.2),
    backgroundColor: '#666666',
    width: responsiveWidth(87),
    marginTop: responsiveHeight(2.8),
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    // position: 'absolute',
    // bottom: -20,
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    marginTop: responsiveHeight(28),
    height: responsiveHeight(44),
  },
  verifyText: {
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
    color: '#000929',
    marginTop: responsiveHeight(1),
  },
  input: {
    height: responsiveHeight(4.8),
    width: responsiveWidth(10),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    paddingLeft: 12,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  verifyButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(80),
    height: responsiveHeight(4.8),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    // marginBottom:responsiveHeight(4)
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans j',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
  },
  emailTextView: {
    marginTop: responsiveHeight(3.2),
    alignSelf: 'center',
  },
  sendText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  emailText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  emailView: {flexDirection: 'row'},
  changeEmailText: {
    color: '#1859f5',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  emailView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {},
  otp: {
    color: '#333333',
  },
});
