import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface Props {
 iconName:string;
 iconColor:string;
 percentage:number;
 text:string;
 image:any
}

const PropertyGraphComponent = (props: Props) => {
  return (
    <View style={styles.propertyView}>
      <View style = {styles.percentageAndMonthTextView}>
        <View style = {styles.iconView}>
          <Text style = {styles.percentageText}>{props.percentage}% </Text>
          <AntDesign name={props.iconName} color={props.iconColor} size={9} />
        </View>
        <Text style = {styles.targetText}>{props.text} </Text>
      </View>
      <Image source={props.image} style = {styles.image} />
    </View>
  );
};

export default PropertyGraphComponent;

const styles = StyleSheet.create({
  propertyView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 14,
    margin: 5,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
  },
  percentageAndMonthTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(36),
    //     alignItems: 'center',
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2),
  },
  targetText: {
    width: responsiveWidth(20),
    color: '#000000',
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(3.8),
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
  },
  image:{
   width:responsiveWidth(36),
   resizeMode:'cover',
   marginTop:responsiveHeight(2)

  }
});
