import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialComminityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

interface Props{
  navigation:any
}

const PrivacyPolicyAdmin:React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificationList')}>
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
        <Text style={styles.privacyText}>Privacy Policy</Text>
        <View style={styles.draftButtonView}>
          <TouchableOpacity style={styles.draftButton}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="#073762"
            />
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <View style={styles.addAndPublishButtonDirection}>
            <TouchableOpacity style={styles.addButton}>
              <FontAwesome name="plus" size={20} color="white" />
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.publishButton}>
              <Text style={styles.publishText}>Publish</Text>
              <Feather name="chevron-down" size={22} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder="Write your Title|" style={styles.input} />
          <Text style={styles.countText}>200</Text>
        </View>
        <Text style={styles.termsAndConditionText}>
          Terms & Conditions Description{' '}
          <Text style={styles.requiredText}>*</Text>
        </Text>

        <View style={styles.publishAndSaveAsDraftButtonView}>
          <TouchableOpacity style={styles.publishButtonFooter}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="white"
            />
            <Text style={styles.publishText1}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.publishButtonFooter}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="white"
            />
            <Text style={styles.publishText1}>Save as Draft</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PrivacyPolicyAdmin;

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
  privacyText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2.8),
  },
  draftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
  },
  addAndPublishButtonDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(42),
  },
  addButton: {
    backgroundColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draftsText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  addText: {
    color: 'white',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  publishButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  publishText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    right: responsiveWidth(1),
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#a4aeb4',
    alignSelf: 'center',
    width: responsiveWidth(90),
    borderRadius: 10,
    marginTop: responsiveHeight(4.8),
    height: responsiveHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  input: {
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans j',
    color: '#a4aeb4',
    width: responsiveWidth(80),
  },
  countText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
    color: '#a4aeb4',
  },
  termsAndConditionText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  requiredText: {
    color: 'red',
  },
  publishAndSaveAsDraftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(78),
    left: responsiveWidth(4),
    marginTop:responsiveHeight(2)
  },
  publishButtonFooter: {
    backgroundColor: '#07376266',
    padding: 10,
    borderRadius: 14,
    paddingHorizontal: 20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  publishText1: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left:responsiveWidth(2)
  },
});