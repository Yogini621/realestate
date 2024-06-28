import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

interface Props {
  label: string;
  labelText: string;
  optionText?: string;
  labelTextColor?:string;
}

const PropertyDetailsComponent = (props: Props) => {
  return (
    <View>
      <View style={styles.propertyView}>
        <Text style = {styles.label}>{props.label}</Text>
        <View>
          <Text style = {[styles.labelText,{color:props.labelTextColor}]}>{props.labelText} </Text>
          <Text style = {styles.optionText}>{props.optionText}</Text>
        </View>
      </View>
    </View>
  );
};
export default PropertyDetailsComponent;

const styles = StyleSheet.create({
  propertyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop:responsiveHeight(1)
  },
  label: {
    color: '#073762',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  labelText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  optionText: {
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'flex-end',
    color: '#9ca8d4',
  },
});
