import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CircularProgress from 'react-native-circular-progress-indicator';

interface Props {
  count: string;
  peopertyText: string;
  percentage: number;
  monthText: string;
  progressColor: string;
}

export const PropertyDetailsAnalytics = (props: Props) => {
  return (
    <View style={styles.propertyView}>
      <View style={styles.progressView}>
        <Text style={styles.countText}>2,356</Text>
        <CircularProgress
          value={props.percentage}
          inActiveStrokeColor={'#f2f6fc'}
          inActiveStrokeOpacity={0.8}
          progressValueColor={'#f2f6fc'}
          radius={20}
          activeStrokeWidth={8}
          inActiveStrokeWidth={4}
          activeStrokeColor={props.progressColor}
        />
      </View>
      <View style={styles.propertiesTextView}>
        <Text style={styles.propertiesText}>{props.peopertyText}</Text>
        <Text style={styles.monthText}>{props.monthText}</Text>
      </View>
    </View>
  );
};
export default PropertyDetailsAnalytics;
const styles = StyleSheet.create({
  countText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  propertyView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 14,
    margin: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  propertiesText: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  monthText: {
    color: '#2e2e2e80',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
  },
  progressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  propertiesTextView: {
    marginTop: responsiveHeight(1),
    right: responsiveWidth(2),
    marginBottom: responsiveHeight(1),
  },
});
