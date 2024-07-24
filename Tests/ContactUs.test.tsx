import React from "react";
import {fireEvent, render} from '@testing-library/react-native'
import ContactUs from "../Screens/ContactUs";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/FontAwesome6', () => 'FontAwesome6');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');

const mockNavigation = {
 navigate:jest.fn()
}

describe("ContactUs",() => {
 it("renders correctly in Contact Us" ,() => {
    const {getByText,getByTestId} = render(<ContactUs navigation={mockNavigation}/>) 

    const menuBtn = getByTestId('menu')
    fireEvent.press(menuBtn)
    expect(mockNavigation.navigate("MenuPage"))

 })
})