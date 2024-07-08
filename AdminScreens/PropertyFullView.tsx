import {
  Alert,
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ListComponent from '../Screens/ListComponent';
import MapView, {Marker} from 'react-native-maps';

interface Props {
  navigation: any;
}

const PropertyFullView: React.FC<Props> = ({navigation}) => {
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
        <TouchableOpacity style={styles.backToPropertiesButton}>
          <Ionicons name="chevron-back-sharp" color="#073762" size={22} />
          <Text style={styles.backToPropertiesText}>Back to Properties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsAppButton}>
          <FontAwesome name="whatsapp" color="#073762" size={20} />
          <Text style={styles.whatsAppText}>Text via Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsAppButton}>
          <Ionicons name="call" color="#073762" size={20} />
          <Text style={styles.whatsAppText}>Call: +91 9000459209</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsAppButton}>
          <Fontisto name="email" color="#073762" size={22} />
          <Text style={styles.whatsAppText}>Mail: josephexample@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsAppButton}>
          <Fontisto name="email" color="#073762" size={22} />
          <Text style={styles.whatsAppText}>
            Address: 1217E. Main Street Telangana Hyderabad
          </Text>
        </TouchableOpacity>

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
        <View style={styles.seperator} />
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
          <ListComponent featureText="Lot Size" details="9,060 sqft" />
          <ListComponent featureText="Parking Area" details="Yes" />
          <ListComponent featureText="Deposit & Fees" details="$2,400" />
        </View>
        <View style={styles.seperator} />
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
        <Text style = {styles.ownerHistoryText}>Owner History</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PropertyFullView;
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
  backToPropertiesButton: {
    left: responsiveWidth(6),
    flexDirection: 'row',
    marginTop: responsiveWidth(4),
    alignItems: 'center',
  },
  backToPropertiesText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.3),
    left: responsiveWidth(2),
  },
  whatsAppText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.6),
  },
  whatsAppButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    padding: 12,
    borderRadius: 24,
    alignSelf: 'center',
    flexDirection: 'row',
    width: responsiveWidth(90),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
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
  featuresText: {
    color: '#000000',
    left: responsiveWidth(4.8),
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
  },
  seperator: {
    height: responsiveHeight(0.1),
    backgroundColor: '#9b9b9b',
    marginBottom: responsiveHeight(4.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4.5),
  },
  map: {
    height: responsiveHeight(44),
    width: responsiveWidth(90),
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(6),
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
  ownerHistoryText: {
    color: '#000000',
    left: responsiveWidth(4.8),
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
  },
});
