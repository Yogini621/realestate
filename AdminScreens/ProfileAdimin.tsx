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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileInformation from './ProfileInformation';
import Password from './Password';

interface Props {
  navigation: any;
}

const Tab = createMaterialTopTabNavigator();

const ProfileAdimin: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.personalInformationText}>Personal Information</Text>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#323142',
            tabBarLabelStyle: {
              fontSize: responsiveFontSize(1.6),
              fontFamily: 'PlusJakartaSans m',
            },
          }}>
          <Tab.Screen
            name="ProfileInformation"
            component={ProfileInformation}
            options={{
              tabBarIndicatorStyle: {
                backgroundColor: '#073762',
              },
            }}
          />
          <Tab.Screen
            name="Password"
            component={Password}
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
export default ProfileAdimin;
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
    alignItems: 'center',
  },
  personalInformationText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans m',
    marginTop: responsiveHeight(2.4),
    left: responsiveWidth(4.8),
  },
});
