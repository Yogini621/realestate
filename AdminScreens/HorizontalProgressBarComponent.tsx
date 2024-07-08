import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { ProgressBar } from 'react-native-paper';

interface Props {
  prcentage: number;
  place: string;
  unit: number;
}

const HorizontalProgressBarComponent = (props:Props) => {
  return (
    <View>
      <View style={styles.placeDirectionView}>
        <Text style={styles.placeText}>{props.place}</Text>
        <Text style={styles.unitText}>{props.unit} Unit </Text>
      </View>
      <ProgressBar progress={props.prcentage} style={styles.bar} color="#093761" />
    </View>
  );
};

export default HorizontalProgressBarComponent;

const styles = StyleSheet.create({
  placeDirectionView: {
    flexDirection: 'row',
    width: responsiveWidth(46),
    left: responsiveWidth(8),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
  },
  placeText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans m',
  },
  unitText: {
    color: '#00000080',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
    left:responsiveWidth(4.8)
  },
  bar: {
    width: responsiveWidth(40),
    left: responsiveWidth(8),
    marginTop:responsiveHeight(2),
    height:responsiveHeight(1.4),
    borderRadius:20,
    marginBottom:responsiveHeight(2)
  },
});
