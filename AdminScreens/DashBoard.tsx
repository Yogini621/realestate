import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ProgressView from './ProgressView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HorizontalProgressBarComponent from './HorizontalProgressBarComponent';
import Progressbar from './Progressbar';

interface Props {
  navigation: any;
}

const DashBoard: React.FC<Props> = ({navigation}) => {
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
        <View style={styles.inputView}>
          <AntDesign name="search1" color="#c2c3cb" size={22} />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor="#c2c3cb"
          />
        </View>
        <View style={styles.propertyProgressView}>
          <ProgressView
            textLabel="Properties for Sale"
            count="684"
            percentage={70}
            progressColor="#073762"
          />
          <ProgressView
            textLabel="Properties for Rent"
            count="546"
            percentage={24}
            progressColor="#38e25d"
          />
          <ProgressView
            textLabel="Total Customer"
            count="3,672"
            percentage={56}
            progressColor="#ff8723"
          />
          <ProgressView
            textLabel="Total City"
            count="75"
            percentage={30}
            progressColor="#333e4b"
          />
        </View>
        <View style={styles.revenueView}>
          <View style={styles.revenueAndPercentageView}>
            <View>
              <Text style={styles.totalRevenueText}>Total Revenue</Text>
              <Text style={styles.priceText}>$236,535</Text>
            </View>
            <View>
              <View style={styles.percentageView}>
                <FontAwesome6
                  name="circle-arrow-up"
                  color="#38e25d"
                  size={14}
                />
                <Text style={styles.percentageText}>0.8%</Text>
              </View>
              <Text style={styles.lastWeekText}>than last week</Text>
            </View>
          </View>
        </View>
        <View style={styles.customerView}>
          <View style={styles.customerAndViewAllButtonView}>
            <Text style={styles.recentCustomersText}>Recent Customers</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator} />
          <View style={styles.userDirectionView}>
            <Image source={require('../Images/MaskGroup.png')} />
            <View style={styles.userView}>
              <Text style={styles.customerText}>Edin Kaolo</Text>
              <Text style={styles.kelapaBafingText}>Kelapa Bafing</Text>
              <Text style={styles.dateText}>07 Sep 2023</Text>
            </View>
            <AntDesign name="right" color="#000000" size={16} />
          </View>
          <View style={styles.seperator} />
          <View style={styles.userDirectionView}>
            <Image source={require('../Images/MaskGroup.png')} />
            <View style={styles.userView}>
              <Text style={styles.customerText}>Edin Kaolo</Text>
              <Text style={styles.kelapaBafingText}>Kelapa Bafing</Text>
              <Text style={styles.dateText}>07 Sep 2023</Text>
            </View>
            <AntDesign name="right" color="#000000" size={16} />
          </View>
          <View style={styles.seperator} />
          <View style={styles.userDirectionView}>
            <Image source={require('../Images/MaskGroup.png')} />
            <View style={styles.userView}>
              <Text style={styles.customerText}>Edin Kaolo</Text>
              <Text style={styles.kelapaBafingText}>Kelapa Bafing</Text>
              <Text style={styles.dateText}>07 Sep 2023</Text>
            </View>
            <AntDesign name="right" color="#000000" size={16} />
          </View>
          <View style={styles.seperator} />
          <View style={styles.userDirectionView}>
            <Image source={require('../Images/MaskGroup.png')} />
            <View style={styles.userView}>
              <Text style={styles.customerText}>Edin Kaolo</Text>
              <Text style={styles.kelapaBafingText}>Kelapa Bafing</Text>
              <Text style={styles.dateText}>07 Sep 2023</Text>
            </View>
            <AntDesign name="right" color="#000000" size={16} />
          </View>
          <View style={styles.seperator} />
          <TouchableOpacity style={styles.addCustomerButton}>
            <AntDesign name="plus" color="white" size={14} />
            <Text style={styles.addCustomerText}>Add New Customer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mapView}>
          <Text style={styles.propertiesText}>Properties Map Location</Text>
          <HorizontalProgressBarComponent
            unit={532}
            place="Nizamabad"
            prcentage={20}
          />
          <HorizontalProgressBarComponent
            unit={567}
            place="Warangal"
            prcentage={20}
          />
          <HorizontalProgressBarComponent
            unit={234}
            place="Karimnagar"
            prcentage={20}
          />
          <HorizontalProgressBarComponent
            unit={174}
            place="Nalgonda"
            prcentage={20}
          />
          <Text style={styles.stateText}>Telangana State</Text>
          <Image source={require('../Images/map.png')} style={styles.image} />
        </View>
        <View style={styles.productViewedView}>
          <Progressbar productlabel="Product Viewed" productText="561/days" />
          <Progressbar productlabel="Product Listed" productText="3,456 Unit" />
          <Progressbar productlabel="Reviews" productText="456 Comment" />
          <View style={styles.bottomView} />
        </View>
        <View style={styles.totalPropertiesView}>
          <View style={styles.propertyDirectionView}>
            <Image source={require('../Images/Vector2.png')} />
            <View>
              <Text style={styles.totalPropertiesText}>Total Properties</Text>
              <View style={styles.recordTextView}>
                <Text style={styles.recordText}>
                  431 more to break last month record
                </Text>
              </View>
            </View>
            <Text style={styles.countText}>4,562</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
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
  inputView: {
    backgroundColor: '#f4faff',
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    borderRadius: 10,
    marginTop: responsiveHeight(2.8),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  input: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    color: '#c2c3cb',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(3.2),
  },
  propertyProgressView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  revenueView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  totalRevenueText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans a',
  },
  priceText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2.8),
  },
  percentageText: {
    color: '#38e25d',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans m',
  },
  percentageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastWeekText: {
    color: '#737b8b',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  revenueAndPercentageView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    left: responsiveWidth(2.8),
  },
  customerView: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderColor: '#9fc5e9',
    borderRadius: 20,
  },
  recentCustomersText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
  },
  viewAllText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  customerAndViewAllButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  seperator: {
    backgroundColor: '#9fc5e9',
    height: responsiveHeight(0.2),
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2),
  },
  customerText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans j',
  },
  kelapaBafingText: {
    color: '#737b8b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  dateText: {
    color: '#737b8b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  userDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70),
    alignSelf: 'center',
    alignItems: 'center',
  },
  userView: {
    right: responsiveWidth(10),
  },
  addCustomerText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    color: 'white',
  },
  addCustomerButton: {
    backgroundColor: '#073762',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    width: responsiveWidth(60),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2),
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderColor: '#9fc5e9',
    borderRadius: 20,
    marginBottom: responsiveHeight(4),
  },
  propertiesText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  stateText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(8),
    marginTop: responsiveHeight(2),
  },
  productViewedView: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderColor: '#9fc5e9',
    borderRadius: 20,
    marginBottom: responsiveHeight(4),
  },
  bottomView: {
    margin: 20,
  },
  totalPropertiesView: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderRadius: 18,
    marginBottom: responsiveHeight(4),
    padding: 10,
  },
  totalPropertiesText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    right: responsiveWidth(2),
  },
  recordText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.5),
  },
  countText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.6),
  },
  propertyDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  recordTextView: {
    width: responsiveWidth(40),
    right: responsiveWidth(2),
  },
  image: {
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
    width: responsiveWidth(80),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
