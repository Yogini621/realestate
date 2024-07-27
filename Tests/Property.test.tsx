import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Property from "../SellerScreens/Property";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

const mockNavigation = {
 navigate:jest.fn()
}

describe("Property Page",() => {
 it("renders correctly in Property Page",() => {
   const {getByTestId} = render(<Property navigation={mockNavigation} />)

   const menuBtn = getByTestId("menu")
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate('MenuPageSeller'));
 })
  it('Navigates correctly to Seller Screen Page', () => {
    const {getByTestId} = render(<Property navigation={mockNavigation} />);

    const menuBtn = getByTestId('seller');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('SellerSell'));
  });
})