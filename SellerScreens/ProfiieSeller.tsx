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
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircularProgress from 'react-native-circular-progress-indicator';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  navigation: any;
}

const ProfileSeller: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#073762"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.personalInformationText}>Personal Information</Text>
        <View style={styles.profileView}>
          <View style={styles.progressBarView}>
            <CircularProgress
              value={64}
              inActiveStrokeColor={'#fafafa'}
              inActiveStrokeOpacity={0.2}
              progressValueColor={'#fafafa'}
              valueSuffix={'%'}
              radius={40}
              activeStrokeWidth={8}
              inActiveStrokeWidth={8}
              activeStrokeColor={'#fafafa'}
              progressValueStyle={{fontWeight: '400'}}
            />
            <View>
              <Text style={styles.completeProfileText}>Complete profile</Text>
              <View style={styles.feturesTextView}>
                <Text style={styles.featureText}>
                  Complete your profile to unlock all features
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.verifyIdentityButton}>
            <Text style={styles.verifyIdentiyText}>Verify identity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileDirectionView}>
          <Image source={require('../Images/user.png')} style={styles.image} />
          <View style={styles.userView}>
            <Text style={styles.userText}>Joseph</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.uploadPictureButton}>
                <Text style={styles.uploadPictureText}>Upload New Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="Joseph" style={styles.input} />
          <Feather name="edit" color="#acadb9" size={20} />
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="+00 0000 0000" style={styles.input} />
          <Feather name="edit" color="#acadb9" size={20} />
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="joseph@gmail.com" style={styles.input} />
          <Feather name="edit" color="#acadb9" size={20} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileSeller;

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
  personalInformationText: {
    color: '#1a202c',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.4),
  },
  profileView: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(2),
    // marginBottom:responsiveHeight(4)
  },
  verifyIdentityButton: {
    backgroundColor: 'white',
    marginBottom: responsiveHeight(2.8),
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: 10,
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3.2),
  },
  verifyIdentiyText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
    letterSpacing: 0.4,
  },
  completeProfileText: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
    letterSpacing: 0.4,
  },
  feturesTextView: {
    width: responsiveWidth(50),
  },
  featureText: {
    color: '#fafafa',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 21,
  },
  progressBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(78),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(64),
    marginTop: responsiveHeight(1.4),
  },
  userText: {
    color: '#191c32',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans m',
  },
  uploadPictureButton: {
    backgroundColor: '#073762',
    borderRadius: 8,
    width: responsiveWidth(40),
    alignItems: 'center',
    height: responsiveHeight(4.8),
    justifyContent: 'center',
  },
  uploadPictureText: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans a',
  },
  deleteButton: {
    backgroundColor: '#9fc5e9',
    borderRadius: 8,
    paddingHorizontal: 20,
    width: responsiveWidth(22),
    alignItems: 'center',
    height: responsiveHeight(4.8),
    justifyContent: 'center',
  },
  deleteText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  inputView: {
    borderWidth: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 6,
    height: responsiveHeight(7.4),
  },
  input: {
    color: '#acadb9',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(80),
  },
  profileDirectionView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: responsiveHeight(4.8),
  },
  image: {
    height: 80,
    width: 80,
  },
  userView: {
    left: responsiveWidth(4),
  },
});
