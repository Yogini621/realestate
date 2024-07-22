import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  icon: any;
  componentText: string;
  onPress: () => void;
}

const SellerComponent = (props: Props) => {
  
  const SellerComponentData = [
    {id: 1, option: 'Property', icon: 'compass'},
    {id: 2, option: 'Tenants', icon: 'compass'},
    {id: 3, option: 'Sales', icon: 'compass'},
    {id: 4, option: 'Messages', icon: 'compass'},
    {id: 5, option: 'Profile', icon: 'compass'},
    {id: 6, option: 'Get Help', icon: 'compass'},
    {id: 7, option: 'Settings', icon: 'compass'},
  ];

  return (
    <View>
      <TouchableOpacity style={styles.componentButton} onPress={props.onPress}>
        <Entypo name={props.icon} size={20} color="#718096" />
        <Text style={styles.componentText}>{props.componentText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SellerComponent;
const styles = StyleSheet.create({
  componentButton: {
    width: responsiveWidth(60),
    alignSelf: 'center',
    height: responsiveHeight(6.8),
    borderRadius: 10,
    marginTop: responsiveHeight(1.8),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  componentText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2.8),
  },
});
