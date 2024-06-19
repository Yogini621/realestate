import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import RangeSlider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import {RadioButton} from 'react-native-paper';

const FiltersScreen = () => {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const [modalVisible, setModalVisible] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleValueChange = useCallback(
    (low: React.SetStateAction<number>, high: React.SetStateAction<number>) => {
      setMinPrice(low);
      setMaxPrice(high);
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ScrollView>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="close" size={22} />
            </TouchableOpacity>
            <Text style={styles.filterText}>Filters</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.detectLocationText}>Detect my location</Text>
          <View style={styles.locationIconView}>
            <MaterialIcons name="my-location" color="#073762" size={28} />
            <Text style={styles.myLocationText}>Pick My Location</Text>
          </View>
          <Text style={styles.detectLocationText}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Location"
            placeholderTextColor="#000000"
          />
          <Text style={styles.detectLocationText}>When</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input1}
              placeholder="Select Move-in Date"
              placeholderTextColor="#000000"
            />
            <MaterialCommunityIcons
              name="calendar-month"
              color="#073762"
              size={20}
            />
          </View>
          <Text style={styles.priceRangeText}>Price Range</Text>
          <Image source={require('../Images/Range.png')} style={styles.image} />
          <RangeSlider
            max={1234567}
            min={100}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
            style={styles.slider}
          />
          <View style={styles.priceDirectionView}>
            <Text style={styles.maxPrice}>${minPrice}</Text>
            <Text style={styles.minPrice}>${maxPrice}</Text>
          </View>

          <Text style={styles.priceRangeText}>Property Type</Text>
          <View style={styles.radioButtonVew}>
            <RadioButton value="" color="#073762" />
            <Text style={styles.commercialText}>Commercial</Text>
          </View>
          <View style={styles.radioButtonVew}>
            <RadioButton value="Commercial" color="#073762" />
            <Text style={styles.commercialText}>Residential</Text>
          </View>
          <View style={styles.buttonView}>
            <View style={styles.buttonDirectionView}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.activeButton}>
                <Text style={styles.activeButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};
export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4faff',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
    left: responsiveWidth(12),
  },
  filterText: {
    color: '#100a55',
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(28),
    fontSize: responsiveFontSize(1.8),
  },
  line: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(90),
    backgroundColor: '#9fc5e9',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  detectLocationText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(1.8),
    left: responsiveWidth(5.2),
  },
  locationIconView: {
    flexDirection: 'row',
    width: responsiveWidth(42),
    justifyContent: 'space-between',
    alignItems: 'center',
    left: responsiveWidth(8),
    marginTop: responsiveHeight(1),
  },
  myLocationText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans j',
  },
  input: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderWidth: 0.8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.2),
    borderColor: '#636363',
    padding: 20,
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  inputView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    borderWidth: 0.8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.2),
    borderColor: '#636363',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input1: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  priceRangeText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(5.8),
    marginTop: responsiveHeight(2.2),
  },
  priceDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  slider: {
    width: responsiveWidth(94),
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },
  image: {
    alignSelf: 'center',
    marginTop: responsiveHeight(60),
    position: 'absolute',
  },
  maxPrice: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.6),
  },
  minPrice: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2.6),
  },
  radioButtonVew: {
    flexDirection: 'row',
    alignItems: 'center',
    left: responsiveWidth(4),
  },
  commercialText: {
    fontFamily: 'PlusJakartaSans j',
    color: '#000000',
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(12),
    marginBottom: responsiveHeight(6),
    marginTop: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(78),
    alignItems: 'center',
  },
  button: {
    height: responsiveHeight(7.2),
    backgroundColor: '#f7f7fd',
    width: responsiveWidth(36),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    height: responsiveHeight(7.2),
    backgroundColor: '#073762',
    width: responsiveWidth(36),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButtonText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
  },
  buttonText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
  },
});
