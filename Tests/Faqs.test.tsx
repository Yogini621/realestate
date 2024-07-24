import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import Faqs from '../Screens/Faqs'

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');

const mockNavigation = {
 navigate:jest.fn()
}

describe("Faqs Page",() => {
 it('renders correctly in Faqs Page',() => {
  const {getByText,getByTestId} = render(<Faqs navigation={mockNavigation} />)

  const menuBtn = getByTestId('menu')
  fireEvent.press(menuBtn)
  expect(mockNavigation.navigate('MenuPage'))
   
 })
})