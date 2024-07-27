import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MessageDetails from '../SellerScreens/MessageDetails';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');

const mockNavigation = {
  navigate: jest.fn(),
};

describe('MessageDetails', () => {
  it('renders correctly in MessageDetails Screen', () => {
    const {getByTestId} = render(<MessageDetails navigation={mockNavigation} />);

    const menuBtn = getByTestId('menu');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('MenuPageSeller'));
  });
});
