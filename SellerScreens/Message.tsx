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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  navigation: any;
}

export const messageData = [
  {
    id: 1,
    messagername: 'Mark Vetrovs',
    subject: 'Request for Home Tour',
    message:
      'Hi Francis! I’m  in love with one of your properties and wanted to know wh...',
    image: require('../Images/users.png'),
  },
  {
    id: 2,
    messagername: 'Mark Vetrovs',
    subject: 'Request for Home Tour',
    message:
      'Hi Francis! I’m  in love with one of your properties and wanted to know wh...',
    image: require('../Images/users.png'),
  },
  {
    id: 3,
    messagername: 'Mark Vetrovs',
    subject: 'Request for Home Tour',
    message:
      'Hi Francis! I’m  in love with one of your properties and wanted to know wh...',
    image: require('../Images/users.png'),
  },
  {
    id: 4,
    messagername: 'Mark Vetrovs',
    subject: 'Request for Home Tour',
    message:
      'Hi Francis! I’m  in love with one of your properties and wanted to know wh...',
    image: require('../Images/users.png'),
  },
  {
    id: 5,
    messagername: 'Mark Vetrovs',
    subject: 'Request for Home Tour',
    message:
      'Hi Francis! I’m  in love with one of your properties and wanted to know wh...',
    image: require('../Images/users.png'),
  },
];

const Message: React.FC<Props> = ({navigation}) => {
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
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#073762" size={24} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#00092980"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.plusIconButton}>
            <AntDesign name="plus" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {messageData.map(item => (
          <View style={styles.messageView}>
            <View style={styles.profileDirection}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.detailsView}>
                <TouchableOpacity onPress={() => navigation.navigate("MessageDetails")}>
                  <Text style={styles.messagerName}>{item.messagername}</Text>
                  <Text style={styles.subjectText}>{item.subject}</Text>
                  <View style={styles.messageTextView}>
                    <Text style={styles.messageText}>{item.message}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mailButton}>
                  <Text style={styles.mailText}>MAIL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Message;

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
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    alignItems: 'center',
    height: responsiveHeight(6.8),
    marginBottom: responsiveHeight(2.8),
  },
  inputView: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    width: responsiveWidth(64),
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f4faff',
    height: responsiveHeight(6.8),
  },
  input: {
    color: '#00092980',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(50),
    left: responsiveWidth(2),
  },
  plusIconButton: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 8,
    height: responsiveHeight(6.8),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(12),
  },
  messageView: {
    margin: 16,
  },
  messagerName: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.2),
  },
  subjectText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(0.5),
  },
  messageTextView: {
    width: responsiveWidth(66),
    marginTop: responsiveHeight(0.5),
  },
  messageText: {
    color: '#000929cc',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: 30,
  },
  profileDirection: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  detailsView: {
    left: responsiveWidth(4),
  },
  mailButton: {
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 16,
    width: responsiveWidth(14.8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2.2),
  },
  mailText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.6),
  },
});
