import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

interface Props {
  headerText: string;
  feature1: string;
  feature2: string;
  feature3?: string;
  feature4?: string;

}

const TermsComponents = (props:Props) => {
  return (
    <View>
      <Text style={styles.headerText}>{props.headerText} </Text>
      <Text style={styles.featureText}>{props.feature1} </Text>
      <Text style={styles.featureText}>{props.feature2} </Text>
      <Text style={styles.featureText}>{props.feature3} </Text>
      <Text style={styles.featureText}>{props.feature4} </Text>
    </View>
  );
}

export default TermsComponents

const styles = StyleSheet.create({
  headerText: {
    color: '#073762',
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  featureText: {
    color: '#073762cc',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 31,
  },
});