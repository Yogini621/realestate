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

const Messages: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.messagesText}>Messages</Text>
        <View style={styles.filterView}>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons
              name="export-variant"
              size={20}
              color="#1a202c"
            />
            <Text style={styles.filtersText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton1}>
            <AntDesign name="delete" size={20} color="#ff1c1c" />
            <Text style={styles.exportText}>Delete All</Text>
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
        <View style={styles.seperator} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;

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
  messagesText: {
    color: '#111827',
    fontSize: responsiveFontSize(3.2),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    width: responsiveWidth(52),
    right: responsiveWidth(6),
    marginTop: responsiveHeight(4),
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exportText: {
    color: '#ff1c1c',
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
    marginBottom: responsiveHeight(2),
  },
  input: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(80),
    left: responsiveWidth(2),
  },
  filterButton1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
