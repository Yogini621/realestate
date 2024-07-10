import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Amenitites = () => {
  const [selectId, setSelectId] = useState(0);

  const options = [
    {id: 1, option: 'A/C'},
    {id: 2, option: 'Deck'},
    {id: 3, option: 'Pet Friendly'},
    {id: 4, option: 'Pool'},
    {id: 5, option: 'Free Parking Spots'},
    {id: 6, option: 'Yard'},
    {id: 7, option: 'Free Wi-Fi'},
    {id: 8, option: 'Gym'},
    {id: 9, option: 'Hardwood Floor'},
    {id: 10, option: 'Jacuzzi'},
  ];

  const selectOption = (id: number) => {
    setSelectId(id);
  };
  
  return (
    <View style={styles.optionView}>
      {options.map(item => (
        <TouchableOpacity
          style={selectId === item.id ? styles.activeButton : styles.button}
          onPress={() => selectOption(item.id)}>
          <Text
            style={
              selectId === item.id ? styles.activeText : styles.optionText
            }>
            {item.option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Amenitites;
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderRadius: 8,
    margin: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    color: '#737787',
  },
  optionView: {
    flexDirection: 'row',
    margin: 5,
    flexWrap: 'wrap',
    left: responsiveWidth(2),
  },
  activeButton: {
    borderWidth: 1,
    borderColor: '#073762',
    backgroundColor: '#9fc5e9',
    borderRadius: 8,
    margin: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  activeText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'PlusJakartaSans j',
    color: '#073762',
  },
});
