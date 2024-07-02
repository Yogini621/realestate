import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyAccount from './MyAccount';
import LinkAccount from './LinkAccount';
import NotificationsAdmin from './NotificationsAdmin';

const Tab = createMaterialTopTabNavigator();


interface Props {
  navigation: any;
}

const SettingsAccount: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} />
            </TouchableOpacity>
            <Text style={styles.settingsText}>Settings</Text>
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <FontAwesome5 name="grip-lines" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#323142',
            tabBarLabelStyle: {
              fontSize: responsiveFontSize(1.6),
              fontFamily: 'PlusJakartaSans m',
            },
          }}>
          <Tab.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              tabBarIndicatorStyle: {
                backgroundColor: '#073762',
              },
            }}
          />
          <Tab.Screen
            name="LinkAccount"
            component={LinkAccount}
            options={{
              tabBarIndicatorStyle: {
                backgroundColor: '#073762',
              },
            }}
          />
          <Tab.Screen
            name="NotificationsAdmin"
            component={NotificationsAdmin}
            options={{
              tabBarIndicatorStyle: {
                backgroundColor: '#073762',
              },
            }}
          />
        </Tab.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsAccount;

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
    alignItems:'center'
  },
  settingsText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    right:responsiveWidth(20)
  },
});
