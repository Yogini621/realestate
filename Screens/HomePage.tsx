import 'react-native-gesture-handler';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {data} from './data';
import {addToFavorites, fetchProperties} from '../redux/actions/actionTypes';
import {Property} from '../redux/actions/actions';
import {FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FiltersScreen from './FiltersScreen';

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({navigation}) => {
  const Properties = useSelector(
    (state: RootState) => state.properties.properties,
  );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    handleFetchProperties();
  });

  const handleFetchProperties = () => {
    const response = data;
    dispatch(fetchProperties(response));
  };

  const handleAddToFavorites = (item: Property) => {
    dispatch(addToFavorites(item));
  };

  const renderItems = ({item}: {item: Property}) => {
    return (
      <View
        style={[styles.bestSellerView, {backgroundColor: 'white'}]}
        key={item.id}>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PropertyDetails', {item})}>
              <Image source={item.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.directionView}>
            <View style={styles.priceView}>
              <FontAwesome
                name="rupee"
                size={22}
                color="#073762"
                style={styles.icon}
              />
              <Text style={styles.rentText}>{item.rent}</Text>
              <Text style={styles.monthText}>/month</Text>
            </View>
            <View style={styles.circle}>
              <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
                <AntDesign
                  name={
                    favorites.find(favoriteItem => item.id === favoriteItem.id)
                      ? 'heart'
                      : 'hearto'
                  }
                  color={
                    favorites.find(favoriteItem => item.id === favoriteItem.id)
                      ? 'red'
                      : '#073762'
                  }
                  size={22}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.rentText1}>{item.rooms}</Text>
            <Text style={[styles.monthText, {left: responsiveWidth(4)}]}>
              {item.location}
            </Text>
            <View style={styles.line} />
            <View style={styles.iconsView}>
              <View style={styles.carIconView}>
                <AntDesign name="car" color="#073762" size={20} />
                <Text style={styles.numberText}>3</Text>
              </View>
              <View style={styles.carIconView}>
                <FontAwesome name="bathtub" color="#073762" size={20} />
                <Text style={styles.numberText}>2</Text>
              </View>
              <View style={styles.carIconView}>
                <Image source={require('../Images/SquareMeters.png')} />
                <Text style={styles.numberText}>5x7 m²</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <Image source={require('../Images/Vector1.png')} />
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
      <Text style={styles.headerText}>Search Properties to rent</Text>
      <TouchableOpacity
        style={styles.discoverButton}
        onPress={() => navigation.navigate('DiscoverMore')}>
        <Feather name="globe" color="white" size={20} />
        <Text style={styles.buttonText}>Discover More</Text>
      </TouchableOpacity>
      <View style={styles.searchBarView}>
        <View style={styles.passwordView}>
          <TextInput
            placeholder="Search location"
            style={styles.input1}
            placeholderTextColor="#9b9b9b"
          />
          <TouchableOpacity style={styles.searchIconView}>
            <AntDesign name="search1" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.filterIconView}
          onPress={() => setModalVisible(true)}>
          <AntDesign name="filter" color="white" size={20} />
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <FiltersScreen
          modalVisible={true}
          closeModal={() => setModalVisible(false)}
        />
      )}
      <FlatList data={Properties} renderItem={renderItems} />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4faff',
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
  headerText: {
    color: '#073762',
    fontSize: responsiveFontSize(3.2),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  discoverButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(60),
    height: responsiveHeight(6),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(8),
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans j',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    left: responsiveWidth(2),
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(80),
    elevation: 2,
    height: responsiveHeight(8),
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },

  input1: {
    width: responsiveWidth(66),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    fontFamily: 'PlusJakartaSans j',
  },
  searchIconView: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 8,
    height: responsiveHeight(6),
    width: responsiveWidth(10),
  },
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  filterIconView: {
    backgroundColor: '#073762',
    padding: 10,
    borderRadius: 8,
    height: responsiveHeight(6.8),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(4.8),
    marginLeft: responsiveWidth(4),
  },
  rentText: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans c',
  },
  rentText1: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans c',
    marginLeft: responsiveWidth(4),
  },
  monthText: {
    color: '#9fc5e9',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'PlusJakartaSans j',
  },
  icon: {
    marginTop: responsiveHeight(1.2),
  },
  bestSellerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imgView: {
    borderRadius: 10,
    borderColor: '#9fc5e9',
  },
  directionView: {
    borderWidth: 1,
    borderRadius: 8,
    borderTopWidth: 0,
    borderColor: '#9fc5e9',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  line: {
    backgroundColor: '#9fc5e9',
    height: responsiveHeight(0.2),
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2.2),
    marginBottom: responsiveHeight(2.2),
    alignSelf: 'center',
  },
  carIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2.2),
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(50),
    left: responsiveWidth(6),
    marginBottom: responsiveHeight(2),
  },
  favoritesIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    alignItems: 'center',
  },
  circle: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(14),
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 50,
    top: 30,
  },
  headerView1: {
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
  line1: {
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
  input2: {
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
  image1: {
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
  buttonText1: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
  },
  modalView: {
    backgroundColor: '#f4faff',
    height: responsiveHeight(72),
    position: 'absolute',
    bottom: 0,
    width: responsiveWidth(100),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
