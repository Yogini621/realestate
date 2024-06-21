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
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {data6} from './data2';
import {Property} from '../redux/actions/actions';
import {addToFavorites} from '../redux/actions/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {
  navigation: any;
}

const PropertyListings2: React.FC<Props> = ({navigation}) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const dispatch = useDispatch();

  const handleAddToFavorites = (item: Property) => {
    dispatch(addToFavorites(item));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <Image source={require('../Images/Vector1.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.recommendedText}>Popular Properties</Text>
        <View style={styles.inputView1}>
          <TextInput placeholder="Search location" style={styles.input1} />
          <TouchableOpacity style={styles.searchIconButton}>
            <AntDesign name="search1" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {data6.map(item => (
          <View style={styles.itemView}>
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
                  <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
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
              <Text
                style={[
                  styles.locationText,
                  {marginBottom: responsiveHeight(2)},
                ]}>
                {item.location}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.bottomview} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyListings2;

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
  recommendedText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveScreenFontSize(3.4),
    textAlign: 'center',
    marginTop: responsiveHeight(4),
  },
  inputView1: {
    height: responsiveHeight(8.4),
    width: responsiveWidth(90),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: responsiveHeight(3.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(3.8),
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
  bottomview: {
    marginBottom: responsiveHeight(10),
  },
});
