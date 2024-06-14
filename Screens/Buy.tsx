import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'

interface Props {
  navigation: any;
}

const Buy: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <Image source={require('../Images/Vector.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
            <FontAwesome5 name="grip-lines" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.searchText}>Search properties to buy</Text>
      <TouchableOpacity style={styles.discoverButton}>
        <Feather name="globe" color="white" size={20} />
        <Text style={styles.buttonText}>Discover More</Text>
      </TouchableOpacity>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search with Search Bar"
          placeholderTextColor="#100a55"
        />
        <TouchableOpacity style={styles.circle}>
          <AntDesign name="down" color="#073762" size={14} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView1}>
        <TextInput placeholder="Search location" style={styles.input1} />
        <TouchableOpacity style={styles.searchIconButton}>
          <AntDesign name="search1" color="white" size={20} />
        </TouchableOpacity>
      </View>
      <View style = {styles.recommendedPropertiesView}>
        <View>
          <Text style={styles.recommendedText}>Recommended Properties</Text>
          <Text style = {styles.curatedText}>Curated especially for you</Text>
        </View>
        <TouchableOpacity style = {styles.moreButton}>
          <Text style = {styles.moreText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Buy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4faff',
  },
  headerView: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    elevation: 1,
    justifyContent: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
  },
  searchText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveScreenFontSize(3.4),
    textAlign: 'center',
    marginTop: responsiveHeight(4),
  },
  discoverButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(48),
    height: responsiveHeight(6),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans a',
    color: 'white',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(2),
  },
  inputView: {
    height: responsiveHeight(7.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e0def7',
    marginTop: responsiveHeight(4.4),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  circle: {
    height: responsiveHeight(2.8),
    width: responsiveWidth(4.8),
    backgroundColor: '#e0def7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: responsiveWidth(4),
  },
  inputView1: {
    height: responsiveHeight(8.4),
    width: responsiveWidth(90),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: responsiveHeight(2.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIconButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(12),
    borderRadius: 8,
    height: responsiveHeight(6.8),
    alignItems: 'center',
    justifyContent: 'center',
    right: responsiveWidth(4),
  },
  input1: {
    padding: 10,
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
  },
  recommendedPropertiesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  recommendedText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  curatedText: {
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
  },
  moreButton: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(26),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height:responsiveHeight(6.8)
  },
  moreText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
});
