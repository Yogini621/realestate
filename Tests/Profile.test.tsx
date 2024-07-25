import React from "react";
import { render } from "@testing-library/react-native";
import Profile from "../Screens/Profile";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5')
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});


jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    AsyncStorage: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe("Profile Page",() => {
 it("renders correctly in Profile Page",() => {
   const {getByTestId} = render(<Profile navigation={mockNavigation} />)
 })
})