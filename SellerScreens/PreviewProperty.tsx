import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ListComponent from '../Screens/ListComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TermsComponents from '../Screens/TermsComponents';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MapView, {Marker} from 'react-native-maps';

interface Props {
  navigation: any;
  route: any;
}

const PreviewProperty: React.FC<Props> = ({navigation}) => {
  const [visible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Images/user.png')} />
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
        <Text style={styles.stCrystalText}>2Bedrooms 2Baths </Text>
        <Text style={styles.addressText}>
          in Sounthend Park Apartment, LB Nagar,Hyderabad,India
        </Text>
        <Image source={require('../Images/home1.png')} style={styles.image} />
        <TouchableOpacity
          style={styles.viewAllPhotosButton}
          onPress={() => setIsVisible(true)}>
          <MaterialIcons name="photo" color="#000000" size={20} />
          <Text style={styles.viewAllPhotosText}>View all photos</Text>
        </TouchableOpacity>
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
              <Ionicons name="bed-outline" size={22} color="#073762" />
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5 name="bath" size={18} color="#073762" />
              <Text style={styles.numberText}>4</Text>
            </View>
            <View style={styles.numberView}>
              <FontAwesome5
                name="bath"
                size={18}
                style={styles.icon}
                color="#073762"
              />
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
        <View style={styles.line} />
        <View>
          <Text style={styles.featuresText}>features</Text>
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
        <Image
          source={require('../Images/Vector1.png')}
          style={styles.image1}
        />
        <View style={styles.footerView}>
          <View>
            <TermsComponents
              headerText="SELL A HOME"
              feature1="Request an offer"
              feature2="Pricing"
              feature3="Reviews"
            />
            <TermsComponents
              headerText="BUY A HOME"
              feature1="Buy"
              feature2="Finance"
            />
            <TermsComponents
              headerText="BUY,RENT AND SELL"
              feature1="Buy & sell properties"
              feature2="Rent home"
            />
          </View>
          <View>
            <TermsComponents
              headerText="TERMS & PRIVACY"
              feature1="Trust & Safety"
              feature2="Terms of Service"
              feature3="Privacy Policy"
            />
            <TermsComponents
              headerText="ABOUT"
              feature1="About Us"
              feature2="How it works"
              feature3="Contact"
              feature4="Investors"
            />
            <TermsComponents
              headerText="RESOURCES"
              feature1="FAQ"
              feature2="Help Center"
            />
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.copyRightVew}>
          <AntDesign name="copyright" color="#07376299" size={16} />
          <Text style={styles.copyRightText}>
            2021 Estatery. All rights reserved
          </Text>
        </View>
        <View style={styles.socialMediaIconView}>
          <EvilIcons name="sc-facebook" color="#07376299" size={36} />
          <AntDesign name="instagram" color="#07376299" size={24} />
          <AntDesign name="twitter" color="#07376299" size={24} />
          <AntDesign name="linkedin-square" color="#07376299" size={24} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PreviewProperty;
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
    width: responsiveWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: responsiveWidth(56),
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
    flexDirection: 'row',
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
    width: responsiveWidth(62),
    alignItems: 'center',
  },
  calenderView: {
    flexDirection: 'row',
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
  selectText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  viewAllPhotosButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    marginTop: responsiveHeight(56),
    alignSelf: 'flex-end',
    right: responsiveWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllPhotosText: {},
  image1: {
    marginTop: responsiveHeight(6),
    left: responsiveWidth(14),
    marginBottom: responsiveHeight(4),
  },
  footerView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    left: responsiveWidth(8.8),
    justifyContent: 'space-between',
  },
  line1: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(8),
    backgroundColor: '#e8e6f9',
    marginBottom: responsiveHeight(4),
  },
  copyRightText: {
    color: '#07376299',
    fontSize: responsiveFontSize(2.2),
  },
  copyRightVew: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'PlusJakartaSans m',
    alignItems: 'center',
  },
  socialMediaIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: responsiveWidth(54),
    alignItems: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
  map: {
    height: responsiveHeight(44),
    width: responsiveWidth(90),
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(6),
  },
});
