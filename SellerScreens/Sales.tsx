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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropertyDetailsComponent from './PropertyDetailsComponent';

interface Props {
  navigation: any;
}

const Sales: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.salesText}>Sales</Text>
        <View style={styles.inputDirectionView}>
          <View style={styles.inputView}>
            <AntDesign name="search1" color="#3a52aa59" size={22} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#3a52aa59"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons name="sort" color="#1a202c" size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons name="sort" color="#1a202c" size={26} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Entypo name="plus" color="white" size={16} />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>3BHK 3Baths</Text>
              <Text style={styles.prestigeText}>
                in Prestige High Fields,Gachibowli
              </Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity>
              <AntDesign name="edit" color="#727272" size={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete-outline" color="#727272" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.propertyDetailsView}>
          <PropertyDetailsComponent
            label="Date"
            labelText="JUL 29,2023"
            optionText="At 8:00"
          />
          <PropertyDetailsComponent label="Payment" labelText="Check" />
          <PropertyDetailsComponent
            label="Amount"
            labelText="$30K"
            labelTextColor="#9ca8d4"
          />
          <PropertyDetailsComponent
            label="Status"
            labelText="Pending"
            labelTextColor="#9ca8d4"
          />
        </View>
        <View style={styles.seperator} />
        <View style={styles.propertyDataView}>
          <View style={styles.imageView}>
            <Image source={require('../Images/Rectangl.png')} />
            <View style={styles.buldingDataView}>
              <Text style={styles.bhkText}>3BHK 3Baths</Text>
              <Text style={styles.prestigeText}>
                in Prestige High Fields,Gachibowli
              </Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity>
              <AntDesign name="edit" color="#727272" size={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete-outline" color="#727272" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.propertyDetailsView}>
          <PropertyDetailsComponent
            label="Date"
            labelText="JUL 29,2023"
            optionText="At 8:00"
          />
          <PropertyDetailsComponent label="Payment" labelText="Check" />
          <PropertyDetailsComponent
            label="Amount"
            labelText="$30K"
            labelTextColor="#9ca8d4"
          />
          <PropertyDetailsComponent
            label="Status"
            labelText="Pending"
            labelTextColor="#9ca8d4"
          />
        </View>
        <View style={styles.seperator} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sales;

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
  salesText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  inputView: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(50),
    borderWidth: 2,
    borderColor: '#073762',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  input: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
  },
  sortIconButton: {
    width: responsiveWidth(11.4),
    borderWidth: 2,
    borderColor: '#073762',
    borderRadius: 10,
    alignItems: 'center',
    height: responsiveHeight(7.2),
    justifyContent: 'center',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#073762',
    borderRadius: 8,
    height: responsiveHeight(7.2),
    width: responsiveWidth(14.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans j',
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
  iconView: {
    flexDirection: 'row',
    width: responsiveWidth(16),
    justifyContent: 'space-between',
  },
  propertyDetailsView: {},
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: '#9fc5e9',
    marginTop:responsiveHeight(1),
    marginBottom:responsiveHeight(1)
  },
});
