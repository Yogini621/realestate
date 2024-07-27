import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SellerDashBoard from '../SellerScreens/SellerDashBoard'

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');


jest.mock('react-native-gifted-charts', () => {
  return {
    BarChart: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe("Seller DashBoard",() => {
 it("renders correctly in SellerDashBoard Screen",() => {
   const {getByTestId} = render(<SellerDashBoard navigation={mockNavigation} />)

   const menuBtn = getByTestId('menu')
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate("MenuPageSeller"))

 })
})