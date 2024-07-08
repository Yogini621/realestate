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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HorizontalProgressBarComponent from './HorizontalProgressBarComponent';
import {BarChart, LineChart} from 'react-native-gifted-charts';

interface Props {
  navigation: any;
}

const Analytics: React.FC<Props> = ({navigation}) => {
  const data = [
    {value: 11, label: "06"},
    {value: 12, label: "07"},
    {value: 13, label: "08"},
    {value: 14, label: "09"},
    {value: 15, label: "10"},
    {value: 16, label: "11"},
    {value: 17, label: "12"},
    {value: 18, label: "13"},
    {value: 19, label: "14"},
    {value: 20, label: "15"},
    {value: 21, label: "16"},
    {value: 6, label: "17"},
    {value: 7, label: "18"},
    {value: 8, label: "19"},
    {value: 9, label: "20"},
    {value: 10, label: "21"},
  ];
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
        <View style={styles.analyticsAndRefreshButtonView}>
          <Text style={styles.analyticsText}>Analytics</Text>
          <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.refreshText}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rentStatisticsView}>
          <View style={styles.rentStatisticAndCsvButtonView}>
            <View>
              <Text style={styles.rentStatisticText}>Rent Statistic</Text>
              <View style={styles.rentview}>
                <View style={styles.imageView}>
                  <Image source={require('../Images/icproperty.png')} />
                </View>
                <View>
                  <Text style={styles.totalRentText}>Total Rent</Text>
                  <Text style={styles.unitText}>1,252 Unit</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.downloadCsvButton}>
              <Text style={styles.csvButtonText}>Download CSV</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rentStatisticsView}>
          <View style={styles.rentStatisticAndCsvButtonView}>
            <View>
              <Text style={styles.rentStatisticText}>sales Statistic</Text>
              <View style={styles.rentview}>
                <View style={styles.imageView1}>
                  <Image source={require('../Images/icproperty.png')} />
                </View>
                <View>
                  <Text style={styles.totalRentText}>Total Sale</Text>
                  <Text style={styles.unitText}>2,346 Unit</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.downloadCsvButton}>
              <Text style={styles.csvButtonText}>Download CSV</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.totalRevenueView}>
          <View style={styles.totalRevenueViewTextView}>
            <Text style={styles.totalRevenueText}>Total Revenue</Text>
            <Feather name="more-horizontal" color="#000000" size={16} />
          </View>
          <View style={styles.revenuePriceView}>
            <Text style={styles.revenuePriceText}>$678,345</Text>
            <Text style={styles.lastMonthText}>last month $563,443</Text>
            <View style={styles.graphView}>
              <Image source={require('../Images/Vector3.png')} />
              <Text style={styles.percentageText}>7%</Text>
              <AntDesign name="caretup" size={8} color="#37d159" />
            </View>
          </View>
          <BarChart
            barWidth={4}
            noOfSections={1}
            barBorderRadius={4}
            frontColor="lightgray"
            data={data}
            yAxisThickness={0}
            xAxisThickness={0}
          />
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
            prcentage={0.3}
          />
          <HorizontalProgressBarComponent
            unit={567}
            place="Warangal"
            prcentage={0.5}
          />
          <HorizontalProgressBarComponent
            unit={234}
            place="Karimnagar"
            prcentage={0.4}
          />
          <HorizontalProgressBarComponent
            unit={174}
            place="Nalgonda"
            prcentage={0.2}
          />
          <Text style={styles.stateText}>Telangana State</Text>
          <Image source={require('../Images/map.png')} style={styles.image} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

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
    elevation: 1,
  },
  input: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(80),
    color: '#c2c3cb',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(3.2),
  },
  analyticsAndRefreshButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  analyticsText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(3),
  },
  refreshButton: {
    backgroundColor: '#d2d7f6',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  refreshText: {
    color: '#3b4cb8',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  rentStatisticsView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: 14,
  },
  rentStatisticText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
  totalRentText: {
    color: '#00000080',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  unitText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
  downloadCsvButton: {
    borderWidth: 1,
    borderColor: '#073762',
    borderRadius: 10,
    padding: 10,
    height: responsiveHeight(5.8),
  },
  rentStatisticAndCsvButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  csvButtonText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans a',
  },
  rentview: {
    marginTop: responsiveHeight(1.6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#37d159',
    height: responsiveHeight(3.6),
    width: responsiveWidth(6.8),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(2.8),
  },
  imageView1: {
    backgroundColor: '#073762',
    height: responsiveHeight(3.6),
    width: responsiveWidth(6.8),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(2.8),
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
    left: responsiveWidth(12),
    marginTop: responsiveHeight(2),
  },
  customerView: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
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
    width: responsiveWidth(76),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  seperator: {
    backgroundColor: '#9fc5e9',
    height: responsiveHeight(0.2),
    width: responsiveWidth(76),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
    marginBottom: responsiveHeight(3.2),
  },
  customerText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans j',
  },
  kelapaBafingText: {
    color: '#737b8b',
    fontSize: responsiveFontSize(2),
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
    right: responsiveWidth(8),
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
    width: responsiveWidth(56),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2),
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: responsiveHeight(4),
    width: responsiveWidth(80),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  totalRevenueView: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderColor: '#9fc5e9',
    borderRadius: 20,
  },
  totalRevenueViewTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    alignItems: 'center',
  },
  totalRevenueText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  revenuePriceText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  lastMonthText: {
    color: '#a1a1a1',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  graphView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  revenuePriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    alignItems: 'center',
  },
  percentageText: {
    color: '#37d159',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.7),
  },
});
