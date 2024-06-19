import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

interface Props {
  optionText: string;
  onPress: () => void;
  color?: string;
}

const OptionComponent = (props: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style = {styles.button}>
        <Text style = {[styles.optionText,{color:props.color}]}>{props.optionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  optionText: {
    color: '#33333380',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  button:{
 alignSelf:'center',
 marginTop:responsiveHeight(4)
  }
});
