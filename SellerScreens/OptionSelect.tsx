import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions';

interface Props {
  optionText:string;
  onPress:() => void
}

const OptionSelect = (props:Props) => {
  return (
    <View>
     <TouchableOpacity style = {styles.button} onPress={props.onPress}>
       <Text style = {styles.optionText}>{props.optionText}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default OptionSelect

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 8,
    margin: 5,
    paddingVertical:8,
    paddingHorizontal:10
  },
  optionText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    color: '#737787',
  },
});