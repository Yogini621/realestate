import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

interface Props {
  optionText: string;
  onPress?: () => void;
  color?: string;
  modalVisible?:() => void
}

const OptionComponent = (props: Props) => {

const [clicked,setClicked] = useState(false)

const handlePress = () => {
  setClicked(!clicked)
 props.onPress
}

  return (
    <View>
      <TouchableOpacity onPress={props.onPress || props.modalVisible} style={styles.button}>
        <Text style={[styles.optionText, clicked && styles.seletText]}>
          {props.optionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  optionText: {
    color: '#333333cc',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
  button: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  seletText: {
    color: '#222222',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans m',
  },
});
