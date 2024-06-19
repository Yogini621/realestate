import {
  Image,
  SafeAreaView,
  ScrollView,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { data7} from './data2';
import {Property} from '../redux/actions/actions';
import {addToFavorites} from '../redux/actions/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {
  navigation: any;
}

const SwipeUp: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const handleAddToFavorites = (item: Property) => {
    dispatch(addToFavorites(item));
    navigation.navigate('Favorites');
  };
  
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.headerView1}>
          <View style={styles.homeAndSortIconView}>
            <View style={styles.homeAndSearchView}>
              <Text style={styles.homeText}>Home</Text>
              <FontAwesome5
                name="chevron-right"
                color="#9b9b9b"
                size={16}
                style={styles.icon2}
              />
              <Text style={styles.searchText}>Search</Text>
            </View>
            <View style={styles.sortIconView}>
              <TouchableOpacity>
                <AntDesign name="right" color="#9b9b9b" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputView}>
            <Feather name="search" color="#073762" size={28} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#8f8da6"
              style={styles.input}
            />
          </View>
        </View>
        <View>
          {data7.map(item => (
            <View style={styles.itemView} key={item.id}>
              <Image source={item.image} />
              <View style={styles.descriptionView}>
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
                        size={20}
                        color={
                          favorites.find(
                            favoriteItem => item.id === favoriteItem.id,
                          )
                            ? 'red'
                            : '#073762'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.locationText}>{item.location} </Text>
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
          ))}
        </View>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapsText}>Open Maps</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwipeUp;

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
  homeAndSortIconView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2.4),
    marginHorizontal: responsiveWidth(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(90),
  },
  homeAndSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortIconView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    padding: 10,
    borderRadius: 8,
  },
  homeText: {
    color: '#8f8da6',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    fontWeight: '600',
  },
  searchText: {
    color: '#100a55',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    fontWeight: '600',
    left: responsiveWidth(2),
  },
  icon2: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  inputView: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e0def7',
    borderRadius: 8,
    marginTop: responsiveHeight(2.4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7f7fd',
    marginBottom: responsiveHeight(4),
  },
  input: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
  },
  headerView1: {
    backgroundColor: '#ffffff',
    elevation: 1,
    marginTop: responsiveHeight(0.2),
    marginBottom: responsiveHeight(2),
  },
  itemView: {
    alignSelf: 'center',
    margin: 8,
    left: responsiveWidth(3.8),
  },
  descriptionView: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#e8e6f9',
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
  },
  roomsText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
  },
  favoriteIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(70),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(1),
  },
  circle1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e8e6f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: responsiveHeight(1),
  },
  locationText: {
    color: '#9b9b9b',
    left: responsiveWidth(4.4),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    marginBottom: responsiveHeight(1),
  },
  locationText1: {
    color: '#9b9b9b',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
  line: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(72),
    backgroundColor: '#e8e6f9',
    marginBottom: responsiveWidth(3),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.4),
  },
  iconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(50),
    marginBottom: responsiveHeight(2.8),
    alignItems: 'center',
    left: responsiveWidth(4.8),
  },
  roomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bedText: {
    color: '#000929',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
    left: responsiveWidth(2),
  },
  bottomview: {
    marginBottom: responsiveHeight(10),
  },
  mapButton: {
    backgroundColor: '#100a55',
    padding: 10,
    width: responsiveWidth(42),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(6),
    borderRadius: 8,
    height: responsiveHeight(6.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapsText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
});
