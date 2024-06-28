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
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {
  navigation: any;
}

const Property: React.FC<Props> = ({navigation}) => {
  const drafts = useSelector((state: RootState) => state.drafts.drafts);
  const [openDrafts, setOpenDrafts] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.inputView}>
        <AntDesign name="search1" size={20} color="#c2c3cb" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#c2c3cb"
        />
      </View>
      <View style={styles.propertyListAndIconView}>
        <Text style={styles.propertyListText}>Property List</Text>
        <View style={styles.draftButtonView}>
          <TouchableOpacity
            style={styles.draftButton}
            onPress={() => setOpenDrafts(true)}>
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plusIconButton}
            onPress={() => navigation.navigate('Sell')}>
            <Entypo name="plus" color="white" size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons
              name="sort-descending"
              color="#073762"
              size={16}
            />
          </TouchableOpacity>
        </View>
      </View>
      {openDrafts && (
        <View>
          {drafts.map(item => (
            <View>
              <Image source={item.image} />
              <View>
                <Text style={styles.roomsText}>{item.rooms}</Text>
                <View style={styles.locationView}>
                  <Entypo name="location-pin" size={16} color="#11142d" />
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <View style={styles.iconView1}>
                  <View style={styles.numberView}>
                    <Ionicons name="bed-outline" size={22} color="#073762" />
                    <Text style={styles.numberText}>4</Text>
                  </View>
                  <View style={styles.numberView}>
                    <FontAwesome5 name="bath" size={18} color="#073762" />
                    <Text style={styles.numberText}>2</Text>
                  </View>
                  <View style={styles.numberView}>
                    <FontAwesome5
                      name="bath"
                      size={18}
                      style={styles.icon}
                      color="#073762"
                    />
                    <Text
                      style={[styles.numberText, {left: responsiveWidth(4.8)}]}>
                      6x8 m²
                    </Text>
                  </View>
                </View>
                <View style={styles.rentView}>
                  <Text style={styles.rentText}>{item.rent}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Property;

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
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4faff',
    height: responsiveHeight(6.8),
    width: responsiveWidth(90),
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  input: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    backgroundColor: '#f4faff',
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(2),
  },
  propertyListAndIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  draftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(46),
    alignItems: 'center',
  },
  propertyListText: {
    color: '#1a202c',
    fontSize: responsiveHeight(2),
    fontFamily: 'PlusJakartaSans a',
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#073762',
    height: responsiveHeight(5.6),
    width: responsiveScreenWidth(20),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draftsText: {
    color: '#073762',
    fontSize: responsiveHeight(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  plusIconButton: {
    backgroundColor: '#073762',
    height: responsiveHeight(5.6),
    width: responsiveScreenWidth(10.8),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortIconButton: {
    backgroundColor: '#f4faff',
    height: responsiveHeight(5.6),
    width: responsiveWidth(10.8),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  numberView: {
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(6.8),
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(1.6),
  },
  icon: {
    left: responsiveWidth(3.2),
  },
  rentView: {
    backgroundColor: '#073762',
    borderRadius: 8,
    width: responsiveWidth(20),
    height: responsiveHeight(4.8),
  },
  roomsText: {
    color: '#323142',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  locationView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  locationText: {
    color: '#808191',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.6),
  },
  rentText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.8),
  },
});
