import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface Props{
label:string;
labelText:string;
optionText?:string;
labelTextColor?:string;
}

const PropertyDetails = (props:Props) => {
  return (
    <View>
      <View style={styles.propertyView}>
        <Text style={styles.label}>{props.label}</Text>
        <View>
          <Text style={[styles.labelText,{color:props.labelTextColor}]}>
            {props.labelText}
          </Text>
          <Text style={styles.optionText}>{props.optionText}</Text>
        </View>
      </View>
    </View>
  );
}

export default PropertyDetails

const styles = StyleSheet.create({
  propertyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  label: {
    color: '#718096',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  labelText: {
    color: 'black',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.8),
  },
  optionText: {
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'flex-end',
    color :'#111827',
  },
});