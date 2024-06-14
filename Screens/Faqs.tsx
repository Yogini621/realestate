import {
  Image,
  ImageBackground,
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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import QuestionComponent from './QuestionComponent';

interface Props {
  navigation: any;
}

const Faqs: React.FC<Props> = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector.png')} />
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
        <ImageBackground
          source={require('../Images/Rectangle.png')}
          style={styles.image}>
          <View style={styles.propertyView}>
            <Text style={styles.propertyText}>E-Property</Text>
            <View style={styles.propertyView1}>
              <Text style={styles.propertyText}>Post A Property</Text>
              <View style={styles.line} />
              <Text style={styles.propertyText}>Customer Services</Text>
              <View style={styles.line} />
              <Text style={styles.propertyText}>Privacy Policy</Text>
            </View>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Search for FAQ’s"
              placeholderTextColor="#00092999"
              style={styles.input}
            />
            <EvilIcons name="search" size={16} />
          </View>
        </ImageBackground>
        <View style={styles.label}>
          <ScrollView horizontal>
            <MaterialIcons name="call" color="white" style={styles.icon} />
            <Text style={styles.callText}>call: +91 9000459209</Text>
            <Fontisto name="email" color="white" style={styles.icon} />
            <Text style={styles.callText}>mail: josephexample@gmail.com</Text>
            <Fontisto name="whatsapp" color="white" style={styles.icon} />
            <Text style={styles.callText}>90002536513</Text>
            <Fontisto name="whatsapp" color="white" style={styles.icon} />
            <Text style={styles.callText}>
              Address: 1217 E.Main Street Telangana
            </Text>
          </ScrollView>
        </View>

        <View style={styles.helpView}>
          <Text style={styles.weWillText}>We Will get you in Touch</Text>
          <Text style={styles.helpText}>
            We are 24/7 available to help you with anything.
          </Text>
          <TouchableOpacity style={styles.clickHereButton}>
            <Text style={styles.buttonText}>Click Here</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.generalQuestionsText}>General Questions</Text>
        <View style={styles.line1} />
        <QuestionComponent
          question="1. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />

        <QuestionComponent
          question="2. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="3. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="4. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="5. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="6. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="7. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="8. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="9. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="10. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="11. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="12. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <QuestionComponent
          question="13. How do I list my home for sale"
          answer="Enhance curd appeal with landscaping and exterior maintenance
            Upgrade kitchen and bathrooms with modern fixtures.Fresh
            paint,decluttering,and proffessional staging can make a big impact."
        />
        <View style= {styles.bottomView} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    elevation: 1,
    justifyContent: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
  },
  iconView: {
    width: responsiveWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2.8),
  },
  image: {
    height: responsiveHeight(20),
    marginTop: responsiveHeight(2.8),
  },
  propertyView1: {
    flexDirection: 'row',
  },
  propertyText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1),
  },
  line: {
    width: responsiveWidth(0.1),
    height: responsiveHeight(1.8),
    backgroundColor: 'white',
    marginRight: responsiveWidth(2.8),
    marginLeft: responsiveWidth(2.8),
  },
  inputView: {
    height: responsiveHeight(4.6),
    width: responsiveWidth(68),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
  },
  input: {
    fontSize: responsiveFontSize(1.4),
    padding: 10,
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(40),
  },
  label: {
    backgroundColor: '#100a55',
    height: responsiveHeight(3.8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  callText: {
    color: 'white',
    fontSize: responsiveFontSize(1),
    fontFamily: 'PlusJakartaSans j',
    marginLeft: responsiveWidth(1),
  },
  icon: {
    marginLeft: responsiveWidth(6.2),
    marginTop: responsiveHeight(0.4),
  },
  weWillText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3),
  },
  helpView: {
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(10.2),
  },
  helpText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
  },
  clickHereButton: {
    backgroundColor: 'red',
    padding: 10,
    width: responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  generalQuestionsText: {
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(2.8),
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    marginLeft: responsiveWidth(7.2),
  },
  line1: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(54),
    backgroundColor: '#000000',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(7.2),
  },
  bottomView:{
    marginBottom:responsiveHeight(10)
  }
});
