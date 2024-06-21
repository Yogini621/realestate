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
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Props {
  navigation: any;
}

const TermsAndConditions: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.contactUsText}>Terms & Conditions</Text>
        <View style={styles.conatctTextView}>
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.ourTermsText}>Our Terms</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.loremTextView1}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            justo eros. Sed non neque non lectus ullamcorper malesuada. Fusce
            mattis justo sit amet eros tincidunt, vel efficitur justo bibendum.
            Morbi vel nisi id odio hendrerit condimentum. Sed eu ante eget nisl
            congue malesuada. Integer eget justo sit amet do
          </Text>
        </View>
        <Text style={styles.ourTermsText}>Using Our Services</Text>
        <View style={styles.loremTextView1}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo
            eros. Sed non neque non lectus ullamcorper malesuada. Fusce mattis
            justo sit amet eros tincidunt, vel efficitur justo bibendum. Morbi
            vel nisi id odio hendrerit condimentum. Sed eu ante eget nisl congue
            malesuada. Integer eget justo sit amet dolor tincidunt facilisis.
            Vivamus non metus vel lorem ultrices dictum. Vestibulum non enim
            quis arcu dignissim cursus nec non erat. Nulla facilisi. Suspendisse
            vel odio quis mi eleifend efficitur. Sed sed neque nec eros
            tincidunt malesuada. Vestibulum sed massa eget ex ullamcorper ull
          </Text>
        </View>
        <Text style={styles.ourTermsText}>Integer eget justo</Text>
        <View style={styles.introductionTextView}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.introductionTextView1}>
          <Text style={styles.loremText1}>
            er malesuada. Fusce mattis justo sit amet eros tincidunt, vel
            efficitur justo bibendum. Morbi vel nisi id odio hendrerit
            condimentum. Sed eu ante eget nisl congue malesuada
          </Text>
        </View>
        <View style={styles.introductionTextView1}>
          <Text style={styles.loremText1}>
            . Integer eget justo sit amet dolor tincidunt facilisis. Vivamus non
            metus vel lorem ultrices dictum. Vestibulum non enim quis arcu
            dignissim cursus nec non erat. Nulla facilisi. Suspendisse vel odio
            quis mi eleifend efficitur.
          </Text>
        </View>
        <View style={styles.introductionTextView1}>
          <Text style={styles.loremText1}>
            . Integer eget justo sit amet dolor tincidunt facilisis. Vivamus non
            metus vel lorem ultrices dictum. Vestibulum non enim quis arcu
            dignissim cursus nec non erat. Nulla facilisi. Suspendisse vel odio
            quis mi eleifend efficitur.
          </Text>
        </View>
        <View style={styles.introductionTextView1}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <Text style={styles.introductionText1}>
          Your Content in out Services
        </Text>
        <View style={styles.loremTextView1}>
          <Text style={styles.loremText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            justo eros. Sed non neque non lectus ullamcorper malesuada. Fusce
            mattis justo sit amet eros tincidunt, vel efficitur justo bibendum.
            Morbi vel nisi id odio hendrerit condimentum. Sed eu ante eget nisl
            congue malesuada. Integer eget justo sit amet do
          </Text>
        </View>
        <Text style={styles.anyQuestionText}>Consectetur asipiscing elit</Text>
        <View style={styles.conatctTextView}>
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter your Query here..."
            style={styles.input1}
            placeholderTextColor="#7b7f8f"
          />
          <FontAwesome name="send" size={26} color="#073762" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

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
  ourTermsText: {
    color: '#000000',
    fontSize: responsiveFontSize(3.6),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(6),
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
  loremTextView1: {
    width: responsiveScreenWidth(86),
    alignItems: 'center',
    left: responsiveWidth(6),
  },
  introductionTextView1: {
    width: responsiveScreenWidth(86),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
  },
  introductionText1: {
    color: '#000000',
    fontSize: responsiveFontSize(3.2),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(4.8),
    left: responsiveWidth(6),
    lineHeight: 38,
  },
  anyQuestionText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(4.8),
    lineHeight: 32,
    textAlign: 'center',
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
    paddingHorizontal: 20,
    marginBottom: responsiveHeight(4.8),
    alignItems: 'center',
    backgroundColor: '#f7f7fd',
    marginTop: responsiveHeight(4.8),
  },
  input1: {
    color: '#666666',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
  },
});
