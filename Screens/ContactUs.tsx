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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  navigation: any;
}

const ContactUs: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
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
        <Text style={styles.contactUsText}>Contact Us</Text>
        <View style={styles.conatctTextView}>
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.getinTouchText}>Get in Touch</Text>
        <View style={styles.getinTouchTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </Text>
        </View>
        <View style={styles.locationView}>
          <FontAwesome6 name="location-dot" color="#000000" size={24} />
          <Text style={styles.locationText}>
            123 Anywhere Street, Any City, 12345 ST, India
          </Text>
        </View>
        <View style={styles.locationView1}>
          <Ionicons name="call" color="#000000" size={24} />
          <Text style={styles.locationText}>+123 456 7890</Text>
        </View>
        <View style={styles.locationView1}>
          <Ionicons name="mail" color="#000000" size={24} />
          <Text style={styles.locationText}>hello@Ext.com</Text>
        </View>
        <View style={styles.imageView}>
          <Image source={require('../Images/Maps.png')} />
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Have a Question? Request a Visit? or Request a Quote? Don’t be Shy
            to Message Us!
          </Text>
        </View>
        <View style={styles.getinTouchTextView1}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </Text>
        </View>
        <Text style={styles.labelText}>Your Name</Text>
        <TextInput
          placeholder="Your full name"
          style={styles.input}
          placeholderTextColor="#7b7f8f"
        />
        <Text style={styles.labelText}>Your Email</Text>
        <TextInput
          placeholder="example@email.com"
          style={styles.input}
          placeholderTextColor="#7b7f8f"
        />
        <Text style={styles.labelText}>Your Phone Number</Text>
        <TextInput
          placeholder="+123-456-7890"
          style={styles.input}
          placeholderTextColor="#7b7f8f"
        />
        <Text style={styles.labelText}>Your Subject</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Question"
            style={styles.input1}
            placeholderTextColor="#7b7f8f"
          />
          <AntDesign name="caretdown" size={10} color="#666666" />
        </View>
        <Text style={styles.labelText}>Your Message</Text>
        <TextInput
          placeholder="Type Here"
          style={styles.msgInput}
          placeholderTextColor="#7b7f8f"
        />
        <TouchableOpacity style={styles.sendMsgButton}>
          <Text style={styles.sendMsgText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

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
  contactUsText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: responsiveFontSize(3.6),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(2.8),
  },
  conatctTextView: {
    width: responsiveScreenWidth(86),
    alignItems: 'center',
    alignSelf: 'center',
  },
  loremText: {
    color: '#666666',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(1),
    lineHeight: 24,
  },
  getinTouchText: {
    color: '#000000',
    fontSize: responsiveFontSize(3.6),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(6),
    left: responsiveWidth(6),
  },
  getinTouchTextView: {
    width: responsiveScreenWidth(86),
    alignItems: 'center',
    left: responsiveWidth(4),
  },
  loremText1: {
    color: '#666666',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(1),
    lineHeight: 28,
  },
  locationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
    width: responsiveWidth(80),
  },
  locationText: {
    color: '#666666',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 28,
    left: responsiveWidth(2),
  },
  locationView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
    width: responsiveWidth(34),
  },
  imageView: {
    alignSelf: 'center',
    marginTop: responsiveHeight(6),
  },
  questionView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  questionText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(6),
  },
  getinTouchTextView1: {
    width: responsiveScreenWidth(86),
    alignItems: 'center',
    left: responsiveWidth(4),
    marginBottom: responsiveHeight(4.8),
  },
  labelText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(6),
    lineHeight: 28,
  },
  input: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 6,
    padding: 10,
    marginBottom: responsiveHeight(2.8),
    color: '#666666',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  sendMsgButton: {
    backgroundColor: '#073762',
    padding: 10,
    height: responsiveHeight(6.8),
    width: responsiveWidth(46),
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(4),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  sendMsgText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  msgInput: {
    height: responsiveHeight(18),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 6,
    padding: 10,
    marginBottom: responsiveHeight(2.8),
    color: '#666666',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 6,
    padding: 10,
    marginBottom: responsiveHeight(2.8),
    alignItems: 'center',
  },
  input1: {
    color: '#666666',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
  },
});
