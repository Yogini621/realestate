import {
  FlatList,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListComponent from './ListComponent';
import {Property} from '../redux/actions/actions';
import {data} from './data';
import {fetchProperties} from '../redux/actions/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {
  navigation: any;
  route: any;
}

const PropertyDetails: React.FC<Props> = ({navigation, route}) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
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
        <View>
          <TouchableOpacity style={styles.mapToMapButton}>
            <AntDesign name="left" color="#073762" size={18} />
            <Text style={styles.backtoMapText}>Back to map</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.stCrystalText}>{item.rooms} </Text>
        <Text style={styles.addressText}>{item.location} </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.shareButton}>
            <EvilIcons name="share-google" size={24} color="#073762" />
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <AntDesign
              name={
                favorites.find(favoriteItem => item.id === favoriteItem.id)
                  ? 'heart'
                  : 'hearto'
              }
              color={
                favorites.find(favoriteItem => item.id === favoriteItem.id)
                  ? 'red'
                  : '#073762'
              }
              size={22}
            />
            <Text style={styles.shareText}>Favorite</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.imageView}>
          <Image source={require('../Images/home2.png')} />
          <Image source={require('../Images/home3.png')} />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.roomsView}>
            <Text style={styles.roomsText}>Bed</Text>
            <Text style={styles.roomsText}>Bath</Text>
            <Text style={styles.roomsText}>Sqft</Text>
          </View>
          <View style={styles.iconView1}>
            <View style={styles.numberView}>
              <Ionicons name="bed-outline" size={22} />
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5 name="bath" size={18} />
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5 name="bath" size={18} style={styles.icon} />
              <Text style={[styles.numberText, {left: responsiveWidth(4.8)}]}>
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
              <FontAwesome5 name="brush" size={18} />
              <Text style={styles.numberText}>Modern Loft</Text>
            </View>
            <View style={styles.numberView1}>
              <SimpleLineIcons name="clock" size={20} />
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
          <Text style={styles.rentedPriceText}>Rented price </Text>
          <Text style={styles.priceText}>{item.rent} </Text>
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
            <TouchableOpacity style={styles.applyButton}>
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
                <Text>In Person</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.personButton}>
                <Text>In Person</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <View style={styles.inputDirectionView}>
                <AntDesign name="calendar" size={18} />
                <Text>Select tour date</Text>
                <AntDesign name="circledown" color="#9fc5e9" />
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
        <View>
          <Text style={styles.featuresText}>Map</Text>
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
              inquiries you submit through our services, which may involve use
              of automated means and prerecorded/artificial voices. You don't
              need to consent as a condition of renting any property, or buying
              any other goods or services. Message/data rates may apply.
            </Text>
          </View>
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
    fontSize: responsiveFontSize(1.7),
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
    fontSize: responsiveFontSize(1.8),
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
    height: responsiveHeight(40),
    marginBottom: responsiveHeight(4),
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
    fontFamily: 'PlusJakartaSans j',
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
    fontFamily: 'PlusJakartaSans j',
  },
  directionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(80),
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
    height: responsiveHeight(48),
    // marginBottom: responsiveHeight(2),
  },
  homeTourText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
  },
  textView: {
    left: responsiveWidth(10),
    marginTop: responsiveHeight(4),
  },
  personButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(32.8),
    height: responsiveHeight(7.2),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(4),
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
  },
  requestButton: {
    backgroundColor: '#100a55',
    marginTop: responsiveHeight(4),
    width: responsiveWidth(70),
    borderRadius: 8,
    height: responsiveHeight(6.8),
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: responsiveFontSize(2.2),
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
    width: responsiveWidth(92),
    alignSelf: 'center',
  },
  policyText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 20,
  },
});
