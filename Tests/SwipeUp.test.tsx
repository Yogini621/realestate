import React from "react";
import {fireEvent, render} from '@testing-library/react-native'
import SwipeUp from "../Screens/SwipeUp";
import { useDispatch } from "react-redux";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe("SwipeUp Page",() => {
  const mockedDispatch = jest.fn();
  (useDispatch as unknown as jest.Mock).mockReturnValue(mockedDispatch);

beforeEach(() => {
    (jest.requireMock('react-redux') as any).useSelector.mockImplementation(
      (selector: any) =>
        selector({
          favorites: {favorites: []},
        }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

 it('renders correctly in Swipe Up Page',() =>{
   const {getByTestId} = render(<SwipeUp navigation={mockNavigation} />)

   const menuBtn = getByTestId('menu')
   fireEvent.press(menuBtn)
   expect(mockNavigation.navigate("MenuPage"))
 })
})