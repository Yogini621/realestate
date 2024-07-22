import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Checkbox, RadioButton, Switch} from 'react-native-paper';

const Notifications = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState('first');
  return (
    <View style={styles.container}>
      <View style={styles.myAccountView}>
        <Text style={styles.notificatonsText}>Notifications</Text>
        <Text style={styles.generalText}>General</Text>
        <View style={styles.getNotificationsView}>
          <Text style={styles.getNotificationsText}>
            Get notifications from E-Property to stay up-to-date
          </Text>
          <Switch />
        </View>
        <View style={styles.seperator} />
        <Text style={styles.rentText}>Rent Reminder</Text>
        <View style={styles.checkBoxView}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkBoxText}>
            When your tenant’s rent due date is approaching
          </Text>
        </View>
        <View style={styles.seperator} />
        <Text style={styles.paymentsText}>Payments</Text>
        <View style={styles.checkBoxView}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkBoxText}>
            When tenant’s payments are overdue
          </Text>
        </View>
        <View style={[styles.checkBoxView, {marginTop: responsiveHeight(2)}]}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkBoxText}>
            Notifications about payment status
          </Text>
        </View>
        <View style={styles.seperator} />
        <Text style={styles.emailNewsLetterText}>Email Newsletter</Text>
        <View style={styles.radioButtonView}>
          <View style={styles.radioButtonDirectionView}>
            <RadioButton
              value="first"
              status={checked1 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked1('first')}
              color="#073762"
            />
            <Text style={styles.onText}>On</Text>
          </View>
          <View style={styles.radioButtonDirectionView}>
            <RadioButton
              value="second"
              status={checked1 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked1('second')}
              color="#073762"
            />
            <Text style={styles.onText}>Off</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.saveChangesButton}>
          <Text style={styles.saveChangesText}>Save Changes</Text>
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
  myAccountView: {
    width: responsiveWidth(90),
    borderWidth: 2,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    padding: 10,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 10,
    marginBottom: responsiveHeight(4),
  },
  notificatonsText: {
    color: '#000929',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
  },
  generalText: {
    color: '#000929',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  getNotificationsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(76),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  getNotificationsText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(78),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2.8),
  },
  rentText: {
    color: '#000929',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginBottom: responsiveHeight(2),
  },
  checkBoxView: {
    flexDirection: 'row',
    width: responsiveWidth(76),
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  checkBoxText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  paymentsText: {
    color: '#000929',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginBottom: responsiveHeight(2),
  },
  emailNewsLetterText: {
    color: '#000929',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
  },
  saveChangesButton: {
    backgroundColor: '#073762',
    padding: 10,
    marginBottom: responsiveHeight(2.8),
    borderRadius: 10,
    width: responsiveWidth(36),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(3.4),
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveChangesText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
  radioButtonView: {
    flexDirection: 'row',
    width: responsiveWidth(40),
    justifyContent: 'space-between',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  onText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  radioButtonDirectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(16),
    justifyContent: 'space-between',
  },
});
