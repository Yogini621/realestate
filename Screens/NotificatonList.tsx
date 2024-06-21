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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Props {
  navigation: any;
}

const NotificatonList: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificatonList')}>
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
        <View style={styles.notificationTextView}>
          <Text style={styles.notifcationsText}>Notifications</Text>
          <View style={styles.checkIconAndMarkTextView}>
            <Ionicons name="checkmark-done-sharp" color="#1d79be" size={24} />
            <Text style={styles.markAsReadText}>Mark as read</Text>
          </View>
        </View>
        <View style={styles.notificationView}>
          <View style={styles.notificationTextAndHomeIconView}>
            <View style={styles.notificationTxtView}>
              <Text style={styles.notificationTxt}>
                701 Buckingham Unit 12 has an open draft
              </Text>
            </View>
            <MaterialCommunityIcons
              name="home-circle"
              color="#073762"
              size={58}
            />
          </View>
          <Text style={styles.dateAndTimeText}>Dec 12,2021 at 10:13 AM</Text>
        </View>
        <View style={styles.notificationView}>
          <View style={styles.notificationTextAndHomeIconView}>
            <View style={styles.notificationTxtView}>
              <Text style={styles.notificationTxt}>
                Tenant applications from Valentino Parker
              </Text>
            </View>
            <MaterialCommunityIcons
              name="home-circle"
              color="#073762"
              size={58}
            />
          </View>
          <Text style={styles.dateAndTimeText}>Dec 11,2021 at 09:10 AM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificatonList;

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
  notificationTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(84),
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    left: responsiveWidth(4.8),
    marginBottom: responsiveHeight(2),
  },
  checkIconAndMarkTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifcationsText: {
    color: '#073762',
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'PlusJakartaSans a',
  },
  markAsReadText: {
    color: '#1d79be',
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveScreenFontSize(2),
  },
  notificationView: {
    height: responsiveHeight(14.8),
    width: responsiveWidth(84),
    left: responsiveWidth(4.8),
    backgroundColor: '#f7f7fd',
    marginTop: responsiveHeight(2),
    borderWidth: 1,
    borderColor: '#e8e6f9',
    borderRadius: 10,
  },
  notificationTxt: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveScreenFontSize(2),
    lineHeight: 26,
  },
  notificationTextAndHomeIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  notificationTxtView: {
    width: responsiveWidth(64),
  },
  dateAndTimeText: {
    color: '#07376280',
    left: responsiveWidth(4),
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
});
