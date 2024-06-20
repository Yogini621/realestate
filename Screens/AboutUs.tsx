import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
  navigation: any;
}

const AboutUs: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.contactUsText}>About Us</Text>
        <View style={styles.conatctTextView}>
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.ecpericeTextView}>
          <Text style={styles.experienceText}>
            Over 12+ Years Experience in Real Estate Services
          </Text>
        </View>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.image} source={require('../Images/image.png')} />
        </View>
        <Text style={styles.ourVisionText}>Our Vision</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.ourVisionText}>Our Mission</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.ourVisionText1}>Our Trusted Partner</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.ourVisionText}>Our History</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>
        <View style={styles.develperTeamView}>
          <View style={styles.develperTeamDirectionView}>
            <AntDesign name="checkcircle" color="#000000" size={40} />
            <View>
              <Text style={styles.yearText}>2018</Text>
              <Text style={styles.createTeamText}>
                Create The Developer Team
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.develperTeamView}>
          <View style={styles.develperTeamDirectionView}>
            <AntDesign name="checkcircle" color="#000000" size={40} />
            <View>
              <Text style={styles.yearText}>2018</Text>
              <Text style={styles.createTeamText}>
                Create The Developer Team
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.develperTeamView}>
          <View style={styles.develperTeamDirectionView}>
            <AntDesign name="checkcircle" color="#000000" size={40} />
            <View>
              <Text style={styles.yearText}>2018</Text>
              <Text style={styles.createTeamText}>
                Create The Developer Team
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.introductionTextView,{marginTop:responsiveHeight(4.8)}]}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <Image source={require('../Images/image2.png')} style={styles.image1} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

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
    marginBottom: responsiveHeight(4),
  },
  ecpericeTextView: {
    width: responsiveWidth(90),
    left: responsiveWidth(6),
  },
  experienceText: {
    color: '#000000',
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(2.8),
    lineHeight: 42,
  },
  introductionTextView: {
    width: responsiveScreenWidth(86),
    left: responsiveWidth(6),
  },
  loremText1: {
    color: '#666666',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 28,
  },
  image: {
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 10,
  },
  imageView: {
    marginTop: responsiveHeight(4.8),
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  ourVisionText: {
    color: '#000000',
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(6),
  },
  ourVisionText1: {
    color: '#000000',
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(6),
    left: responsiveWidth(6),
  },
  develperTeamView: {
    height: responsiveHeight(14),
    width: responsiveWidth(90),
    alignSelf: 'center',
    elevation: 1,
    backgroundColor: '#ffffff',
    marginTop: responsiveHeight(2),
  },
  image1: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(4),
  },
  develperTeamDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(74),
    left: responsiveWidth(6),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  yearText: {
    color: '#666666',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 28,
  },
  createTeamText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans m',
    lineHeight: 28,
  },
});
