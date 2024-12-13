import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Props {
  buttonText: string;
  onPress: () => void;
}

const ButtonComponent = (props:Props) => {
  return (
    <View>
      <View style={styles.priceButton}>
        <Text style={styles.anyPriceText}>{props.buttonText} </Text>
        <TouchableOpacity style={styles.iconView1} onPress={props.onPress}>
          <FontAwesome5 name="chevron-up" color="#073762" size={8} />
          <FontAwesome5 name="chevron-down" color="#073762" size={8} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  priceButton: {
    height: responsiveHeight(5),
    width: responsiveWidth(28),
    borderColor: '#e0def7',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  anyPriceText: {
    color: '#9b9b9b',
  },
  iconView1: {
    height: 18,
    width: 18,
    backgroundColor: '#e0def7',
    borderRadius: 9,
    left: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
