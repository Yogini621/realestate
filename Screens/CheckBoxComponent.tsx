import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface Props{
  text:String
}

const CheckBoxComponent= (props:Props) => {
const [checked, setChecked] = useState(false);

  return (
    <View>
      <View style={styles.checkBoxView}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(true)}
          color="#073762"
        />
        <Text style={styles.residentialText}>{props.text}</Text>
      </View>
    </View>
  );
}

export default CheckBoxComponent

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  residentialText: {
    color: '#222222',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
    left: responsiveWidth(1.6),
  },
});