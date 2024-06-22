import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {Property} from '../redux/actions/actions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {removeAllFromFavorites, removeFavorites} from '../redux/actions/actionTypes';

interface Props {
  navigation: any;
}

const Favorites: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const handleRemoveFromFavorites = (item: Property) => {
    dispatch(removeFavorites(item));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllFromFavorites())
  }

  const renderItems = ({item}: {item: Property}) => {
    return (
      <View>
        <View style={styles.itemView} key={item.id}>
          <Image source={item.image} style={styles.image} />
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
                  onPress={() => handleRemoveFromFavorites(item)}>
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
            <Text style={styles.locationText}>{item.location}</Text>
            <View style={styles.line} />
            <View style={styles.iconView}>
              <View style={styles.roomView}>
                <Ionicons name="bed-outline" size={20} />
                <Text style={styles.bedText}>3 Beds</Text>
              </View>
              <View style={styles.roomView}>
                <Ionicons name="bed-outline" size={20} />
                <Text style={styles.bedText}>2Bathrooms</Text>
              </View>
              <View style={styles.roomView}>
                <Ionicons name="bed-outline" size={20} />
                <Text style={styles.bedText}>5x7 m²</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <Image source={require('../Images/Vector1.png')} />
          <View style={styles.iconView1}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.inputView}>
        <AntDesign
          name="search1"
          size={28}
          color="#073762"
          style={styles.icon1}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#100a55"
        />
      </View>
      <View style={styles.filterView}>
        <View style={styles.showingAllView}>
          <TouchableOpacity style={styles.showingAllView}>
            <Text style={styles.showingAllTxt}>Showing all</Text>
            <Entypo name="chevron-down" size={18} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.removeIconView}>
          <View style={styles.sortIconView}>
            <TouchableOpacity>
              <Octicons name="sort-asc" size={18} color="#9b9b9b" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveAll}>
              <MaterialIcons name="delete-outline" color="red" size={20} />
              <Text style={styles.removeAllText}>Remove all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList data={favorites} renderItem={renderItems} />
    </SafeAreaView>
  );
};
export default Favorites;

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
  iconView1: {
    width: responsiveWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemView: {
    flex: 1,
    alignSelf: 'center',
    margin: 8,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: responsiveWidth(90),
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
  ownerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  line: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(84),
    backgroundColor: '#9fc5e9',
    marginBottom: responsiveWidth(2.8),
    alignSelf: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginBottom: responsiveHeight(2.8),
    alignSelf: 'center',
    alignItems: 'center',
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
  inputView: {
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    margin: responsiveWidth(2.8),
  },
  input: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    width: responsiveWidth(60),
    color: '#100a55',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2.8),
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(2.8),
  },
  showingAllView: {
    height: responsiveHeight(5.8),
    width: responsiveWidth(32),
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  showingAllTxt: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    margin: 5,
  },
  sortIconView: {
    height: responsiveHeight(5.8),
    width: responsiveWidth(10),
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeIconView: {
    flexDirection: 'row',
    width: responsiveWidth(43.5),
    justifyContent: 'space-between',
  },
  deleteButton: {
    height: responsiveHeight(5.8),
    width: responsiveWidth(32),
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  removeAllText: {
    color: 'red',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    margin: 5,
  },
});
