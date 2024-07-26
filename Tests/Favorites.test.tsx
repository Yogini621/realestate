import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Favorites from '../Screens/Favorites';
import { useDispatch } from 'react-redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

const mockNavigation = {
  navigate: jest.fn(),
};

describe('Favorites Page', () => {
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
  });
  it('renders correctly in Favorites Page', () => {
    const {getByTestId} = render(<Favorites navigation={mockNavigation} />);
        const menuBtn = getByTestId('menu');
        fireEvent.press(menuBtn);
        expect(mockNavigation.navigate('MenuPage'));  
});
});
