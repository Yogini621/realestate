import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

interface Props{
 navigation:any;
}

const Property:React.FC<Props> = ({navigation}) => {
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
          <TouchableOpacity style={styles.draftButton}>
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusIconButton} onPress={() => navigation.navigate("Sell")}>
            <Entypo name="plus" color="white" size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortIconButton}>
            <MaterialCommunityIcons name="sort-descending" color="#073762" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Property

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
    alignItems:'center'
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
});