import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PrivacyPolicy from '../Screens/PrivacyPolicy';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');

const mockNavigation = {
  navigate: jest.fn()
};

describe('Privacy Policy', () => {
  it('renders correctly in Privacy Policy', () => {
    const {getByTestId} = render(<PrivacyPolicy navigation={mockNavigation} />);

    const menuBtn = getByTestId('menu');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('MenuPage'));
  });
});
