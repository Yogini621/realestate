import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListComponent from './ListComponent';
import {Property} from '../redux/actions/actions';
import {addToFavorites, removeFavorites} from '../redux/actions/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import Octicons from 'react-native-vector-icons/Octicons';
import Geolocation from '@react-native-community/geolocation';
import MapView, {LatLng, Marker} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageView from 'react-native-image-viewing';

interface Props {
  navigation: any;
  route: any;
}

const PropertyDetails: React.FC<Props> = ({navigation, route}) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const Properties = useSelector(
    (state: RootState) => state.properties.properties,
  );
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [visible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const dispatch = useDispatch();
  const {item} = route.params;

  const images = [
    {
      uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
    },
    {
      uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
    },
    {
      uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    },
  ];

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

  const handleAddToFavorites = (item: Property) => {
    console.log(item);
    if (favorites.includes(item)) {
      console.log('item Removed');
      dispatch(removeFavorites(item));
    } else {
      console.log('item Added');
      dispatch(addToFavorites(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
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
        <View>
          <TouchableOpacity
            style={styles.mapToMapButton}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" color="#073762" size={18} />
            <Text style={styles.backtoMapText}>Back to map</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.stCrystalText}>{item.rooms}</Text>
        <Text style={styles.addressText}>{item.location}</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.shareButton}>
            <Feather name="share-2" size={18} color="#073762" />
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => handleAddToFavorites(item)}>
            <Entypo
              name={
                favorites.find(favoriteItem => item.id === favoriteItem.id)
                  ? 'heart'
                  : 'heart-outlined'
              }
              color={
                favorites.find(favoriteItem => item.id === favoriteItem.id)
                  ? 'red'
                  : '#073762'
              }
              size={18}
            />
            <Text style={styles.shareText}>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View>
          {imageVisible ? (
            <Image source={item.image} style={styles.image} />
          ) : (
            <Image source={require('../Images/home3.png')} style={styles.img} />
          )}
          <TouchableOpacity
            style={styles.viewAllPhotosButton}
            onPress={() => setIsVisible(true)}>
            <MaterialIcons name="photo" color="#000000" size={20} />
            <Text style={styles.viewAllPhotosText}>View all photos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
          <View style={imageVisible ? styles.imageBackground : null}>
            <TouchableOpacity onPress={() => setImageVisible(true)}>
              <Image source={item.image} style={styles.images} />
            </TouchableOpacity>
          </View>
          <View style={!imageVisible ? styles.imageBackground : null}>
            <TouchableOpacity onPress={() => setImageVisible(false)}>
              <Image source={require('../Images/home3.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{color: 'white'}}>Hello</Text>
          <ImageView
            images={images}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            backgroundColor="#000000EE"
            presentationStyle="formSheet"
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.roomsView}>
            <Text style={styles.roomsText}>Bed</Text>
            <Text style={styles.roomsText}>Bath</Text>
            <Text style={styles.roomsText}>Sqft</Text>
          </View>
          <View style={styles.iconView1}>
            <View style={styles.numberView}>
              <Ionicons name="bed-outline" size={22} color="#073762" />
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5 name="bath" size={18} color="#073762" />
              <Text style={styles.numberText}>2</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5
                name="bath"
                size={18}
                style={styles.icon}
                color="#073762"
              />
              <Text style={[styles.numberText,{left: responsiveWidth(4.8)}]}>
                6x8 m²
              </Text>
            </View>
          </View>
          <View style={styles.roomsView}>
            <Text style={styles.roomsText}>Repair Quality</Text>
            <Text style={styles.roomsText}>Status</Text>
          </View>
          <View style={styles.iconView2}>
            <View style={styles.numberView1}>
              <FontAwesome5 name="brush" size={18} color="#666666" />
              <Text style={styles.numberText}>Modern Loft</Text>
            </View>
            <View style={styles.numberView1}>
              <SimpleLineIcons name="clock" size={20} color="#666666" />
              <Text style={styles.numberText}>Active</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutHomeView}>
          <Text style={styles.aboutHomeText}>About this home</Text>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
              Check out that Custom Backyard Entertaining
            </Text>
            <Text style={styles.descriptionText}>
              space! 3237sqft, 4 Bedrooms, 2 Bathrooms
            </Text>
            <Text style={styles.descriptionText}>
              house on a Lake . Read more
            </Text>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.rentedPriceText}>Rented price</Text>
          <Text style={styles.priceText}>${item.rent} </Text>
          <View style={styles.userAndAddressView}>
            <Image source={require('../Images/user.png')} />
            <View>
              <Text style={styles.userNameText}>Joseph Kishore</Text>
              <Text style={styles.propertyName}>
                Rich Capital Properties LLC
              </Text>
              <View style={styles.locationView}>
                <Entypo name="location-pin" size={18} color="#000000" />
                <Text style={styles.locationText}>Miyapur,Hyderabad</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <FontAwesome name="question-circle-o" color="#073762" size={20} />
            <Text style={styles.callText}>Call or Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.applyView}>
          <View style={styles.directionView}>
            <View>
              <Text style={styles.rentedPrice}>Rent price</Text>
              <Text style={styles.rentPrice}>
                $2,400<Text style={styles.monthText}>/month</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() =>
                navigation.navigate('TenentApplicationForm', {item})
              }>
              <Ionicons name="document-text-outline" color="white" size={22} />
              <Text style={styles.applyText}>Apply now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.homeTourView}>
          <View style={styles.textView}>
            <Text style={styles.homeTourText}>Request a home tour</Text>
            <View style={styles.buttonDirectionView}>
              <TouchableOpacity style={styles.personButton}>
                <Entypo name="arrow-up" size={24} color="#666666" />
                <Text style={styles.selectText}>In Person</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.personButton}>
                <Octicons name="video" size={24} color="#666666" />
                <Text style={styles.selectText}>Virtual</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <View style={styles.inputDirectionView}>
                <View style={styles.calenderView}>
                  <AntDesign name="calendar" size={18} color="#666666" />
                  <Text style={styles.selectText}>Select tour date</Text>
                </View>
                <AntDesign name="circledown" color="#9fc5e9" size={20} />
              </View>
            </View>
            <TouchableOpacity style={styles.requestButton}>
              <Text style={styles.requestText}>Request a tour</Text>
            </TouchableOpacity>
            <Text style={styles.cancelText}>
              It’s free, with no obligation － cancel anytime.
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.featuresText}>Rental features</Text>
          <ListComponent
            featureText="Listed on E-Properties"
            details="1 week"
          />
          <ListComponent featureText="Date available" details="Available now" />
          <ListComponent featureText="Type" details="Home" />
          <ListComponent featureText="Laundry" details="In unit" />
          <ListComponent featureText="Cooling" details="Air Conditioner" />
          <ListComponent featureText="Heating" details="Forced Air" />
          <ListComponent featureText="City" details="Miami" />
          <ListComponent featureText="Size" details="2,173 sqft" />
          <ListComponent featureText="Square Feet" details="9,060 sqft" />
          <ListComponent featureText="Parking Area" details="Yes" />
          <ListComponent featureText="Rent" details="$2,400" />
        </View>
        <View style={styles.line} />
        <Text style={styles.featuresText}>Map</Text>
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
        <View style={styles.backIconView}>
          <Text style={styles.seemoreText}>See more listings in Houston</Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color="#073762"
            style={styles.icon1}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            You agree to Estatery's Terms of Use & Privacy Policy. By choosing
            to contact a property, you also agree that Estatery Group,
            landlords, and property managers may call or text you about any
            inquiries you submit through our services, which may involve use of
            automated means and prerecorded/artificial voices. You don't need to
            consent as a condition of renting any property, or buying any other
            goods or services. Message/data rates may apply.
          </Text>
        </View>
        <View style={styles.similarListingsView}>
          <Text style={styles.similarListingsText}>Similar listings</Text>
          {Properties.map(item => {
            return (
              <View style={styles.itemView} key={item.id}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PropertyDetails', {item})
                  }>
                  <Image source={item.image} style={styles.image1} />
                </TouchableOpacity>
                <View style={styles.descriptionView1}>
                  <View style={styles.triangle} />
                  <View style={styles.popularTextView}>
                    <View style={styles.popularTextDirectionView}>
                      <Ionicons name="sparkles" color="white" size={16} />
                      <Text style={styles.popularText}>POPULAR</Text>
                    </View>
                  </View>
                  <View style={styles.favoriteIconView}>
                    <View>
                      <View style={styles.rupeeView}>
                        <FontAwesome5
                          name="rupee-sign"
                          color="#073762"
                          size={20}
                          style={styles.icon1}
                        />
                        <Text style={styles.rentText}>{item.rent}</Text>
                      </View>
                      <Text style={styles.roomsText1}>{item.rooms}</Text>
                    </View>
                    <View style={styles.circle1}>
                      <TouchableOpacity
                        onPress={() => handleAddToFavorites(item)}>
                        <AntDesign
                          name={
                            favorites.find(
                              favoriteItem => item.id === favoriteItem.id,
                            )
                              ? 'heart'
                              : 'hearto'
                          }
                          color={
                            favorites.find(
                              favoriteItem => item.id === favoriteItem.id,
                            )
                              ? 'red'
                              : '#073762'
                          }
                          size={22}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.locationText2}>{item.location}</Text>
                  <View style={styles.line1} />
                  <View style={styles.iconView3}>
                    <View style={styles.roomView}>
                      <Ionicons name="bed-outline" size={20} color="#073762" />
                      <Text style={styles.bedText}>3</Text>
                    </View>
                    <View style={styles.roomView}>
                      <Ionicons name="bed-outline" size={20} color="#073762" />
                      <Text style={styles.bedText}>2</Text>
                    </View>
                    <View style={styles.roomView}>
                      <Ionicons name="bed-outline" size={20} color="#073762" />
                      <Text style={styles.bedText}>5x7 m²</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyDetails;

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
  mapToMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  backtoMapText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
    marginBottom: responsiveHeight(0.8),
    marginLeft: responsiveWidth(1.8),
  },
  stCrystalText: {
    fontSize: responsiveFontSize(2.8),
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    marginLeft: responsiveWidth(4.6),
    marginTop: responsiveHeight(1),
  },
  addressText: {
    color: '#636363',
    marginLeft: responsiveWidth(4.6),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(0.6),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(4),
    width: responsiveWidth(72),
    alignSelf: 'center',
  },
  shareButton: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#9fc5e9',
    height: responsiveHeight(6),
    width: responsiveWidth(34),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7fd',
  },
  shareText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(1.8),
  },
  image: {
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(3.4),
    width: responsiveWidth(94),
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2.8),
  },
  detailsView: {
    height: responsiveHeight(26),
    width: responsiveWidth(90),
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(4),
    elevation: 1,
  },
  roomsText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  roomsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2.8),
  },
  iconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  numberView: {
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(6.8),
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(1.6),
  },
  repairView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(4),
  },
  numberView1: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1.8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    left: responsiveWidth(3.2),
  },
  iconView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(64),
    left: responsiveWidth(7.8),
  },
  aboutHomeText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.5),
  },
  aboutHomeView: {
    left: responsiveWidth(6),
  },
  descriptionText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
  },
  descriptionView: {
    width: responsiveWidth(90),
  },
  priceView: {
    borderRadius: 8,
    borderColor: '#9fc5e9',
    borderWidth: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(4),
    backgroundColor: '#f4faff',
    padding: 10,
  },
  rentedPriceText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(12),
    marginTop: responsiveHeight(2.8),
  },
  priceText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(11),
    fontSize: responsiveFontSize(3.2),
  },
  userAndAddressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(62),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  locationView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.6),
  },
  userNameText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
  },
  propertyName: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(0.6),
  },
  locationText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans j',
  },
  contactButton: {
    backgroundColor: '#9fc5e9',
    width: responsiveWidth(70),
    alignSelf: 'center',
    borderRadius: 8,
    height: responsiveHeight(7.2),
    marginTop: responsiveHeight(2.8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: responsiveHeight(2),
  },
  callText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(2),
  },
  applyView: {
    backgroundColor: 'white',
    elevation: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    height: responsiveHeight(14),
    marginBottom: responsiveHeight(4),
  },
  rentedPrice: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(8),
    marginTop: responsiveHeight(2),
  },
  rentPrice: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(8),
    fontSize: responsiveFontSize(2.2),
  },
  monthText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans m',
  },
  directionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(81),
  },
  applyButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 8,
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
  },
  applyText: {
    color: 'white',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(1),
  },
  homeTourView: {
    width: responsiveWidth(90),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignSelf: 'center',
    backgroundColor: '#f4faff',
    padding: 10,
  },
  homeTourText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
  },
  textView: {
    left: responsiveWidth(10),
    marginTop: responsiveHeight(1),
  },
  personButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(32.8),
    height: responsiveHeight(7.2),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(2.8),
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(70),
    height: responsiveHeight(7.2),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(62),
    alignItems: 'center',
  },
  calenderView: {
    flexDirection: 'row',
  },
  requestButton: {
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(3.2),
    width: responsiveWidth(70),
    borderRadius: 8,
    height: responsiveHeight(7.4),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
  },
  requestText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  cancelText: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans j',
    color: '#6c727f',
    marginBottom: responsiveHeight(2),
  },
  line: {
    height: responsiveHeight(0.2),
    backgroundColor: '#9b9b9b',
    marginBottom: responsiveHeight(4.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4.5),
  },
  featuresText: {
    color: '#000000',
    left: responsiveWidth(4.8),
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
  },
  seemoreText: {
    color: '#073762',
    left: responsiveWidth(4.8),
    fontSize: responsiveFontSize(2.1),
    fontFamily: 'PlusJakartaSans a',
  },
  backIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(72),
  },
  icon1: {
    marginTop: responsiveHeight(1),
  },
  policyView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: responsiveHeight(4),
  },
  policyText: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 20,
    color: '#00092980',
  },
  selectText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
    color: '#00092980',
  },
  map: {
    height: responsiveHeight(44),
    width: responsiveWidth(90),
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(6),
  },
  viewAllPhotosButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    marginTop: responsiveHeight(20),
    alignSelf: 'flex-end',
    right: responsiveWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllPhotosText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
    marginLeft: responsiveWidth(2),
  },
  // ==============================================================

  filterIconView: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    borderRadius: 10,
    borderColor: '#9fc5e9',
  },
  directionView1: {
    borderWidth: 2,
    borderRadius: 8,
    borderTopWidth: 0,
    borderColor: '#9fc5e9',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  line1: {
    backgroundColor: '#9fc5e9',
    height: responsiveHeight(0.2),
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2.2),
    marginBottom: responsiveHeight(2.2),
    alignSelf: 'center',
  },
  carIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText1: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.2),
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(50),
    left: responsiveWidth(6),
    marginBottom: responsiveHeight(2),
  },
  favoritesIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignItems: 'center',
  },
  circle: {
    height: responsiveHeight(7),
    width: responsiveWidth(14),
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 50,
    top: 30,
  },
  headerView1: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    left: responsiveWidth(12),
  },
  filterText: {
    color: '#100a55',
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(28),
    fontSize: responsiveFontSize(1.8),
  },
  myLocationText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
  },
  input: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderWidth: 0.8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.2),
    borderColor: '#636363',
    padding: 20,
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  inputView1: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderWidth: 0.8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.2),
    borderColor: '#636363',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  itemView: {
    flex: 1,
    alignSelf: 'center',
    margin: 8,
  },
  image1: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: responsiveWidth(86),
  },
  descriptionView1: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9fc5e9',
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  rentText: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
  },
  rupeeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomsText1: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
  },
  favoriteIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(72),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(1),
  },
  circle1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2: {
    marginTop: responsiveHeight(1),
  },
  locationText2: {
    color: '#9b9b9b',
    left: responsiveWidth(8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    marginBottom: responsiveHeight(1),
  },
  locationText1: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  ownerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  line2: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(84),
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveWidth(2.8),
    alignSelf: 'center',
  },
  iconView3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(44),
    marginBottom: responsiveHeight(2.8),
    alignItems: 'center',
    left: responsiveWidth(6),
  },
  roomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bedText: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  bottomview: {
    marginBottom: responsiveHeight(10),
  },
  popularTextDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(22),
    alignItems: 'center',
  },
  popularTextView: {
    backgroundColor: '#073762',
    width: responsiveWidth(32),
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: responsiveHeight(-2.8),
    left: responsiveWidth(-3.2),
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  popularText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderTopWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#073762',
    borderTopColor: '#073762',
    top: responsiveHeight(2.1),
    right: responsiveWidth(3.4),
  },
  similarListingsText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3.2),
    left: responsiveWidth(6.8),
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(4),
  },
  similarListingsView: {
    backgroundColor: '#f7f7fd',
  },
  images: {
    height: responsiveHeight(14),
    width: responsiveWidth(44),
    borderRadius: 10,
  },
  imageBackground: {
    borderWidth: 1.6,
    borderColor: '#073762',
    borderRadius: 10,
    padding: 4,
  },
  img: {
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(3.4),
    width: responsiveWidth(94),
    height: responsiveHeight(28),
  },
});
