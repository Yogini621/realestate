import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import MyPurchasesPage from '../Screens/MyPurchasesPage'

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    AsyncStorage: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe('MyPurchasesPage',() => {
 it("renders correctly in MyPurchases Page",() => {
   const {getByTestId,getByText} = render(<MyPurchasesPage navigation={mockNavigation} />)
   const menuBtn = getByTestId('menu')
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate("MenuPage"))
 })
})