import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ProgressBar} from 'react-native-paper';

interface Props {
  saleText: string;
  increaseText: string;
  income: string;
  progressPercentage: number;
  iconBackgroundColor: string;
  progressBarColor: string;
}

const ProgressBarComponent = (props: Props) => {
  return (
    <View style={styles.propertyView}>
      <View style={styles.iconDirectionView}>
        <View
          style={[
            styles.iconView,
            {backgroundColor: props.iconBackgroundColor},
          ]}></View>
        <View style={styles.saleTextView}>
          <Text style={styles.salesText}>{props.saleText}</Text>
          <Text style={styles.increaseText}>{props.increaseText}</Text>
        </View>
        <Text style={styles.percentageText}>{props.income}</Text>
      </View>
      <ProgressBar
        progress={props.progressPercentage}
        style={styles.bar}
        color={props.progressBarColor}
      />
    </View>
  );
};

export default ProgressBarComponent;
const styles = StyleSheet.create({
  propertyView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 10,
    alignSelf: 'center',
    width: responsiveWidth(78),
    padding: 10,
    margin: 8,
  },
  iconView: {
    height: responsiveHeight(4),
    width: responsiveWidth(6.8),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(68),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  salesText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans a',
  },
  increaseText: {
    color: '#a0aec0',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.6),
  },
  saleTextView: {
    marginRight: responsiveWidth(6),
  },
  percentageText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  bar: {
    width: responsiveWidth(68),
    marginTop: responsiveHeight(2.8),
    height: responsiveHeight(1),
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: responsiveHeight(1),
  },
});
