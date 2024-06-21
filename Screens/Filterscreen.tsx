import {
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
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBoxComponent from './CheckBoxComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  navigation: any;
}

const Filterscreen: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Filterscreen</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.line} />
            <View style={styles.closeIconView}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={28} color="#e5e6eb" />
              </TouchableOpacity>
              <Text style={styles.filtersText}>Filters</Text>
            </View>
            <View style={styles.line1} />
            <View style={styles.typeAndStatusView}>
              <View style={styles.diretionView}>
                <View style={styles.typeView}>
                  <Text style={styles.typeText}>Type</Text>
                  <TouchableOpacity>
                    <FontAwesome name="sort-up" color="#000000" size={16} />
                  </TouchableOpacity>
                </View>
                <CheckBoxComponent text="Residential" />
                <CheckBoxComponent text="Commercial" />
                <CheckBoxComponent text="Industrial" />
                <CheckBoxComponent text="Vacant" />
                <View style={styles.line2} />
                <View style={styles.typeView}>
                  <Text style={styles.typeText}>Status</Text>
                  <TouchableOpacity>
                    <FontAwesome name="sort-up" color="#000000" size={16} />
                  </TouchableOpacity>
                </View>
                <CheckBoxComponent text="All" />
                <CheckBoxComponent text="Rent" />
                <CheckBoxComponent text="Sell" />
                <View style={styles.line2} />
                <Text style={styles.typeText1}> Detect my location</Text>
                <TouchableOpacity style={styles.locationIconView}>
                  <MaterialIcons name="my-location" color="#073762" size={26} />
                  <Text style={styles.locationText}>Pick My Location</Text>
                </TouchableOpacity>
                <Text style={styles.typeText}>Location</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#000000"
                  placeholder="Enter Location"
                />
                <View style={styles.line2} />
                <View style={styles.typeView}>
                  <Text style={styles.typeText}>Sub Categories</Text>
                  <TouchableOpacity>
                    <FontAwesome name="sort-up" color="#000000" size={16} />
                  </TouchableOpacity>
                </View>
                <CheckBoxComponent text="1 BHK" />
                <CheckBoxComponent text="2 BHK" />
                <CheckBoxComponent text="3 BHK" />
                <CheckBoxComponent text="4 BHK" />
                <CheckBoxComponent text="More than 4" />
                <View style={styles.line2} />
                <View style={styles.typeView}>
                  <Text style={styles.typeText}>Price</Text>
                  <TouchableOpacity>
                    <FontAwesome name="sort-up" color="#000000" size={16} />
                  </TouchableOpacity>
                </View>
                <View style={styles.priceView}>
                  <View>
                    <Text style={styles.typeText}>Min Price</Text>
                    <TextInput style={styles.priceInput} placeholder="2K" />
                  </View>
                  <View>
                    <Text style={styles.typeText}>Max Price</Text>
                    <TextInput style={styles.priceInput} placeholder="2L" />
                  </View>
                </View>
              </View>
              <View style={styles.buttonView1}>
                <View style={styles.buttonDirectionView}>
                  <TouchableOpacity style={styles.resetButton}>
                    <Text style={styles.buttonTxt}>Reset</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.activeButton}>
                    <Text style={styles.activeButtonText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Filterscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalView: {
    height: responsiveScreenHeight(80),
    top: 0,
    marginTop: responsiveScreenHeight(7),
    backgroundColor: '#ffffff',
    elevation: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 6,
    width: 60,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#e5e6eb',
    marginTop: responsiveHeight(2),
  },
  filtersText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(32),
  },
  closeIconView: {
    flexDirection: 'row',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  line1: {
    height: responsiveHeight(0.3),
    backgroundColor: '#9fc5e9',
    marginTop: responsiveHeight(2),
  },
  typeAndStatusView: {
    backgroundColor: '#f4faff',
    width: responsiveWidth(80),
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    height: responsiveHeight(190),
  },
  typeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  typeText: {
    color: '#222222',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  line2: {
    backgroundColor: '#e5e6eb',
    height: responsiveHeight(0.2),
    width: responsiveWidth(66),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
    right: responsiveWidth(3.2),
  },
  diretionView: {
    marginLeft: responsiveWidth(8),
  },
  typeText1: {
    color: '#222222',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    marginTop: responsiveHeight(4),
  },
  locationIconView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    left: responsiveHeight(2),
  },
  locationText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
    marginBottom: responsiveHeight(2.8),
  },
  input: {
    height: responsiveHeight(8),
    width: responsiveWidth(64),
    borderColor: '#636363',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: responsiveHeight(2),
    padding: 10,
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    borderWidth: 0.8,
    marginBottom: responsiveHeight(2),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(64.8),
  },
  priceInput: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(30),
    borderColor: '#636363',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: responsiveHeight(1),
    padding: 10,
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    borderWidth: 0.8,
    marginBottom: responsiveHeight(2),
  },
  buttonView1: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(13),
    elevation: 1,
    marginTop: responsiveHeight(3.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(76),
    alignSelf: 'center',
  },
  resetButton: {
    backgroundColor: '#f7f7fd',
    padding: 10,
    width: responsiveWidth(36),
    borderRadius: 8,
    alignItems: 'center',
    height: responsiveHeight(7.4),
  },
  buttonTxt: {
    color: '#073762',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  activeButton: {
    backgroundColor: '#073762',
    padding: 10,
    width: responsiveWidth(36),
    borderRadius: 8,
    alignItems: 'center',
    height: responsiveHeight(7.4),
  },
  activeButtonText: {
    color: '#f7f7fd',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
});
