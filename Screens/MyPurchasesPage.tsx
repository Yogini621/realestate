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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import PropertyPropsComponent from './PropertyPropsComponent';
import TermsComponents from './TermsComponents';

interface Props {
  navigation: any;
}

const MyPurchasesPage: React.FC<Props> = ({navigation}) => {
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
              <MaterialIcons name="edit" color="white" size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.purchasedPropertiesText}>Purchased Properties</Text>
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
            propertyType="Purchased Price"
            propertyText="1.05 Cr"
          />
          <PropertyPropsComponent
            propertyType="Purchased Date"
            propertyText="28-08-2023"
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
            propertyType="Purchased Price"
            propertyText="1.05 Cr"
          />
          <PropertyPropsComponent
            propertyType="Purchased Date"
            propertyText="28-08-2023"
          />
        </View>
        <Image source={require('../Images/Vector1.png')} style={styles.image} />
        <View style={styles.footerView}>
          <View>
            <TermsComponents
              headerText="SELL A HOME"
              feature1="Request an offer"
              feature2="Pricing"
              feature3="Reviews"
            />
            <TermsComponents
              headerText="BUY A HOME"
              feature1="Buy"
              feature2="Finance"
            />
            <TermsComponents
              headerText="BUY,RENT AND SELL"
              feature1="Buy & sell properties"
              feature2="Rent home"
            />
          </View>
          <View>
            <TermsComponents
              headerText="TERMS & PRIVACY"
              feature1="Trust & Safety"
              feature2="Terms of Service"
              feature3="Privacy Policy"
            />
            <TermsComponents
              headerText="ABOUT"
              feature1="About Us"
              feature2="How it works"
              feature3="Contact"
              feature4="Investors"
            />
            <TermsComponents
              headerText="RESOURCES"
              feature1="FAQ"
              feature2="Help Center"
            />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.copyRightVew}>
          <AntDesign name="copyright" color="#07376299" size={16} />
          <Text style={styles.copyRightText}>
            2021 Estatery. All rights reserved
          </Text>
        </View>
        <View style={styles.socialMediaIconView}>
          <EvilIcons name="sc-facebook" color="#07376299" size={36} />
          <AntDesign name="instagram" color="#07376299" size={24} />
          <AntDesign name="twitter" color="#07376299" size={24} />
          <AntDesign name="linkedin-square" color="#07376299" size={24} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPurchasesPage;

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
    marginTop: responsiveHeight(1),
  },
  userName: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.4),
    fontSize: responsiveFontSize(1.4),
    width: responsiveWidth(52),
  },
  editIcon: {
    right: responsiveWidth(2.8),
  },
  inputView: {
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderRadius: 8,
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f7f7fd',
    marginBottom: responsiveHeight(2),
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  purchasedPropertiesText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(4),
  },
  propertyView: {
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    elevation: 3,
    height: responsiveHeight(36),
    borderRadius: 6,
  },
  image: {
    marginTop: responsiveHeight(6),
    left: responsiveWidth(14),
    marginBottom: responsiveHeight(4),
  },
  footerView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    left: responsiveWidth(8.8),
    justifyContent: 'space-between',
  },
  line: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(8),
    backgroundColor: '#e8e6f9',
    marginBottom: responsiveHeight(4),
  },
  copyRightText: {
    color: '#07376299',
    fontSize: responsiveFontSize(2.2),
  },
  copyRightVew: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'PlusJakartaSans m',
    alignItems: 'center',
  },
  socialMediaIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: responsiveWidth(54),
    alignItems: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
});
