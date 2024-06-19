import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ButtonComponent from './ButtonComponent';
import Geolocation from '@react-native-community/geolocation';
import MapView, {LatLng, Marker} from 'react-native-maps';

interface Props {
  navigation: any;
}

const DiscoverMore: React.FC<Props> = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          getCurrentLocation();
        } else {
          setLocationError('Location permission denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
        setLocationError('Error requesting location permission');
      }
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        setLocationError(null);
      },
      error => {
        console.error('Error getting current location:', error);
        setLocationError('Error getting current location');
      },
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
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
        <View style={styles.homeAndSortIconView}>
          <View style={styles.homeAndSearchView}>
            <Text style={styles.homeText}>Home</Text>
            <FontAwesome5
              name="chevron-right"
              color="#9b9b9b"
              size={16}
              style={styles.icon2}
            />
            <Text style={styles.searchText}>Search</Text>
          </View>
          <View style={styles.sortIconView}>
            <TouchableOpacity>
              <AntDesign name="right" color="#9b9b9b" size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <Feather name="search" color="#073762" size={28} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#8f8da6"
            style={styles.input}
          />
        </View>
        <View style={styles.filtersView}>
          <ButtonComponent buttonText="Any Price" onPress={() => ''} />
          <ButtonComponent buttonText="2-4 Beds" onPress={() => ''} />
          <ButtonComponent buttonText="All Types" onPress={() => ''} />
        </View>
        <View style={styles.map}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              draggable
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              onDragEnd={e =>
                Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={'Test Marker'}
              description={'This is a description of the marker'}
            />
          </MapView>
        </View>
        <View style={styles.availablePropertiesView}>
          <View style={styles.line} />
          <TouchableOpacity onPress={() => navigation.navigate('SwipeUp')}>
            <Text style={styles.availableText}>
              325 properties available to rent
            </Text>
            <Text style={styles.availableText}>(Swipe Up) </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverMore;

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
  homeAndSortIconView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2.4),
    marginHorizontal: responsiveWidth(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(90),
  },
  homeAndSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIconView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    padding: 10,
    borderRadius: 8,
  },
  homeText: {
    color: '#8f8da6',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    fontWeight: '600',
  },
  searchText: {
    color: '#100a55',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    fontWeight: '600',
    left: responsiveWidth(2),
  },
  inputView: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e0def7',
    borderRadius: 8,
    marginTop: responsiveHeight(2.4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7f7fd',
  },
  input: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
  },
  filtersView: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2.6),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon2: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  map: {
    height: responsiveHeight(64),
    width: responsiveWidth(90),
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  availablePropertiesView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 10},
    borderWidth: 0,
    borderRadius: 0,
    elevation: 10,
    marginTop: responsiveHeight(8),
  },
  availableText: {
    color: '#100a55',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  line: {
    height: 5,
    width: 60,
    backgroundColor: '#e5e6eb',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
});
