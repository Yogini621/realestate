import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface Props {
  propertyType: string;
  propertyText: string;
  color?: string;
}

const PropertyPropsComponent = (props: Props) => {
  return (
    <View>
      <View style={styles.propertiesView}>
        <Text style = {styles.propertyTypeText}>{props.propertyType} </Text>
        <View style={styles.placeView}>
          <Text style = {[styles.propertyText,{color:props.color}]}>{props.propertyText} </Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyPropsComponent;

const styles = StyleSheet.create({
  propertiesView: {
   flexDirection: 'row',
    justifyContent: 'space-between',
    width:responsiveWidth(80),
    alignSelf:'center',
    marginTop:responsiveHeight(4)
  },
  placeView:{
    width:responsiveWidth(40)
  },
  propertyTypeText: {
    color: '#333333',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  propertyText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
  },
});
