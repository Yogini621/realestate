import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Sell from "../SellerScreens/SellerSell";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');

const mockNavigation = {
 navigate:jest.fn()
}

describe("Seller Sell Page",() => {
 it("renders correctly in SellerSell Page",() => {
  const {getByTestId} = render(<Sell navigation={mockNavigation} />)

   const menuBtn = getByTestId('menu');
   fireEvent.press(menuBtn);
   expect(mockNavigation.navigate('MenuPage'));  


 })
})