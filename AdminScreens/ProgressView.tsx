import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CircularProgress from 'react-native-circular-progress-indicator';
// import {ProgressCircle} from 'react-native-svg-charts';


interface Props {
  textLabel: string;
  percentage: number;
  count:string;
  progressColor:string;

}

const ProgressView = (props: Props) => {
  return (
    <View style={styles.propertyView}>
      <View style = {styles.progressDirectionView}>
        <View>
          <Text style={styles.labelTxt}>{props.textLabel}</Text>
          <Text style={styles.count}>{props.count}</Text>
        </View>
        <CircularProgress
          value={props.percentage}
          inActiveStrokeColor={'#f2f6fc'}
          inActiveStrokeOpacity={0.8}
          progressValueColor={'#f2f6fc'}
          radius={20}
          activeStrokeWidth={22}
          inActiveStrokeWidth={22}
          activeStrokeColor={props.progressColor}
        />
      </View>
    </View>
  );
};

export default ProgressView;

const styles = StyleSheet.create({
  propertyView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 14,
    margin: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal:18,
    paddingVertical:10
  },
  labelTxt: {
    color: '#737b8b',
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(22),
    fontFamily: 'PlusJakartaSans j',
    marginTop:responsiveHeight(1)
  },
  count: {
    color: '#000000',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2.8),
  },
  progressDirectionView:{
   flexDirection:'row',
   alignItems:'center'

  }
});
