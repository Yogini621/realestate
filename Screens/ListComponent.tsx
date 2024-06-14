import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface Props{
 featureText:string;
 details:string
}

const ListComponent = (props:Props) => {
  return (
    <View>
      <View style={styles.featuresView}>
        <Text style={styles.listText}>{props.featureText}</Text>
        <Text style={styles.numberText1}>{props.details}</Text>
      </View>
    </View>
  );
}

export default ListComponent

const styles = StyleSheet.create({
  featuresView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop:responsiveHeight(2.8)
  },

  listText: {
    color: '#6c727f',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
  },
  numberText1: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.9),
    left: responsiveWidth(1.6),
  },
});