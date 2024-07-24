import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import Buy from '../Screens/Buy'

jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

const mockNavigation = {
  navigate:jest.fn()
}

describe("Buy",() => {
 it("renders correctly in Buy Page" ,() => {
   const {getByText,getByTestId} = render(<Buy navigation={mockNavigation} />)

   const menuBtn = getByTestId("menu")
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate("MenuPage"))
 })
 it("navigates Properties1 Page correctly or not" ,() => {
   const {getByTestId} = render(<Buy navigation={mockNavigation} />)

   const list1Btn = getByTestId("list1")
   fireEvent.press(list1Btn)
   expect(mockNavigation.navigate('PropertyListings1'));
 })
  it('navigates Properties2 Page correctly or not', () => {
    const {getByTestId} = render(<Buy navigation={mockNavigation} />);

    const list1Btn = getByTestId('list2');
    fireEvent.press(list1Btn);
    expect(mockNavigation.navigate('PropertyListings2'));
  });
    it('navigates Properties3 Page correctly or not', () => {
      const {getByTestId} = render(<Buy navigation={mockNavigation} />);

      const list1Btn = getByTestId('list3');
      fireEvent.press(list1Btn);
      expect(mockNavigation.navigate('PropertyListings3'));
    });
})