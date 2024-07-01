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
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Account from './AccountSeller';
import Notifications from './NotificationsSeller';

interface Props {
  navigation: any;
}

const Tab = createMaterialTopTabNavigator();

const SettingsSeller: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.searchText}>Settings</Text>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: responsiveFontSize(1.8),
              color: '#000000',
              fontFamily: 'PlusJakartaSans m',
            },
          }}>
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIndicatorStyle: {
                borderWidth: 1,
                borderColor: '#073762',
              },
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarIndicatorStyle: {
                borderWidth: 1,
                borderColor: '#073762',
              },
            }}
          />
        </Tab.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsSeller;

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
  searchText: {
    color: '#100a55',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    fontWeight: '600',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
    marginBottom:responsiveHeight(2)
  },
});
