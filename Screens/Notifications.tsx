import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Checkbox, Switch} from 'react-native-paper';

const Notifications = () => {
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
        <View style={styles.seperator} />
        <Text style={styles.generalText}>Rent Reminder</Text>
        <View style={styles.switchIconView1}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#073762"
            onPress={() => setChecked(true)}
          />
          <View style={styles.swichIconTextView}>
            <Text style={styles.switchIconText}>
              When your tenant’s rent due date is approaching
            </Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <Text style={styles.generalText}>Payments</Text>
        <View style={styles.switchIconView1}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#073762"
            onPress={() => setChecked(true)}
          />
          <View style={styles.swichIconTextView}>
            <Text style={styles.switchIconText}>
              When tenant’s payments are overdue
            </Text>
          </View>
        </View>
        <View style={styles.switchIconView1}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#073762"
            onPress={() => setChecked(true)}
          />
          <View style={styles.swichIconTextView}>
            <Text style={styles.switchIconText}>
              Notification about payment status
            </Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <Text style={styles.generalText}>Email Newsletter</Text>
        <View style={styles.seperator} />
        <TouchableOpacity style={styles.saveChangesButton}>
          <Text style={styles.saveChangesButtonText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  notificationView: {
    height: responsiveHeight(86),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9fc5e9',
    marginTop: responsiveHeight(4),
    borderRadius: 6,
    backgroundColor: '#f4faff',
    marginBottom: responsiveHeight(4),
  },
  notificationsText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.6),
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(4.8),
  },
  generalText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(4.8),
  },
  switchIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  swichIconTextView: {
    width: responsiveWidth(70),
  },
  switchIconText: {
    color: '#000929c7',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
  seperator: {
    height: responsiveHeight(0.2),
    alignSelf: 'center',
    width: responsiveWidth(80),
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(2.8),
  },
  switchIconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
  },
  saveChangesButton: {
    backgroundColor: '#073762',
    padding: 10,
    width: responsiveWidth(38),
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(4),
    right: responsiveWidth(2.8),
    borderRadius: 8,
    height: responsiveHeight(6.4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveChangesButtonText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
});
