import React from "react";
import {fireEvent, render} from '@testing-library/react-native'
import Message from "../SellerScreens/Message";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');

const mockNavigation = {
 navigate:jest.fn()
}

describe("Message Page",() => { 
 it("renders corretly in Message Page",() => {
   const {getByText,getByTestId} = render(<Message navigation={mockNavigation} />)

   const menuBtn = getByTestId('menu');
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate('MenuPageSeller'));

 })
 it('Checks Navigates correctly to MessageDetails Page',() => {
   const {getByTestId,getAllByTestId} = render(<Message navigation={mockNavigation} />)

   fireEvent.press(getAllByTestId('message')[0])
   expect(mockNavigation.navigate("MessageDetails"))

 })
})