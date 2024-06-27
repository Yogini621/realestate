import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';


interface Props {
  icon: any;
  componentText: string;
  onPress:() => void
}

const SellerComponent = (props: Props) => {
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
//     backgroundColor: '#073762',
  },
  componentText: {
    color: '#718096',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left: responsiveWidth(2.8),
  },
});
