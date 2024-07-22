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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import PropertyDetails from './PropertyDetails';

interface Props {
  navigation: any;
}

const Properties: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.propertiesText}>Properties</Text>
        <View style={styles.filterView}>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name="export-variant"
              size={20}
              color="#1a202c"
            />
            <Text style={styles.filtersText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name="export-variant"
              size={20}
              color="#1a202c"
            />
            <Text style={styles.exportText}>Exports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <AntDesign name="search1" color="#3a52aa59" size={26} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#3a52aa59"
            style={styles.input}
          />
        </View>
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>The Stars Hotels</Text>
              <Text style={styles.prestigeText}>Miyapur,Hyderabad </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Customer"
          labelText="Venkatesh"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Date"
          labelText="JUL 29,2023"
          optionText="At 8:00 PM"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Property ID"
          labelText="PMX09812"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Price"
          labelText="$30 L"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Pending"
          labelTextColor="#839bb1"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>The Stars Hotels</Text>
              <Text style={styles.prestigeText}>Miyapur,Hyderabad </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Customer"
          labelText="Venkatesh"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Date"
          labelText="JUL 29,2023"
          optionText="At 8:00 PM"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Property ID"
          labelText="PMX09812"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Price"
          labelText="$30 L"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Sold"
          labelTextColor="#073762"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>The Stars Hotels</Text>
              <Text style={styles.prestigeText}>Miyapur,Hyderabad </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Customer"
          labelText="Venkatesh"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Date"
          labelText="JUL 29,2023"
          optionText="At 8:00 PM"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Property ID"
          labelText="PMX09812"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Price"
          labelText="$30 L"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Approved"
          labelTextColor="#37d159"
        />
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>The Stars Hotels</Text>
              <Text style={styles.prestigeText}>Miyapur,Hyderabad </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" color="#727272" size={20} />
          </TouchableOpacity>
        </View>
        <PropertyDetails
          label="Customer"
          labelText="Venkatesh"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Date"
          labelText="JUL 29,2023"
          optionText="At 8:00 PM"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Property ID"
          labelText="PMX09812"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Price"
          labelText="$30 L"
          labelTextColor="#111827"
        />
        <PropertyDetails
          label="Status"
          labelText="Approved"
          labelTextColor="#37d159"
        />
        <View style={styles.seperator} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Properties;

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
  propertiesText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(3.2),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(2),
    left: responsiveWidth(6),
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    width: responsiveWidth(44),
    right: responsiveWidth(6),
    marginTop: responsiveHeight(4),
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exportText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  filtersText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  inputView: {
    borderWidth: 2,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2.9),
    height: responsiveHeight(8),
    borderRadius: 18,
    borderColor: '#1a202c',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(80),
    left: responsiveWidth(2),
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
  },
  bhkText: {
    color: '#111827',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
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
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
});
