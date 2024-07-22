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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any;
}

const MessageDetailsAdmin: React.FC<Props> = ({navigation}) => {
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
        <TouchableOpacity style={styles.deleteButton}>
          <AntDesign name="delete" color="red" size={16} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
        <View style={styles.userProfileDirectionView}>
          <Image source={require('../Images/Profileimage.png')} />
          <View style={styles.detailsView}>
            <Text style={styles.userName}>Joseph</Text>
            <Text style={styles.Usercontact}>+91-9876543216</Text>
            <Text style={styles.userEmail}>Josephexample@gmail.com</Text>
          </View>
        </View>
        <View style={styles.questionView}>
          <View style={styles.questionTextView}>
            <Text style={styles.questionText}>
              1.What all documents are necessary while we are posting a new
              property?
            </Text>
          </View>
          <Text style={styles.commentText}>Comment</Text>
          <TextInput
            placeholder="Send a reply to the customer"
            style={styles.input}
          />
          <Text style={styles.countText}>0/500</Text>
          <TouchableOpacity style={styles.sendButton}>
            <FontAwesome name="send" color="white" size={16} />
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageDetailsAdmin;

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
  deleteButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(4.8),
    right: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'red',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(2.8),
  },
  userName: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3.2),
  },
  Usercontact: {
    color: '#737787',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
  userEmail: {
    color: '#737787',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
  sendButton: {
    backgroundColor: '#073762',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: responsiveWidth(28),
    alignItems: 'center',
    left: responsiveWidth(6),
    justifyContent: 'center',
    marginBottom: responsiveHeight(4),
  },
  sendText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2),
  },
  questionTextView: {
    width: responsiveWidth(86),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  questionText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  commentText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(10),
    marginTop: responsiveHeight(3.2),
  },
  input: {
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
    color: '#737787',
  },
  countText: {
    alignSelf: 'flex-end',
    right: responsiveWidth(10),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
    color: '#737787',
  },
  userProfileDirectionView: {
    flexDirection: 'row',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  detailsView: {
    left: responsiveWidth(4),
  },
  questionView: {
    backgroundColor: '#ffffff',
    elevation: 3,
    padding: 10,
    marginTop: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
    paddingVertical: 20,
  },
});
