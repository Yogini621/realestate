import 'react-native-gesture-handler';
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
import {
  addToFavorites,
  fetchProperties,
  removeFavorites,
} from '../redux/actions/actionTypes';
import {Property} from '../redux/actions/actions';
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

  // const handleAddToFavorites = (item: Property) => {
  //   dispatch(addToFavorites(item));
  // };

  const handleAddToFavorites = (item: Property) => {
    console.log(item);
    if (favorites.includes(item)) {
      console.log('item Removed');
      dispatch(removeFavorites(item));
    } else {
      console.log('item Added');
      dispatch(addToFavorites(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
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
        {Properties.map(item => {
          return (
            <View style={styles.itemView} key={item.id}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PropertyDetails', {item})}>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.descriptionView}>
                <View style={styles.popularTextView}>
                  <View style={styles.popularTextDirectionView}>
                    <Ionicons name="sparkles" color="white" size={16} />
                    <Text style={styles.popularText}>POPULAR</Text>
                  </View>
                </View>
                <View style={styles.favoriteIconView}>
                  <View>
                    <View style={styles.rupeeView}>
                      <FontAwesome5
                        name="rupee-sign"
                        color="#073762"
                        size={20}
                        style={styles.icon}
                      />
                      <Text style={styles.rentText}>{item.rent}</Text>
                    </View>
                    <Text style={styles.roomsText}>{item.rooms}</Text>
                  </View>
                  <View style={styles.circle1}>
                    <TouchableOpacity
                      onPress={() => handleAddToFavorites(item)}>
                      <AntDesign
                        name={
                          favorites.find(
                            favoriteItem => item.id === favoriteItem.id,
                          )
                            ? 'heart'
                            : 'hearto'
                        }
                        color={
                          favorites.find(
                            favoriteItem => item.id === favoriteItem.id,
                          )
                            ? 'red'
                            : '#073762'
                        }
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.locationText}>{item.location}</Text>
                <View style={styles.line} />
                <View style={styles.iconView1}>
                  <View style={styles.roomView}>
                    <Ionicons name="bed-outline" size={20} color="#073762" />
                    <Text style={styles.bedText}>3</Text>
                  </View>
                  <View style={styles.roomView}>
                    <Ionicons name="bed-outline" size={20} color="#073762" />
                    <Text style={styles.bedText}>2</Text>
                  </View>
                  <View style={styles.roomView}>
                    <Ionicons name="bed-outline" size={20} color="#073762" />
                    <Text style={styles.bedText}>5x7 m²</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
    marginTop: responsiveHeight(3.4),
    textAlign: 'center',
  },
  discoverButton: {
    backgroundColor: '#073762',
    width: responsiveWidth(50),
    height: responsiveHeight(7.4),
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(8),
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans a',
    color: 'white',
    fontSize: responsiveFontSize(2),
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
    padding: 10,
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
    marginTop: responsiveHeight(2.4),
    marginBottom: responsiveHeight(4),
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
  imgView: {
    borderRadius: 10,
    borderColor: '#9fc5e9',
  },
  directionView: {
    borderWidth: 2,
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
    height: responsiveHeight(7),
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
  popularTextView: {
    backgroundColor: '#073762',
    width: responsiveWidth(40),
    borderRadius: 12,
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: responsiveHeight(-2.8),
    left: responsiveWidth(-3.2),
    // borderTopLeftRadius:20
  },
  popularText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans a',
  },
  itemView: {
    flex: 1,
    alignSelf: 'center',
    margin: 8,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descriptionView: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9fc5e9',
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  rentText: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
  },
  rupeeView: {
    flexDirection: 'row',
    alignItems: 'center',
    left: responsiveWidth(4),
  },
  roomsText: {
    color: '#073762',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
  },
  favoriteIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(84),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(1),
  },
  circle1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: responsiveHeight(1),
  },
  locationText: {
    color: '#9b9b9b',
    left: responsiveWidth(8),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    marginBottom: responsiveHeight(1),
  },
  locationText1: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  ownerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  line2: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(84),
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveWidth(2.8),
    alignSelf: 'center',
  },
  iconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(44),
    marginBottom: responsiveHeight(2.8),
    alignItems: 'center',
    left: responsiveWidth(6),
  },
  roomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bedText: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  bottomview: {
    marginBottom: responsiveHeight(10),
  },
  popularTextDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(22),
    alignItems: 'center',
  },
});
