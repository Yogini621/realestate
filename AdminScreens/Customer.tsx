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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropertyDetails from './PropertyDetails';
import Entypo from 'react-native-vector-icons/Entypo'

interface Props {
  navigation: any;
}

const Customer: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
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
        <TouchableOpacity style={styles.addCustomerButton}>
          <AntDesign name="plus" color="white" size={20} />
          <Text style={styles.addCustomerText}>Add New Customer</Text>
        </TouchableOpacity>
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#073762" size={26} />
            <TextInput
              placeholder="Search for Customers"
              placeholderTextColor="#00092999"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name="sort-descending"
              color="white"
              size={20}
            />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/LetterA.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>valentino parker</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Phone Number"
          labelText="+91 - 9876543215"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Active"
          labelTextColor="#3c8500"
        />
        <PropertyDetails
          label="Recent Activity"
          labelText="Sell"
          labelTextColor="#111827"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/LetterA.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>valentino parker</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Phone Number"
          labelText="+91 - 9876543215"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Active"
          labelTextColor="#3c8500"
        />
        <PropertyDetails
          label="Recent Activity"
          labelText="Sell"
          labelTextColor="#111827"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/LetterA.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>valentino parker</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Phone Number"
          labelText="+91 - 9876543215"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Active"
          labelTextColor="#3c8500"
        />
        <PropertyDetails
          label="Recent Activity"
          labelText="Sell"
          labelTextColor="#111827"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/LetterA.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>valentino parker</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Phone Number"
          labelText="+91 - 9876543215"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Active"
          labelTextColor="#3c8500"
        />
        <PropertyDetails
          label="Recent Activity"
          labelText="Sell"
          labelTextColor="#111827"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/LetterA.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>valentino parker</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Phone Number"
          labelText="+91 - 9876543215"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Active"
          labelTextColor="#3c8500"
        />
        <PropertyDetails
          label="Recent Activity"
          labelText="Sell"
          labelTextColor="#111827"
        />
        <View style={styles.seperator} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Customer;

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
  addCustomerButton: {
    backgroundColor: '#073762',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    width: responsiveWidth(58),
    alignSelf: 'flex-end',
    marginTop: responsiveHeight(2.8),
    right: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCustomerText: {
    color: 'white',
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: responsiveWidth(66),
    backgroundColor: '#f7f7fd',
    paddingHorizontal: 16,
  },
  input: {
    fontSize: responsiveFontSize(1.6),
    left: responsiveWidth(2),
    width: responsiveWidth(56),
  },
  filterButton: {
    backgroundColor: '#073762',
    paddingHorizontal: 16,
    height: responsiveHeight(6.8),
    borderRadius: 10,
    width: responsiveWidth(22),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filterText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
    marginLeft: responsiveWidth(2),
  },
  propertyDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    marginBottom: responsiveHeight(2.8),
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bhkText: {
    color: '#111827',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
  },
  prestigeText: {
    color: '#5a5b78',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
  },
  buldingDataView: {
    left: responsiveWidth(2),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
});
