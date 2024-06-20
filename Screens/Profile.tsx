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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import OptionComponent from './OptionComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropertyPropsComponent from './PropertyPropsComponent';
interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({navigation}) => {
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
        <View style={styles.userDetailsView}>
          <View style={styles.userDetailsView1}>
            <Image source={require('../Images/Profileimage.png')} />
            <View>
              <View style={styles.profileView}>
                <FontAwesome name="user-circle" color="white" size={24} />
                <Text style={styles.userName}>Joseph K</Text>
              </View>
              <View style={styles.profileView}>
                <Ionicons name="call-outline" color="white" size={24} />
                <Text style={styles.userName}>Call: +91900459209</Text>
              </View>
              <View style={styles.profileView}>
                <Fontisto name="email" color="white" size={24} />
                <Text style={styles.userName}>
                  Mail:josephexample@gmail.com
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editIcon}>
              <Feather name="edit" color="white" size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionView}>
          <OptionComponent
            optionText="My requests"
            onPress={() => ''}
            color="#222222"
          />
          <OptionComponent
            optionText="My Favorites"
            onPress={() => navigation.navigate('Favorites')}
            color="#33333380"
          />
          <OptionComponent
            optionText="My Purchases"
            onPress={() => navigation.navigate('MyPurchases')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Settings"
            onPress={() => navigation.navigate('Settings')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Contact Us"
            onPress={() => navigation.navigate('ContactUs')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Privacy Policy"
            onPress={() => navigation.navigate('PrivacyPolicy')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Terms & Conditions"
            onPress={() => navigation.navigate('TermsAndConditions')}
            color="#33333380"
          />
          <OptionComponent
            optionText="About Us"
            onPress={() => navigation.navigate('Aboutus')}
            color="#33333380"
          />
          <OptionComponent
            optionText="Change Password"
            onPress={() => navigation.navigate('Favorites')}
            color="#33333380"
          />
          <TouchableOpacity style={styles.logOutButton}>
            <Text style={styles.logOutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discoveView}>
          <View style={styles.discoverTextView}>
            <Text style={styles.discoverText}>
              Discover the best property today – spacious, modern properties
              available now!
            </Text>
          </View>
          <View style={styles.faqSectionButtonView}>
            <View style={styles.faqSectionTextView}>
              <Text style={styles.faqSectionText}>
                Having trouble in using any features. Click here for FAQ
                section.
              </Text>
            </View>
            <TouchableOpacity style={styles.faqsButton}>
              <Text style={styles.faqsText}>FAQ’s Section</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.myRequestText}>My requests </Text>
        <View style={styles.requestSentView}>
          <Text style={styles.requestSentText}>Requests sent</Text>
          <View style={styles.acceptedCountView}>
            <Text style={styles.acceptedCountText}>0</Text>
          </View>
          <Text style={styles.acceptedText}>Accepted</Text>
          <View style={styles.acceptedCountView}>
            <Text style={styles.acceptedCountText}>0</Text>
          </View>
          <Text style={styles.acceptedText}>Rejected</Text>
        </View>
        <View style={styles.inputView}>
          <AntDesign name="search1" size={20} color="#073762" />
          <TextInput
            placeholder="Search for requests"
            placeholderTextColor="#000929"
            style={styles.input}
          />
        </View>
        <View style={styles.propertyView}>
          <PropertyPropsComponent
            propertyType="Property Name"
            propertyText="Southend Park Apart ment LB Nagar..."
          />
          <PropertyPropsComponent
            propertyType="Owner Name"
            propertyText="Madina Aulia"
          />
          <PropertyPropsComponent
            propertyType="Rented Price"
            propertyText="2,095"
          />
          <PropertyPropsComponent
            propertyType="Applied Date"
            propertyText="28-08-2023"
          />
          <PropertyPropsComponent
            propertyType="Status"
            propertyText="Active"
            color="#46d75e"
          />
        </View>
        <View style={styles.ratingView}>
          <Text style={styles.experienceText}>
            How would you rate overall experience?
          </Text>
          <View style={styles.ratingIocnView}>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="staro" color="#000000" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

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
  userDetailsView: {
    backgroundColor: '#100a55',
    height: responsiveHeight(18),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailsView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileView: {
    flexDirection: 'row',
    left: responsiveWidth(2.6),
    marginBottom: responsiveHeight(1),
  },
  userName: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.4),
    fontSize: responsiveFontSize(1.4),
    width: responsiveWidth(52),
  },
  editIcon: {
    right: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  logOutButton: {
    backgroundColor: '#100a55',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    width: responsiveWidth(44),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3.4),
    marginBottom: responsiveHeight(4),
  },
  logOutButtonText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
  optionView: {
    backgroundColor: '#f4faff',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  discoveView: {
    backgroundColor: '#ebebeb',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.8),
    height: responsiveHeight(36),
    borderRadius: 4,
  },
  discoverText: {
    color: '#333333',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.5),
    lineHeight: 18,
  },
  discoverTextView: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.8),
  },
  faqSectionButtonView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(18),
    width: responsiveWidth(68),
    marginTop: responsiveHeight(4),
    left: responsiveWidth(6),
    borderRadius: 4,
  },
  faqSectionTextView: {
    width: responsiveWidth(50),
    left: responsiveWidth(4.2),
    marginTop: responsiveHeight(2.8),
  },
  faqSectionText: {
    fontSize: responsiveFontSize(1.4),
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
  },
  faqsButton: {
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(2.8),
    padding: 10,
    width: responsiveWidth(28),
    height: responsiveHeight(5),
    left: responsiveWidth(4.2),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqsText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.2),
  },
  myRequestText: {
    color: '#333333',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2.4),
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'PlusJakartaSans a',
  },
  requestSentText: {
    color: '#333333',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  requestSentView: {
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  acceptedCountView: {
    backgroundColor: '#100a55',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptedCountText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.4),
  },
  acceptedText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.5),
    right: responsiveWidth(1),
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: 8,
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f7f7fd',
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  propertyView: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    elevation: 3,
    height: responsiveHeight(44),
    marginBottom: responsiveWidth(26),
    borderRadius: 6,
  },
  propertiesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  placeView: {
    width: responsiveWidth(36),
  },
  ratingView: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveHeight(4),
    borderRadius: 16,
  },
  experienceText: {
    color: '#000000',
    textAlign: 'center',
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  ratingIocnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(58),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
});
