import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ProgressBar} from 'react-native-paper';

interface Props {
  productlabel: string;
  productText: string;
}

const Progressbar = (props: Props) => {
  return (
    <View>
      <View style={styles.productTextView}>
        <Text style={styles.labelText}>{props.productlabel} </Text>
        <Text style={styles.productText}>{props.productText} </Text>
      </View>
      <ProgressBar progress={0.3} style={styles.bar} color="#093761" />
    </View>
  );
};

export default Progressbar;

const styles = StyleSheet.create({
  productTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(74),
    alignSelf: 'center',
    marginTop: responsiveHeight(4.8),
    alignItems: 'center',
  },
  labelText: {
    color: '#273240',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'PlusJakartaSans j',
  },
  productText: {
    color: '#737b8b',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'PlusJakartaSans m',
  },
  bar: {
    width: responsiveWidth(76),
    marginTop: responsiveHeight(4),
    height: responsiveHeight(3.2),
    borderRadius: 20,
    alignSelf: 'center',
  },
});
