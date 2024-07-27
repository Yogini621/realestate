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
import {data} from '../Screens/data';

interface Props {
  navigation: any;
}

const Property: React.FC<Props> = ({navigation}) => {
  const [openDrafts, setOpenDrafts] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CustomerStackScreen', {
                  screen: 'MenuPageSeller',
                })
              }>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" testID='menu'/>
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#073762"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Images/user.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.inputView}>
          <AntDesign name="search1" size={20} color="#c2c3cb" />
          <TextInput
            placeholder="Search..."
            style={styles.input}
            placeholderTextColor="#c2c3cb"
          />
        </View>
        <View style={styles.propertyListAndIconView}>
          <Text style={styles.propertyListText}>Property List</Text>
          <View style={styles.draftButtonView}>
            <TouchableOpacity
              style={styles.draftButton}
             >
              <Text style={styles.draftsText}>Drafts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.plusIconButton}
              onPress={() =>
                navigation.navigate('SellerStackScreen', {screen: 'SellerSell'})
              }>
              <Entypo name="plus" color="white" size={16} testID='seller'/>
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
        <View>
          {data.map(item => (
            <View style={styles.itemView} key={item.id}>
              <View style={styles.directionView}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.descriptionView}>
                  <Text style={styles.roomsText}>{item.rooms}</Text>
                  <View style={styles.locationView}>
                    <Entypo name="location-pin" size={14} color="#11142d" />
                    <Text style={styles.locationText}>{item.location}</Text>
                  </View>
                  <View style={styles.iconView1}>
                    <View style={styles.numberView}>
                      <Ionicons name="bed-outline" size={14} color="#073762" />
                      <Text style={styles.numberText}>4</Text>
                    </View>
                    <View style={styles.numberView}>
                      <FontAwesome5 name="bath" size={14} color="#073762" />
                      <Text style={styles.numberText}>2</Text>
                    </View>
                    <View style={styles.numberView}>
                      <FontAwesome5
                        name="bath"
                        size={14}
                        style={styles.icon}
                        color="#073762"
                      />
                      <Text
                        style={[
                          styles.numberText,
                          {marginLeft: responsiveWidth(2)},
                        ]}>
                        6x8 m²
                      </Text>
                    </View>
                  </View>
                  <View style={styles.rentView}>
                    <Text style={styles.rentText}>$ {item.rent}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
    width: responsiveWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginBottom: responsiveHeight(2),
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
    width: responsiveWidth(32),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2),
  },
  numberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
    left: responsiveWidth(1.6),
  },
  icon: {
    left: responsiveWidth(3.2),
  },
  rentView: {
    backgroundColor: '#073762',
    borderRadius: 8,
    width: responsiveWidth(20),
    height: responsiveHeight(4.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2.8),
  },
  roomsText: {
    color: '#323142',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2.2),
  },
  locationView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    alignItems: 'center',
  },
  locationText: {
    color: '#808191',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
  },
  rentText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  directionView: {
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(22),
    width: responsiveWidth(46),
    borderRadius: 10,
  },
  itemView: {
    alignSelf: 'center',
    width: responsiveWidth(90),
    margin: 10,
  },
  descriptionView: {
    left: responsiveWidth(4),
  },
});
