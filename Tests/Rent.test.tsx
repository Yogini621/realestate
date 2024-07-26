import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Rent from "../Screens/Rent";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});


const mockNavigation = {
 navigate:jest.fn()
}

describe("Rent Page",() => {
 it("renders correctly in Rent Page",() => {
   const {getByTestId} = render(<Rent navigation={mockNavigation} />)
 const menuBtn = getByTestId('menu');
 fireEvent.press(menuBtn);
 expect(mockNavigation.navigate('MenuPage'));  

 })
})