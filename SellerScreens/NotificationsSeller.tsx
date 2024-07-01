import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Switch} from 'react-native-paper';

const NotificationsSeller = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.notificationView}>
        <Text style={styles.notificationsText}>Notifications</Text>
        <Text style={styles.generalText}>General</Text>
        <View style={styles.switchIconView}>
          <View style={styles.swichIconTextView}>
            <Text style={styles.switchIconText}>
              Get notifications from E-Property to stay up-to-date.
            </Text>
          </View>
          <Switch />
        </View>
        </View>
    </View>
  );
};
export default NotificationsSeller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  notificationView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(4),
    borderRadius: 6,
    backgroundColor: '#f4faff',
    marginBottom: responsiveHeight(4),
    padding:10
  },
  notificationsText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.6),
    marginTop: responsiveHeight(1.6),
    left: responsiveWidth(2.4),
  },
  generalText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(2.4),
  },
  switchIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2.8),
  },
  swichIconTextView: {
    width: responsiveWidth(70),
  },
  switchIconText: {
    color: '#000929c7',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
});
