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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  BarChart,
} from 'react-native-gifted-charts';

interface Props {
  navigation: any;
}

const SellerDashBoard: React.FC<Props> = ({navigation}) => {
  const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];

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
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" size={22} color="#c2c3cb" />
            <TextInput
              placeholder="Search"
              style={styles.input}
              placeholderTextColor="#c2c3cb"
            />
          </View>
          <TouchableOpacity style={styles.filterIconButton}>
            <Ionicons name="filter" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.statisticsView}>
          <View style={styles.statisticsAndViewAllButtonView}>
            <Text style={styles.statiSticsText}>Statistics</Text>
            <TouchableOpacity style={styles.viewAlButtonView}>
              <Text style={styles.viewAllTxt}>View all</Text>
              <AntDesign name="right" color="#1a202c" size={14} />
            </TouchableOpacity>
          </View>
          <View style={styles.pieChartView}>
            {/* <PieChart data={data} /> */}
          </View>
        </View>
        <View style={styles.statisticsView}>
          <View style={styles.statisticsAndViewAllButtonView}>
            <Text style={styles.statiSticsText}>Details</Text>
            <TouchableOpacity style={styles.viewAlButtonView1}>
              <Text style={styles.viewAllTxt}>This month</Text>
              <Entypo name="chevron-down" color="#1a202c" size={16} />
            </TouchableOpacity>
          </View>
          <View style={styles.salesIncomeView}></View>
        </View>
        <View style={styles.revenueOverView}>
          <View style={styles.revenueDirectionView}>
            <View style={styles.revenueView}>
              <Text style={styles.revenueOverViewText}>Revenue Overview</Text>
              <Text style={styles.priceText}>$14,437.142</Text>
              <Text style={styles.percentageText}>
                +10.6%
                <Text style={styles.lastWeekText}>{'    '}from last week</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.weeklyButton}>
              <Text style={styles.weeklyText}>Weekly</Text>
              <Entypo name="chevron-down" color="#00092980" size={13} />
            </TouchableOpacity>
          </View>
          <View>
            <BarChart data={data} />
          </View>
        </View>
        <View style={styles.tenantRequestView}>
          <View style={styles.tenatRequestDirectionView}>
            <Text style = {styles.tenantRequstText}>Tenant Request</Text>
            <TouchableOpacity>
              <Text style = {styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellerDashBoard;

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
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    height: responsiveHeight(8),
    width: responsiveWidth(76),
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    backgroundColor: '#f4faff',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  filterIconButton: {
    backgroundColor: '#073762',
    height: responsiveHeight(6.8),
    width: responsiveWidth(12),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statisticsView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: 18,
  },
  statisticsAndViewAllButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: responsiveWidth(76),
    marginTop: responsiveHeight(4),
  },
  viewAlButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    height: responsiveHeight(4.8),
    width: responsiveWidth(24),
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  statiSticsText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
  },
  viewAllTxt: {
    color: '#1a202c',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
  },
  pieChartView: {
    backgroundColor: '#f4faff',
    height: responsiveHeight(28),
    width: responsiveWidth(76),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.4),
    borderRadius: 10,
    marginBottom: responsiveHeight(4),
  },
  viewAlButtonView1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    height: responsiveHeight(4.8),
    width: responsiveWidth(29),
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  salesIncomeView: {},
  revenueOverView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderRadius: 8,
  },
  weeklyButton: {
    borderWidth: 1,
    borderColor: '#e0def7',
    width: responsiveWidth(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(4.8),
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  weeklyText: {
    color: '#00092980',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.2),
  },
  revenueDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(84),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
  },
  revenueView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  revenueOverViewText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  priceText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
  },
  percentageText: {
    color: '#27ae60',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  lastWeekText: {
    color: '#00092980',
    fontFamily: 'PlusJakartaSans j',
  },
  tenantRequestView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    borderRadius: 8,
  },
  tenatRequestDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(84),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    alignItems: 'center',
  },
  tenantRequstText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
  },
  viewAllText: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
});
